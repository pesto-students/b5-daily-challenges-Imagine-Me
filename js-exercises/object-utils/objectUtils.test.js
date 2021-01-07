import { all, filter, invert, map, merge, some } from './objectUtils';
Object.prototype.map = map;
Object.prototype.filter = filter
Object.prototype.invert = invert
Object.prototype.all = all
Object.prototype.some = some
// write your own test cases


describe("Object map testing", () => {
    it('should change key and values', () => {
        const obj = {
            a: 1,
            b: 2,
            c: 3
        };
        expect(obj.map(([key, value]) => [`new${key}`, value * 2]))
            .toEqual(expect.objectContaining({
                newa: 2,
                newb: 4,
                newc: 6
            }));
        expect(obj.map(([key, value]) => [`${key}_updated`, value * 2]))
            .toEqual(expect.objectContaining({
                a_updated: 2,
                b_updated: 4,
                c_updated: 6
            }));
        expect(obj.map(([key, value]) => [key.toUpperCase(), value * 10]))
            .toEqual(expect.objectContaining({
                A: 10,
                B: 20,
                C: 30
            }));
    });
})

describe("Object Filter testing", () => {
    it('should filter object', () => {
        const obj = {
            a: 1,
            b: 2,
            c: 3
        };
        expect(obj.filter(([key, value]) => key === 'a'))
            .toEqual(expect.objectContaining({
                a: 1,
            }));
        expect(obj.filter(([key, value]) => value % 2 !== 0))
            .toEqual(expect.objectContaining({
                a: 1,
                c: 3
            }));
    });
})

describe("Object Invert testing", () => {
    it('should invert object', () => {
        const obj = {
            a: 1,
            b: 2,
            c: 3
        };
        expect(obj.invert())
            .toEqual(expect.objectContaining({
                '1': 'a',
                '2': 'b',
                '3': 'c',
            }));

    });
})

describe("Object Merge testing", () => {
    it('should merge objects', () => {
        const obj1 = {
            a: 1,
            b: 2,
            c: 3
        };
        const obj2 = {
            d: 1,
            e: 2,
            f: 3
        };
        expect(merge(obj1, obj2))
            .toEqual(expect.objectContaining({
                a: 1,
                b: 2,
                c: 3,
                d: 1,
                e: 2,
                f: 3
            }));
    });
})

describe("Object All testing", () => {
    it('should return true if all value is meet the condition', () => {
        const obj = {
            a: 1,
            b: 2,
            c: 3
        };
        expect(obj.all(val => val > 3))
            .toBe(false)
        expect(obj.all(val => val < 4))
            .toBe(true)
    });
})

describe("Object Some testing", () => {
    it('should should return true if any one of the value meet the condition', () => {
        const obj = {
            a: 1,
            b: 2,
            c: 3
        };
        expect(obj.some(val => val > 3))
            .toBe(false)
        expect(obj.some(val => val < 2))
            .toBe(true)
    });
})