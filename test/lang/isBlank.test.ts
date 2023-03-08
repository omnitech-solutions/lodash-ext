import isBlank from '../../src/lang/isBlank';

describe('isBlank', () => {
    it('returns true with blank values', () => {
        ['', '  ', null, {}, 0].forEach((val) => {
            expect(isBlank(val)).toBeTruthy()
        })
    })

    it('returns false with non blank values', () => {
        ['1', ' a ', {a: 1}, 1].forEach((val) => {
            expect(isBlank(val)).toBeFalsy()
        })
    })
})