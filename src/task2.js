/**
 * @param {string[]} values - Массив строк
 * @returns {number} Сумма по численным данным
 *
 * @description Подсчет суммы элементов массива,
 * корректно переводимых из строки в численный вид.
 */
export function calculateSum(values) {
  if (values.length === 0) {
    throw new Error("Передан пустой массив");
  }

  if (!isNaN(values)) {
    throw new Error("Отсутствуют численные данные");
  }

  let sum = 0;

  for (let i = 0; i < values.length; i++) {
    const num = Number(values[i]);
    if (!isNaN(num)) {
      sum += num;
    }
  }

  return sum;
}
