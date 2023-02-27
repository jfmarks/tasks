/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    const newNum: number[] = [...numbers];
    newNum.splice(1, numbers.length - 2);
    if (newNum.length < 2 && newNum.length !== 0) {
        newNum.push(newNum[0]);
    }
    return newNum;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const newNum: number[] = numbers.map((num: number): number => num * 3);
    return newNum;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const nums: number[] = numbers.map((item: string): number =>
        parseInt(item) ? parseInt(item) : 0
    );
    return nums;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const dollar: number[] = amounts.map((item: string): number => {
        if (parseInt(item)) {
            return parseInt(item);
        } else if (parseInt(item.substring(1))) {
            return parseInt(item.substring(1));
        } else {
            return 0;
        }
    });
    return dollar;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const shouted: string[] = messages
        .map((item: string): string =>
            item.at(-1) === "!" ? item.toUpperCase() : item
        )
        .filter((item: string): boolean => item.at(-1) !== "?");
    return shouted;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const lesswords: string[] = words
        .map((item: string): string => item)
        .filter((item: string): boolean => item.length < 4);
    return lesswords.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    return colors.every(
        (item: string): boolean =>
            item === "red" || item === "blue" || item === "green"
    );
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length === 0) {
        return "0=0";
    }
    const newAdds: number[] = [...addends].slice(1);
    let results: string = addends[0].toString();
    let sum = addends[0];
    for (const num of newAdds) {
        results += "+" + num.toString();
        sum += num;
    }
    return sum.toString() + "=" + results;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    let newVals: number[] = [...values];
    let sum = 0;
    for (const num of values) {
        if (num >= 0) {
            sum += num;
        } else {
            newVals.splice(
                newVals.findIndex((item: number): boolean => item === num) + 1,
                0,
                sum
            );
            return newVals;
        }
    }
    newVals.push(sum);
    return newVals;
}
