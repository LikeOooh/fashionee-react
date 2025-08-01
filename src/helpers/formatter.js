/**
 * Форматирует число в строку с валютой (USD), используя пробелы в качестве разделителей тысяч.
 *
 * @example
 * addWhitespaces(1234567.89); // "$1 234 567.89"
 * addWhitespaces(5000.5);     // "$5 000.50"
 *
 * @param {number} value - Число для форматирования.
 * @returns {string} Отформатированная строка с валютой и пробелами (например, "$1 234 567.89").
 */
export function addWhitespaces(value) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    })
        .format(value)
        .replace(/,/g, ' ');
}
