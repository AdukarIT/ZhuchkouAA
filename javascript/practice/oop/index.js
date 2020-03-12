// Реализуйте класс MyString, который будет иметь следующие методы: метод reverse(), который параметром принимает строку,
//  а возвращает ее в перевернутом виде, метод ucFirst(), который параметром принимает строку, а возвращает эту же строку,
//   сделав ее первую букву заглавной и метод ucWords, который принимает строку и делает заглавной первую букву
//    каждого слова этой строки.

class MyString {
  constructor(str) {
    this.string = str;
  }
  reverse(str) {
    let reverseStr = str.split('');
    reverseStr.reverse();
    reverseStr = reverseStr.join('');
    return reverseStr
  }
  ucFirst(str) {
    let firstLetterBig = str.split('');
    firstLetterBig[0] = firstLetterBig[0].toUpperCase();
    firstLetterBig = firstLetterBig.join('');
    return firstLetterBig
  }
  ucWords(str) {
    let firstLetterBigAllWords = str.split('');
    firstLetterBigAllWords[0] = firstLetterBigAllWords[0].toUpperCase();
    for (let i = 0; i < firstLetterBigAllWords.length; i++) {
      if (firstLetterBigAllWords[i] === ' ') {
        firstLetterBigAllWords[i + 1] = firstLetterBigAllWords[i + 1].toUpperCase();
      }
    }
    firstLetterBigAllWords = firstLetterBigAllWords.join('');
    return firstLetterBigAllWords
  }
}

let testStr = new MyString('строка');
// console.log(testStr.reverse('другая строка'))
// console.log(testStr.ucFirst('другая строка'))
// console.log(testStr.ucWords('другая строка'))




// Реализуйте класс Validator, который будет проверять строки. К примеру, у него будет метод isEmail 
// параметром принимает строку и проверяет, является ли она корректным емейлом или нет. Если является
//  - возвращает true, если не является - то false. Кроме того, класс будет иметь следующие методы: метод 
//  isDomain для проверки домена, метод isDate для проверки даты и метод isPhone для проверки телефона.

class Validator {
  constructor(str) {
    this.string = str;
  }
  isEmail(str) {
    let email = /^[0-9a-z]{1,}[0-9a-z._-]*@[0-9a-z]{1,}\.[0-9a-z]{1,}$/;
    return email.test(str)
  }
  isDomain(str) {
    let domain = /(?<scheme>http[s]?):\/\/(?<domain>[\w\.-]+)(?<path>[^?$]+)?(?<query>[^#$]+)?[#]?(?<fragment>[^$]+)?/
    return domain.test(str)
  }
  isDate(str) {
    let data = /(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d/;
    return data.test(str)
  }
  isPhone(str) {
    let tel = /^375[0-9]{9}$/;
    return tel.test(str)
  }
}


let testStr2 = new Validator('строка');
// console.log(testStr2.isEmail('kakoitoemail@gmail.com'))
// console.log(testStr2.isDomain('https://habr.com/ru/company/badoo/blog/343310/'))
// console.log(testStr2.isDate('12.03.2020'))
// console.log(testStr2.isPhone('375255555555'))




// Реализуйте класс Worker (Работник), который будет иметь следующие свойства: name (имя), surname (фамилия),
//  rate (ставка за день работы), days (количество отработанных дней). Также класс должен иметь метод getSalary(),
//   который будет выводить зарплату работника. Зарплата - это произведение (умножение) ставки rate на 
//   количество отработанных дней days.


class Worker {
  constructor(name, surname, rate, days) {
    this.name = name;
    this.surname = surname;
    this.rate = rate;
    this.days = days;
  }
  getSalary() {
    let salary = this.rate * this.days;
    return 'Зарплата ' + this.name + ' ' + this.surname + ' равняется ' + salary + ' рупий'
  }
}


let sidorov = new Worker('Ivan', 'Sidorov', 123, 15);
// console.log(sidorov.getSalary())



// Реализуйте класс User принимающий объект со свойствами name 
// и password, предусмотрите метод login, возвращающее значение true 
// в случае совпадение связки имя/пароль  и changeName(). Отнаследуйте класс User в класс Admin и 
// сделайте так, чтобы админ всегда имел дефолтное поле имя (admin) и чтобы в реализации отсутствовала 
// возможность смены имени, а также при логине в консоль выводилось сообщение о том, что админ залогинен.

class User {
  constructor(name, password) {
    this.name = name;
    this.password = password
  }
  login(obj) {
    if (obj.password === this.password && obj.name === this.name) {
      console.log('вы залогинились')
      return true
    } else {
      console.log('неправильный пароль')
    }
  }
  changeName(newName) {
    this.name = newName;
    console.log(this.name)
  }
}

let obj = {
  name: 'Ivan',
  password: 12345
}
let newUser = new User('Ivan', 12345);
// console.log(newUser.login(obj))
// newUser.changeName('Vasya')





class Admin extends User {
  constructor(name, password) {
    // this.name = 'admin';
    // this.password = password;
    super(name, password)
    this.name = 'admin'
  }
  login(obj) {
    super.login(obj);
    console.log('вы залогинились как админ')
  }
  changeName() {
    console.log('вы не можете изменить имя')
  }
  // changeName(newName) {
  //   super.changeName(newName)
  // }

}
let objAdmin = {
  name: 'admin',
  password: 54321
}
let newAdmin = new Admin('blablabla', 54321);
newAdmin.login(objAdmin) 
newAdmin.changeName('bla')

