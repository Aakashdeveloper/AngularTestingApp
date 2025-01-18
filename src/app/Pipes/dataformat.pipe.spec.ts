import { DateformatPipe } from "./dateformat.pipe";

describe('DateFormatPipe',() => {
    let pipe: DateformatPipe;

    beforeEach(() => {
        pipe = new DateformatPipe();
    })

    it('should create an instance', () => {
        expect(pipe).toBeTruthy();
    });
    it('should transform "19 Oct, 2024" to "19/10/2024"', () => {
        expect(pipe.transform('19 Oct, 2024')).toBe('19/10/2024');
      });
    
      it('should transform "5 Feb, 2024" to "05/02/2024" (single-digit day)', () => {
        expect(pipe.transform('5 Feb, 2024')).toBe('05/02/2024');
      });
    
      it('should return the original input "11 XYZ, 2024" if month is invalid', () => {
        expect(pipe.transform('11 XYZ, 2024')).toBe('11 XYZ, 2024');
      });
    
      it('should return the original input "11 Jan 2024" if format is incorrect (missing comma)', () => {
        expect(pipe.transform('11 Jan 2024')).toBe('11 Jan 2024');
      });
    
      it('should transform "1 Dec, 2024" to "01/12/2024" (single-digit day)', () => {
        expect(pipe.transform('1 Dec, 2024')).toBe('01/12/2024');
      });
    
      it('should return an empty string if input is null', () => {
        expect(pipe.transform(null)).toBe('');
      });
    
      it('should return an empty string if input is an empty string', () => {
        expect(pipe.transform('')).toBe('');
      });
    
      it('should return the original input "Invalid Date" for completely invalid input', () => {
        expect(pipe.transform('Invalid Date')).toBe('Invalid Date');
      });
    
      it('should transform "25 Nov, 2024" to "25/11/2024"', () => {
        expect(pipe.transform('25 Nov, 2024')).toBe('25/11/2024');
      });
    
      it('should transform "2 Mar, 1999" to "02/03/1999" (single-digit day and old year)', () => {
        expect(pipe.transform('2 Mar, 1999')).toBe('02/03/1999');
      });
}) 