import { describe, expect, it, beforeAll } from "vitest";
import { JSDOM } from "jsdom";
import {fizzbuzz} from "../src/js/fizzbuzz";

describe('FizzBuzz', () => {
    it('should return exist function "fizzbuzz',()=>{
        expect(fizzbuzz).toBeDefined();
    });

    it('should print Fizz when the number is multiple 3',()=>{
        const number=6;
        const sut = fizzbuzz(number)
        expect(sut).toBe("Fizz")
    })

    it('should print Buzz when the number is multiple 5',()=>{
        const number=5;
        const sut = fizzbuzz(number)
        expect(sut).toBe("Buzz")
    })

    it('should print FizzBuzz when the number is multiple 3 and 5',()=>{
        const number=15;
        const sut = fizzbuzz(number)
        expect(sut).toBe("FizzBuzz")
    })
    
    
});
