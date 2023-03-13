import { rejectObject, deepKeys, compactObject, mapObject, filterObject } from '../../src/common/objelity';

describe('objelity', () => {
  it('deepKeys', () => {
    let obj = {
      a: {
        b: {
          c: [1, 2, 3]
        },
        d: new Date()
      },
      e: {
        f: {
          g: 'h'
        }
      }
    };
    let _keys = deepKeys(obj);

    expect(_keys).toEqual(['a.b.c.0', 'a.b.c.1', 'a.b.c.2', 'a.d', 'e.f.g']);

    // @ts-ignore
    obj = [
      {
        name: 'alice',
        age: 17
      },
      {
        name: 'bob',
        age: 32
      },
      {
        name: 'charlie',
        age: 25
      }
    ];
    _keys = deepKeys(obj);
    expect(_keys).toEqual(['0.name', '0.age', '1.name', '1.age', '2.name', '2.age']);
  });

  describe('compactObject', () => {
    it('compactObject(obj)', () => {
      const obj = {
        aaa: {
          bbb: {
            ccc: 1,
            ddd: 0
          },
          eee: {
            fff: void 0,
            ggg: null
          },
          hhh: {
            iii: {
              jjj: true
            }
          }
        }
      };

      expect(compactObject(obj)).toEqual({
        aaa: {
          bbb: {
            ccc: 1,
            ddd: 0
          },
          hhh: {
            iii: {
              jjj: true
            }
          }
        }
      });
    });
  });

  describe('mapObject', () => {
    it('mapObject(obj, fn) with sum', () => {
      const obj = {
        aaa: {
          bbb: {
            ccc: 1,
            ddd: 2
          },
          eee: {
            fff: 3,
            ggg: 4
          }
        }
      };

      // @ts-ignore
      const newObj = mapObject(obj, (val) => val * 2);

      expect(newObj).toEqual({
        aaa: {
          bbb: {
            ccc: 2,
            ddd: 4
          },
          eee: {
            fff: 6,
            ggg: 8
          }
        }
      });
    });

    it('mapObject(obj, fn) with returned array', () => {
      const obj = {
        aaa: {
          bbb: {
            ccc: 1,
            ddd: 0
          },
          eee: {
            fff: void 0,
            ggg: null
          }
        }
      };
      const newObj = mapObject(obj, function (val, path) {
        let newPath;
        // @ts-ignore
        if (path.match(/aaa\.bbb/)) {
          // @ts-ignore
          newPath = path.replace('aaa.bbb', 'xxx');
          return [newPath, val];
        } else {
          return [path, val];
        }
      });
      expect(newObj).toEqual({
        xxx: {
          ccc: 1,
          ddd: 0
        },
        aaa: {
          eee: {
            fff: void 0,
            ggg: null
          }
        }
      });
    });

    it('mapObject(obj, fn) with returned object', () => {
      const obj = {
        aaa: {
          bbb: {
            ccc: 1,
            ddd: 0
          },
          eee: {
            fff: void 0,
            ggg: null
          }
        }
      };
      // @ts-ignore
      const newObj = mapObject(obj, (val, path) => {
        let newPath;
        // @ts-ignore
        if (path.match(/aaa\.bbb/)) {
          // @ts-ignore
          newPath = path.replace('aaa.bbb', 'xxx');
          return {
            [newPath]: val
          };
        } else {
          return {
            // @ts-ignore
            [path]: val
          };
        }
      });

      expect(newObj).toEqual({
        xxx: {
          ccc: 1,
          ddd: 0
        },
        aaa: {
          eee: {
            fff: void 0,
            ggg: null
          }
        }
      });
    });
  });

  describe('rejectObject', () => {
    it('rejectObject(obj, fn)', () => {
      const obj = {
        aaa: {
          bbb: {
            ccc: 1,
            ddd: 2
          },
          eee: {
            fff: 3,
            ggg: 4
          }
        }
      };
      // @ts-ignore
      const newObj = rejectObject(obj, (val) => val % 2 === 0);

      expect(newObj).toEqual({
        aaa: {
          bbb: {
            ccc: 1
          },
          eee: {
            fff: 3
          }
        }
      });
    });

    it('rejectObject(obj, array)', () => {
      const obj = {
        a: 1,
        b: 2,
        c: 3
      };

      expect(rejectObject(obj, ['b'])).toEqual({
        a: 1,
        c: 3
      });
    });

    it('rejectObject(obj, nestedArray)', () => {
      const obj = {
        a: {
          aa: 11,
          bb: 22
        },
        b: 2,
        c: 3
      };

      expect(rejectObject(obj, ['a'])).toEqual({
        b: 2,
        c: 3
      });

      expect(rejectObject(obj, ['a.b', 'c'])).toEqual({
        a: {
          aa: 11
        },
        b: 2
      });
    });
  });

  describe('filterObject', () => {
    test('filterObject(obj, fn)', () => {
      const obj = {
        aaa: {
          bbb: {
            ccc: 1,
            ddd: 2
          },
          eee: {
            fff: 3,
            ggg: 4
          }
        }
      };

      // @ts-ignore
      const newObj = filterObject(obj, (val) => val % 2 === 0);

      expect(newObj).toEqual({
        aaa: {
          bbb: {
            ddd: 2
          },
          eee: {
            ggg: 4
          }
        }
      });
    });

    test('filterObject(obj, array)', () => {
      const obj = {
        a: 1,
        b: 2,
        c: 3
      };

      expect(filterObject(obj, ['a', 'c'])).toEqual({
        a: 1,
        c: 3
      });
    });

    test('filterObject(obj, nestedArray)', () => {
      const obj = {
        a: {
          aa: 11,
          bb: 22
        },
        b: 2,
        c: 3
      };

      expect(filterObject(obj, ['a', 'c'])).toEqual({
        a: {
          aa: 11,
          bb: 22
        },
        c: 3
      });

      expect(filterObject(obj, ['a.b', 'c'])).toEqual({
        a: {
          bb: 22
        },
        c: 3
      });
    });
  });
});
