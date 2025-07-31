/**
 * Форматирует число, добавляя пробелы между тысячами (по стандарту 'ru-RU').
 *
 * @example
 * addWhitespaces(1000); // "1 000"
 * addWhitespaces(5000000); // "5 000 000"
 *
 * @param {number} value - Число для форматирования.
 * @returns {string} Число с пробелами в качестве разделителей.
 */
export function addWhitespaces(value) {
    return new Intl.NumberFormat('ru-RU').format(value);
}
