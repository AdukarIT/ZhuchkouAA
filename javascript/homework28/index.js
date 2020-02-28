// 1. Дан инпут. Дана кнопка. По нажатию на кнопку клонируйте этот инпут.

let btn = document.querySelector('.btn');
let input = document.querySelector('.input');
btn.addEventListener('click', copy);

function copy() {
  document.querySelector('.copy-input').append(input.cloneNode()) 
}



// 2. Добавьте на страницу таблицу в стандартном оформлении. При клике на таблице добавьте ей класс bordered, 
// при втором клике удалите класс bordered и добавьте класс striped, при третьем клике удалите класс striped и 
// добавьте класс highlight.

let table = document.querySelector('table');
table.addEventListener('click', addClass);

function addClass() {
  if (this.classList.contains("bordered")) {
    this.className = ('striped');
  }
  else if (this.classList.contains("striped")) {
    this.className = ('highlight');
  }
  else if (this.classList.contains("highlight") || !this.classList.contains("") ) {
    this.className = ('bordered');
  }
}



// 3. Модифицируйте задачу 2. Добавьте три radiobutton. При выборе первого включается класс bordered, 
// при выборе второго отключается bordered и включается striped, при выборе третьего включается highlight и отключается striped.

let radioBordered = document.getElementsByName('radio')[0];
let radioStriped = document.getElementsByName('radio')[1];
let radioHighlight = document.getElementsByName('radio')[2];

radioBordered.addEventListener('click', addClassRadio);
radioStriped.addEventListener('click', addClassRadio);
radioHighlight.addEventListener('click', addClassRadio);

function addClassRadio() {
  table.className = (this.value)
}



// 4. Создайте кнопку. При нажатии на кнопку с помощью элемента this выведите содержащийся в тегах кнопки текст.
//  Вывод осуществлять с помощью alert. Создайте кнопку отключающую события на предыдущей кнопке.

let alertBtn = document.querySelector('.alert');
let offAlertBtn = document.querySelector('.off-alert');

alertBtn.addEventListener('click', alertPrint);
offAlertBtn.addEventListener('click', alertOff);

function alertPrint() {
  alert(this.innerHTML)
}
function alertOff() {
  alertBtn.removeEventListener('click', alertPrint)
}



// 5. Создайте элементы div, p, button, a. Используя target по клику выводите
 // информацию о типе элемента по которому произошел клик.

let elementsTarget = document.querySelector('.targetInfo');
document.body.addEventListener('click', function() { console.log (event.target) } )



// 6. Добавьте в html код изображение. Добавьте скрипт, который будет выполнять следующие действия: 
// при наведении мыши на картинку, изображение будет заменяться другим изображением. При выходе мыши за 
// пределы изображения, будет восстанавливаться первоначальное изображение.

let image = document.getElementById('closed');
image.addEventListener('mouseover', change);
image.addEventListener('mouseout', change);

function change() {
  if (this.getAttribute('src') === 'closed.jpg') {
    this.setAttribute('src', 'opened.jpg')
  }
  else this.setAttribute('src', 'closed.jpg')
}



// 7. Используя событие onclick реализовать аналог fancybox. При клике – картинка увеличивается в размерах 
// и всплывает над контентом. Остальной контент затемняется. Для «всплывания» изображения используйте position:absolute.
let miniImage = document.querySelectorAll('.fancybox');
let darkenBackground = document.getElementById('bg_layer');
let flag = 0;

for (let i = 0; i < miniImage.length; i++) {
  miniImage[i].addEventListener('click', openFullImage);
}

function openFullImage() {
  if (flag == 0) {
  let widthWindow = document.body.clientWidth;
  let heightWindow = document.body.clientHeight;
  let lengthScroll = event.pageY - event.clientY;

  let bigImage = this.cloneNode();
  bigImage.setAttribute('width', widthWindow * 0.6);
  document.body.append(bigImage);
  bigImage.className = 'modal';
  bigImage.style.left = widthWindow * 0.2 + 'px';
  bigImage.style.top = ( lengthScroll + 100000 / widthWindow ) + 'px' ;

  flag = 1;

  darkenBackground.style.opacity = '0.5';
  darkenBackground.style.zIndex = '15';
  darkenBackground.style.height = heightWindow + 16 + 'px';
  setTimeout(() => document.body.addEventListener('click', closeFullImage), 10);
}  
}



function closeFullImage() {
let notClose = document.querySelector('.modal');

if (event.target != notClose) {
document.querySelector('.modal').remove();
flag = 0;
darkenBackground.style.opacity = '0';
darkenBackground.style.zIndex = '-1';
document.body.removeEventListener('click', closeFullImage);
  } else {
    let n = +event.target.getAttribute('alt') + 1;
    let newSrc = ("./fancybox/" + n +  ".jpg");
    if (n === 10) {
      document.querySelector('.modal').setAttribute('alt', 1);
      document.querySelector('.modal').setAttribute('src', './fancybox/1.jpg');
    } else {
    document.querySelector('.modal').setAttribute('src', newSrc);
    document.querySelector('.modal').setAttribute('alt', n);
  }
  }
}