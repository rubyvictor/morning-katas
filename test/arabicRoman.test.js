const arabicRoman = require('../src/arabicRoman');

describe('Arabic 1 to Roman I', () => {
    it('arabicRoman(1) should return I', () => {
        expect(arabicRoman(1)).toEqual("I")
    });

    it('arabicRoman(2) should return II', () => {
        expect(arabicRoman(2)).toEqual("II");
    });

    it('arabicRoman(3) should return III', () => {
      expect(arabicRoman(3)).toEqual('III');
    });

    it('arabicRoman(4) should return IV', () => {
      expect(arabicRoman(4)).toEqual('IV');
    });
    
    it('arabicRoman(5) should return V', () => {
      expect(arabicRoman(5)).toEqual('V');
    });

    it('arabicRoman(6) should return VI', () => {
      expect(arabicRoman(6)).toEqual('VI');
    });

    it('arabicRoman(7) should return VII', () => {
      expect(arabicRoman(7)).toEqual('VII');
    });

    it('arabicRoman(8) should return VIII', () => {
      expect(arabicRoman(8)).toEqual('VIII');
    });

    it('arabicRoman(9) should return IX', () => {
      expect(arabicRoman(9)).toEqual('IX');
    });

    it('arabicRoman(10) should return X', () => {
      expect(arabicRoman(10)).toEqual('X');
    });

    it('arabicRoman(11) should return X', () => {
      expect(arabicRoman(11)).toEqual('XI');
    });

    
});