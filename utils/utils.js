/**
 * Check if data contains the words hi, hello; Data is also normalized so we can validate properly
 * @param {string} data 
 * @returns {boolean}
 */
export function isGreetingExists(data) {
    return /\b(hi|hello)\b/g.test(data.toLocaleLowerCase());
}

/**
 * Check if data contains the words hi, hello; Data is also normalized so we can validate properly
 * @param {string} data 
 * @returns {boolean}
 */
export function isFarewellExists(data) {
    return /\b(goodbye|bye)\b/g.test(data.toLocaleLowerCase());
}