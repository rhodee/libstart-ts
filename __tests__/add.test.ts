import { Adder } from '../src'

describe('add', () => {
    it('accepts numbers in an array and returns a single value', () => {
        const addable = new Adder()
        expect(addable.add([1, 1, 30, 10])).toEqual(42)
    })

    it('accepts signed inputs and return the correct value', () => {
        const addable = new Adder()
        expect(addable.add([1, 1, 30, -10])).toEqual(22)
    })
})
