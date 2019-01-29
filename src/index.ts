class Adder {
    /**
     *
     * @param numbers - Array<number>
     * @returns number
     */
    public add(numbers: number[]): number {
        return numbers.reduce((coll, current) => current + coll)
    }
}

export { Adder }
