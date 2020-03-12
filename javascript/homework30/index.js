addEventListener('DOMContentLoaded', () => {
  //1. Реализуйте класс Student (Студент), который будет наследовать от класса User. Этот класс должен иметь
  //  следующие свойства: name (имя, наследуется от User), surname (фамилия, наследуется от User), year 
  //  (год поступления в вуз). Класс должен иметь метод getFullName() (наследуется от User), с помощью которого
  //   можно вывести одновременно имя и фамилию студента. Также класс должен иметь метод getCourse(), который 
  //   будет выводить текущий курс студента (от 1 до 5). Курс вычисляется так: нужно от текущего года отнять
  //    год поступления в вуз. Текущий год получите самостоятельно.

  function User(name, surname) {
    this.name = name;
    this.surname = surname;
    this.getFullName = function() {
      return this.name + ' ' + this.surname;
    }
  }
  // User.prototype.getFullName() {
  //   return this.name + ' ' + this.surname;
  // }


function Student(name, surname, year) {
  User.call(this, name, surname);
  this.year = year;
  this.getCourse = function() {
    let now = new Date();
    return (now.getFullYear() - this.year)
  }
}

Student.prototype = Object.create(User.prototype)
Student.prototype.constructor = Student;
Student.prototype.getFullName = function() {
  User.prototype.getFullName.call(this)
}
let newStudent = new Student('Ivan', 'Petrov', 2017);
// console.log(newStudent.getFullName())
// console.log(newStudent.getCourse())
});




//2. Напишите программу, расчиытвающую стоимость и калорийность гамбургеров (чисбургер, бигмак и тд), 
// используя ООП подход.

function Burger(name, price, callories, amount, weight) {
  this.name = name;
  this.price = price;
  this.callories = callories;
  this.amount = amount;
  this.weight = weight

  this.getPrice = function() {
    return ('стоимость вашего заказа - ') +  this.amount * this.price + ' рупий';
  }
  this.getCallories = function() {
    return ('калорийность ваших ' + this.name + 'ов - ' +   this.callories * this.weight * this.amount / 100 + ' kkal')
  }

}


let bigmac = new Burger('бигмак', 5, 211, 2, 224);
console.log(bigmac.getPrice())
console.log(bigmac.getCallories())





//3. Реализуйте на ООП программу-напоминалку. Как она должна работать: вы записываете в специальное 
// поле какие-то события, о которых вам нужно напомнить и в нужное время вкладка браузера с этой 
// программой должна напомнить об этом событии звуком (погуглите работу с аудио на js).

function Dingdong(timer, str) {
  this.timer = timer * 1000;
  this.timer2 = timer * 2000;
  this.ding = setTimeout( function() {
    let sound = document.createElement('audio');
    sound.src = 'https://freesound.org/data/previews/106/106803_321967-lq.ogg';
    sound.autoplay = 'enable';
    document.body.append(sound);
  }, this.timer);
  this.alert = setTimeout( function() {
    alert(str)
  }, this.timer2);
}



let seconds = prompt('введите кол-во секунд');
let newTimer = new Dingdong(seconds,'покорми кота');
