addEventListener('DOMContentLoaded', () => {

// 1. Дана форма, напишите проверку: на правильность заполнения двух текстовых полей: имя (id="name") и минут (id="minutes"). Используйте проверку на оставление поля пустым ("") и правильного формата. заполнения числового поля (isNaN).

let form = document.querySelector('.form');
let input = document.getElementById('input');
let testName = /^[A-ZА-ЯЁ]{1}[a-zа-яё]{2,}/;
let testMinutes = /^[1-9]+[0-9]*$/;

input.addEventListener('click', placeOrder);


function placeOrder() {
  event.preventDefault();
  parseForm(form)
  if (testName.test(form.name.value)) {
  }
  else if (form.name.value === '') {
    alert('введите имя');
  }
  else {
    alert('введите корректное имя');
  }
  if (testMinutes.test(form.minutes.value)) {
  }
  else if (form.minutes.value === '') {
    alert('введите кол-во минут');
  }  
  else {
    alert('введите правильное число');
  }
}



// 2.Создать страницу с текстовым полем и двумя кнопками. При нажатии одной из них происходит передача данных содержимого текстового поля по электронной почте (action="mailto:address@domen.domen"), при нажатии другой – происходит очистка текстового поля.

let clearTextArea = document.getElementsByName('clear')[0];
let clearTextAreaSlow = document.getElementsByName('clear-slow')[0];
clearTextArea.addEventListener('click', clearText);
clearTextAreaSlow.addEventListener('click', clearTextSlow);
let form2 = document.querySelector('.form2');

function clearText() {
  form2.textarea.value = '';
}

function clearTextSlow() {
  let length = form2.textarea.value.length;
  removeOneSymbol();

  if (length === 1) {
    return
  } else setTimeout(clearTextSlow, 100);
}

function removeOneSymbol() {
  let text = form2.textarea.value;
  newText = text.split('');
  newText.pop();
  newText = newText.join('');
  form2.textarea.value = newText;
  }



// 3.Напишите универсальную функцию для прохождения по полям формы с возможностью проверки введенных данных, для тектовых полей - на текст, для имейла - на имейл и тд.
// 4. Поверьте написанную ранее функция на обработку форы регистрации, если поле не проходит валидацию - подсветите его, если все поля валидные - выведите приветственное сообщение.

function parseForm(form) {
  let email = /^[0-9a-z]{1,}[0-9a-z._-]*@[0-9a-z]{1,}\.[0-9a-z]{1,}$/;
  let text = /^[0-9a-zа-я]{1,}[\b\s0-9a-zа-яё!?,д.:;<>*=«»'“„"%()—/-]*$/i;
  let password = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/;
  let tel = /^375[0-9]{9}$/;
  let flagEnd = 1;
  
  for ( let i = 0; i < form.elements.length; i++) {
    if (form[i].type === 'email') {
      if (!email.test(form[i].value)) {
        form[i].focus();
        flagEnd = 0;
      } 
    }

    if (form[i].tagName === 'TEXTAREA' || form[i].type === 'text') {
      if (!text.test(form[i].value)) {
        form[i].focus();
        flagEnd = 0;
      }
    }

    if (form[i].type === 'password') {
      if (!password.test(form[i].value)) {
        form[i].focus();
        flagEnd = 0;
      } 
    }

    if (form[i].type === 'tel') {
      if (!tel.test(form[i].value)) {
        form[i].focus();
        flagEnd = 0;
      }}
  }


    let checkedCheckbox = (form.querySelectorAll('input[type=checkbox]:checked').length);
    if (checkedCheckbox === 0) {
        alert('выберите напиток');
        flagEnd = 0;
    }
    let checkedRadio = (form.querySelectorAll('input[type=radio]:checked').length);
    if (checkedRadio === 0) {
        alert('выберите количество');
        flagEnd = 0;
    }

    if (flagEnd) {
    let report = document.createElement('div');
    report.innerHTML = "<strong>Форма отправлена!</strong>";
    form.after(report)  
    }
}

// 5. Написать скрипт, которые заменяет слово «функция» в тексте на «функция», используя регулярные выражения.

let str = 'Написать скрипт, которые заменяет слово «функция» в тексте на «функция», используя регулярные выражения.';
let reg = /функция/;
let newStr = 'ФункциЯ';
for ( ; str.search(reg) != -1 ; ) {
  let n = str.search(reg);
  let arr = str.split('');
  for (let i = 0; i < newStr.length; i++) {
    arr[n + i] = newStr[i];
  }
  str = arr.join('');
}



// 6. С помощью test определите, что переданная строка является корректным временем вида '9.59 am', '12.30 pm'.

let regTime = /^((1[0-2])|([1-9]))\.[0-9][0-9]\s[ap]m$/;
console.log(regTime.test('9.50 am'))



// 7. Удалите одной регуляркой все повторяющиеся слова из строки, например для 'dsf xxx xxx sd' должно вернуть 'dsf xxx sd'.







});