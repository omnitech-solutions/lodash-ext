import toBoolean from '../../src/lang/toBoolean';

describe('toBoolean', () => {
    it('converts text to boolean', () => {
        expect(toBoolean('  true  ')).toEqual(true)
        expect(toBoolean('true')).toEqual(true)
        expect(toBoolean(true)).toEqual(true)
        expect(toBoolean('yes')).toEqual(true)
        expect(toBoolean('1')).toEqual(true)

        expect(toBoolean('0')).toEqual(false)
        expect(toBoolean('no')).toEqual(false)
        expect(toBoolean('   ')).toEqual(false)
        expect(toBoolean('  false  ')).toEqual(false)
        expect(toBoolean('false')).toEqual(false)
        expect(toBoolean(false)).toEqual(false)
        expect(toBoolean('adsklj')).toEqual('adsklj')
        // @ts-ignore
        expect(toBoolean(undefined)).toEqual(false)
        expect(toBoolean(null)).toEqual(false)
        // @ts-ignore
        expect(toBoolean({})).toEqual({})
        // @ts-ignore
        expect(toBoolean([])).toEqual([])
    })
})