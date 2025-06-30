// function calcNum() {
//     let firstNumber = Number(prompt("Введите первое число пожалуйста!"))
//     let calc = String(prompt("Введите какое будет действие!"))
//     let secondNumber = Number(prompt("Введите второе число пожалуйста!"))

//     if (calc === '+') {
//         alert(firstNumber + secondNumber)
//     } else if (calc === '-') {
//         alert(firstNumber - secondNumber)
//     } else if (calc === '/') {
//         alert(firstNumber / secondNumber)
//     } else if (calc === '**') {
//         alert(firstNumber ** secondNumber)
//     } else if (calc === '*') {
//         alert(firstNumber * secondNumber)
//     }

// }

// calcNum()

// let num = 6.35

// num = Math.round(num * 100) / 100 + 0.100 / 100;

// alert(num.toFixed(1))

// function random(min, max) {
//     return min + Math.random() * (max - min)
// }
// alert(random(1, 10))


// function randomInteger(min, max) {
//     return min + Math.random() * (max - min)
// }
// alert(Math.floor(randomInteger(1, 5)))


// let car = {
//     brand: "AUDI",
//     year: 2024,
//     isElectric: false,
// }
// console.log(car.brand)
// console.log(car.year)
// console.log(car.isElectric)



// let originalUser = {
//     name: "David",
//     surname: "Behoian",
//     year: 17,
//     isSoftware: true,
// }
// let copiedUser = Object.assign(originalUser)
// copiedUser.name = "Behoian"
// console.log(originalUser)
// console.log(copiedUser)


// let person = {
//     name: "Anna",
//     introduce() {
//         console.log(`Hi my name is ${this.name}`)
//     }
// }
// console.log(person.introduce())


// function Book(title, author) {
//     this.title = title
//     this.author = author
// }
// let book1 = new Book("Live", "David Behoian")
// let book2 = new Book("Developer", 'Behoian David')
// console.log(book1.title, book2.author)



// user = { name: "Anna" }
// console.log(user?.adress?.city)


// let num = 7.856

// console.log(Math.floor(num))
// console.log(Math.ceil(num))
// console.log(Math.round(num))
// console.log(num.toFixed(1))


// console.log(NaN === NaN)

// let checkNaN = isNaN(NaN)
// console.log(checkNaN)
// let checkStr = isNaN('abc')
// console.log(checkStr)
// let checkUnderfiend = isNaN(undefined)
// console.log(checkUnderfiend)

// function randomMath(n1, n2) {
//     let random = Math.random() * (n1 + n2)

//     console.log(Math.floor(random))
// }

// console.log(randomMath(1, 10))

// let strAfterNum = '42px'

// console.log(parseInt(strAfterNum))

// console.log(typeof Number(strAfterNum))

// console.log(typeof +strAfterNum)

// console.log(Number.isFinite('5'))
// console.log(Number.isFinite(5))
// console.log(isNaN(Infinity))
// console.log(Number.isFinite(NaN))
// console.log(Number.isFinite(parseInt('123abc')))
// console.log(Number.isFinite(null))

// let testNum = 1.005

// console.log(testNum.toFixed(2))

// function ucFirst(str) {

//     if (!str) {
//         console.log("Строка пуста")
//     } else if (str) {
//         let atFirst = str.at(0)
//         let upperFirst = atFirst.toUpperCase() + str.slice(1)
//         return upperFirst
//     }
// }

// console.log(ucFirst("david"))




// function truncate(str, maxlength) {
//     return (str.length > maxlength) ?
//         str.slice(0, maxlength - 1) + '…' : str;
// }

// console.log(truncate('asdasdasdsa', 1))



// let styles = ["Джаз", "Блюз"]
// styles.push = "Рок-н-ролл"
// styles[1] = "Классика"
// styles.shift(0)
// styles.unshift("Рэп", "Регги");
// console.log(styles)



// function sumInput() {
//     let sum = Number(prompt("Введите число, и оно будет прибоваляться пока вы не остановите операцию", 0));

// }





// function numberWhile() {
//     let sum = []
//     let number = 1

//     while (number <= 10) {
//         console.log(number)
//         number++
//     }
// }

// numberWhile()

// function numberFor() {
//     for (let i = 0; i >= 20; i++) {
//         if (i % 2) {
//             console.log(i)
//         }
//     }
// }

// numberFor()

// for (let i = 0; i >= 20; i++) {
//     if (i % 2) {
//         console.log(i)
//     }
// }


// let strAfterNum = "123";

// let copiedstrAfterNum = Number(strAfterNum)


// console.log(typeof strAfterNum)
// console.log(typeof copiedstrAfterNum)


// function checkPlusAndMinus(n) {
//     if (n > 0) {
//         console.log('oll is okay')
//     } else {
//         console.log("minus number")
//     }
// }
// console.log(checkPlusAndMinus(-1))


// function checkAge() {
//     let ramdom = Math.floor(Math.random() * 25);
//     (ramdom > 18) ? console.log('okay') : console.log("you can't visit this party");
//     console.log(ramdom)
// }

// checkAge()

// let checknumber = 1
// while (checknumber <= 10) {
//     if (checknumber > 5) {
//         console.log(checknumber)
//         break
//     }
//     checknumber++
//     console.log(checknumber)
// }




function camelize(str) {

str.split('')

}


camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';