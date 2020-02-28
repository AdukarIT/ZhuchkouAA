// 1. Выведите координаты мыши относительно блока в момент движения курсора мыши внутри блока. Координаты выводить под блоком.
let div = document.querySelector('.div');
let text = document.querySelector('.text');
div.addEventListener('mousemove', coordinates);
function coordinates() {
  text.setAttribute('value', event.pageX + ' : ' + event.pageY)
}



// 2. Создайте блок div, в качестве изображения фона установите ему изображение закрытой папки.
//  Добавьте событие, которое выполняется при двойном клике на блоке и заменяет фон блока на изображение открытой папки
div.addEventListener('dblclick', changeJpg);
function changeJpg() {
  this.style.backgroundImage = 'url("./opened.jpg")';
}



// 3. Добавьте в документ 300-400 блоков div квадратной формы с размерами сторон 30px, и цветом фона. 
// Добавление элементов выполните с помощью цикла. Добавьте событие при наведении мыши, которое будет 
// скруглять данные блоки с помощью border-radius до круга. Для замедления эффекта скругления в CSS можно добавить transition.

let createDivs = document.createElement('div')
createDivs.style.width = '30px';
createDivs.style.height = '30px';
createDivs.style.margin = '3px';
createDivs.style.backgroundColor = 'red';
createDivs.style.display = 'inline-block';
createDivs.style.transition = '0.5s';
for (let i = 1; i < 400 ; i++) {
  let div = createDivs.cloneNode();
  div.className = 'manyDiv';
  document.body.append(div);
}

let allDivs = document.querySelectorAll('.manyDiv');
document.body.addEventListener('mouseover', circleDiv);

function circleDiv() {
  for (let i = 0; i < allDivs.length; i++) {
  let divX = allDivs[i].getBoundingClientRect()['x'];
  let divY = allDivs[i].getBoundingClientRect()['y'];
  let divW = allDivs[i].getBoundingClientRect()['width'];
  let divH = allDivs[i].getBoundingClientRect()['height'];

  if (divX <= event.clientX && 
      divX + divW >= event.clientX &&
      divY <= event.clientY &&
      divY + divH >= event.clientY){
  allDivs[i].style.borderRadius = '50%' ;
  allDivs[i].style.backgroundColor = 'green' ;
}}}




