function digits_int(target) {
  let val = target.value.replace(/[^0-9]/g, '');
  val = val.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  target.value = val;
}

// Функция для удаления символа процента из значения и преобразования его в десятичную дробь
function parsePercent(value) {
  return parseFloat(value.replace('*', '').replace(',', '.'));
}

document.addEventListener('DOMContentLoaded', function() {
  const sumInput = document.querySelector('#sum');
  
  sumInput.addEventListener('input', function(e) {
    digits_int(this);
  });
  
  digits_int(sumInput);
});

function calculate() {
  // Получаем значения цены и количества
  const price = document.querySelector('.input1').value.replace(/\s/g, ''); // 5000
  const quantity = document.querySelector('.input2').value.replace(/\s/g, ''); // 1
  
  // Получаем значение процента и переводим его в десятичную дробь
  const percentValue = document.querySelector('.input3').value.replace(/\s/g, ''); // 1,3%
  const percent = parsePercent(percentValue); // 0.013

  // Вычисляем цену продажи и прибыль
  const result1 = price * percent * quantity; // 5000 * 0.013
  const result2 = result1 -  price * quantity; 
  
  // Форматируем числа с помощью функции toLocaleString()
  const formattedResult1 = Math.floor(result1).toLocaleString('en-US', { style: 'currency', currency: 'USD' }).replace(/\.00$/, '');
  const formattedResult2 = Math.floor(result2).toLocaleString('en-US', { style: 'currency', currency: 'USD' }).replace(/\.00$/, '');

  // Выводим результаты на экран
  document.querySelector('.result-1').innerText = `Цена продажи: ${formattedResult1}`;
  document.querySelector('.result-2').innerText = `Прибыль: ${formattedResult2}`;
}

AOS.init();