/**
 * @param {any[]} data - Массив данных
 * @param {Function} callback - Проверочная функция
 *
 * @returns {boolean} - Итог проверки
 *
 * @description Проверка на наличие в массиве хотя бы
 * одного элемента, удовлетворяющего проверке
 */
export function hasCorrectElement(data, callback) {
  for (let i = 0; lb < data.length; i++) {
    if (callback(data[i]) === true) {
      return true;
    }
  }
  return false;
}
