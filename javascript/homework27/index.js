// 1. Дан элемент #elem. Добавьте ему класс "www".

function initClass(elem) {
  elem.classList.add('www')
}
let div = document.getElementById('elem')

initClass(div)



// 2. Дан элемент #elem. Проверьте наличие у него класса "www", если есть - удалите класс

function removeClass(elem) {
  if (elem.classList.contains("www")) {
    elem.classList.remove("www")
  }
}

removeClass(div)



// 4. Дан ul. Дан массив. Вставьте элементы этого массива в конец ul так, чтобы каждый элемент стоял в своем li. 
// Сделайте так, чтобы четные позиции имели красный фон.

function arrToUl(arr) {
  let ul = document.getElementById('ul')
  for (let i = 0; i < arr.length; i++) {
    let addLi = document.createElement('li');
    addLi.append(arr[i]);
    ul.append(addLi);

    (i % 2) ? addLi.classList.add("red") : addLi.classList.add("green") ;
  }
}
arrToUl(['a', 'b', 'c', 'd'])



// 5. Дан элемент #elem. Найдите его соседа сверху и добавьте ему в конец текст '!'

function addMark(str) {
  let prev = div.previousElementSibling;
  let text = prev.innerHTML;
  prev.innerHTML = text + str
}

addMark('!')



// 6. Реализуйте функцию wrapInParagraph, которая находит текст (дочерние текстовые ноды) внутри элемента div и
//  оборачивает текст в параграф

function wrapInParagraph() {
  let div = document.getElementsByTagName('div');
  for (let i = 0; i < div.length; i++ ) {
    div[i].childNodes.forEach(function(elem) {
    if (elem.nodeType === 3) {
      let p = document.createElement('p');
      p.append(elem.data)
      elem.replaceWith(p)
    }
    })
    
  }
}

wrapInParagraph()



// 7. Реализуйте функцию normalizeClassNames, которая нормализует имена классов для всех элементов на странице. 
// В данном случае это означает что происходит преобразование всех классов написанных используя kebab нотацию 
// в camelCase нотацию: text-center => textCenter

function normalizeClassNames() {
  let elements = document.body.children;
  for (let i = 0; i <elements.length; i++){
    for (let name of elements[i].classList) {
      let splitClass = name.split('-');
      splitClass.forEach(function(elem, index) {
        if (index > 0) {
          let newElem = elem.split('');
          newElem[0] = newElem[0].toUpperCase();
          elem = newElem.join('');
          splitClass[index] = elem
        }
      });
      elements[i].className = splitClass.join('');
    }
      }
    }

normalizeClassNames()