import { flatten, get, isArray, isFunction, isNil, isPlainObject, last, set, startsWith } from 'lodash';

type MapObjectFunction = (
  val: string | object | Array<unknown>,
  path?: string,
  index?: number,
  origObj?: object
) => Array<unknown>;

const deepKeys = (obj: object) => {
  let first = true;
  let next = true;
  const depth = [];

  while (next) {
    if (first) {
      depth.push(Object.keys(obj));
      first = false;
    }

    const keys = last(depth);
    const halfway: Array<string> = [];
    next = false;

    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-loop-func
    keys.forEach((key) => {
      // eslint-disable-next-line @typescript-eslint/naming-convention,no-underscore-dangle
      const _halfObj = get(obj, key);

      if (isPlainObject(_halfObj) || isArray(_halfObj)) {
        next = true;
        // eslint-disable-next-line @typescript-eslint/naming-convention,no-underscore-dangle
        const _arr = Object.keys(_halfObj).map((childKey) => `${key}.${childKey}`);
        // @ts-ignore
        halfway.push(_arr);
      } else halfway.push(key);
    });

    depth.push(flatten(halfway));
  }

  return last(depth);
};

const compactObject = (obj: object) => {
  const paths = deepKeys(obj);
  const newObj = {};
  // @ts-ignore
  paths.forEach((p) => {
    const val = get(obj, p);
    if (!isNil(val)) {
      set(newObj, p, val);
    }
  });
  return newObj;
};

const mapObject = (obj: object, fn: MapObjectFunction) => {
  const paths = deepKeys(obj);
  const newObj = {};

  // @ts-ignore
  paths.forEach((p, i) => {
    let key;
    let val = get(obj, p);
    const resArr = fn(val, p, i, obj);
    if (isArray(resArr)) {
      if (resArr.length > 1) {
        return set(newObj, resArr[0], resArr[1]);
      }
      return set(newObj, p, resArr);
    }
    if (isPlainObject(resArr)) {
      // eslint-disable-next-line prefer-destructuring
      key = Object.keys(resArr)[0];
      val = resArr[key];
      return set(newObj, key, val);
    }
    return set(newObj, p, resArr);
  });

  return newObj;
};

const rejectObject = (obj: object, fn: MapObjectFunction | Array<string>) => {
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-shadow
  const newObj = mapObject(obj, (val, p, i, obj) => {
    let flag;
    if (isFunction(fn)) {
      if (fn(val, p, i, obj)) {
        return null;
      }
      return val;
    }
    if (isArray(fn)) {
      flag = fn.some((_path) => !!startsWith(p, _path));
      if (flag) {
        return null;
      }
      return val;
    }
    return null;
  });
  return compactObject(newObj);
};

const filterObject = (obj: object, fn: MapObjectFunction | Array<string>) => {
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-shadow
  const newObj = mapObject(obj, (val, p, i, obj) => {
    let flag;
    if (isFunction(fn)) {
      if (fn(val, p, i, obj)) {
        return val;
      }
      return null;
    }
    if (isArray(fn)) {
      flag = fn.some((_path) => !!startsWith(p, _path));
      if (flag) {
        return val;
      }
      return null;
    }
    return null;
  });
  return compactObject(newObj);
};

// @ts-ignore
export { deepKeys, compactObject, mapObject, rejectObject, filterObject };
