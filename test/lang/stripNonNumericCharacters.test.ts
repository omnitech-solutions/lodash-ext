import stripNonNumericCharacters from "../../src/lang/stripNonNumericCharacters";

describe('stripNonNumericCharacters', () => {
    it('removes non numeric values', () => {
        expect(stripNonNumericCharacters('1.333')).toEqual('1.333')
        expect(stripNonNumericCharacters('1.33ab3')).toEqual('1.333')
        expect(stripNonNumericCharacters('1,000,000')).toEqual('1000000')
    })
})