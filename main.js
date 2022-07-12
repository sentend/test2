// function getTimeFromMinutes(minutes) {
// 	if (typeof minutes !== 'number' || minutes < 0 || !Number.isInteger(minutes)) {
// 		console.log('error')
// 		return
// 	}
// 	let hours = Math.floor(minutes / 60)
// 	let minute = minutes % 60
// 	console.log(`Это ${hours} часа и ${minute} минут`)
// }

// function findMaxNumber(a, b, c, d) {
// 	const data = []
// 	data.push(a, b, c, d)
// 	console.log(Math.max(...data))
// }

// getTimeFromMinutes(59)
// findMaxNumber(1, 5, 67, 3)

//*ЧИСЛА ФИБОНАЧИ

// function fib(items) {
// 	let string = ''
// 	let arr = [0]

// 	if (typeof items !== 'number' || items <= 0 || !Number.isInteger(items)) {
// 		console.log(string)
// 		return string
// 	} else if (items === 1) {
// 		string = [...arr]
// 		string = [...arr].join(' ')
// 		console.log(string)
// 		return string
// 	}

// 	arr.push(1)
// 	for (let i = 0; i < items - 2; i++) {
// 		arr.push(arr[i] + arr[i + 1])
// 	}

// 	string = [...arr].join(' ')
// 	return string
// }

// fib(1)
// fib(2)
// fib(3)

//*РАБОТА С ОБЪЕКТАМИ

// const personalPlanPeter = {
// 	name: 'Peter',
// 	age: '29',
// 	skills: {
// 		languages: ['ru', 'eng'],
// 		programmingLangs: {
// 			js: '20%',
// 			php: '10%',
// 		},
// 		exp: '1 month',
// 	},
// 	showAgeAndLags: function (plan) {
// 		let string = ''
// 		const {
// 			age,
// 			skills: { languages },
// 		} = plan
// 		string = `Мне ${age} и я владею языками:`
// 		for (let key in languages) {
// 			string += ` ${languages[key].toUpperCase()}`
// 		}
// 		return string
// 	},
// }

// function showExperience(plan) {
// 	const {
// 		skills: { exp },
// 	} = plan
// 	return exp
// }

// function showProgrammingLangs(plan) {
// 	let string = ''
// 	const { programmingLangs } = plan.skills

// 	for (let key in programmingLangs) {
// 		string += `Язык ${key} изучен на ${programmingLangs[key]}\n`
// 	}
// 	return string
// }

// showExperience(personalPlanPeter)
// showProgrammingLangs(personalPlanPeter)
// personalPlanPeter.showAgeAndLags(personalPlanPeter)

//*РАБОТА С МАССИВАМИ

// const family = ['Peter', 'Ann', 'Alex', 'Linda']

// function showFamily(arr) {
// 	let string = 'Семья '
// 	if (arr.length <= 0) {
// 		string += ' пуста'
// 		return string
// 	}
// 	string += ' состоит из: '
// 	arr.forEach((element) => {
// 		string += ` ${element}`
// 	})
// 	return string
// }

// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin']

// function standardizeStrings(arr) {
// 	arr.forEach((element) => {
// 		console.log(element.toLowerCase())
// 	})
// }

//*ЗАДАЧА ПЕРЕВЕРНУТЬ СТРОКУ и работа с массивом

// const someString = 'This is some strange string'

// function reverse(str) {
// 	if (typeof str !== 'string') {
// 		return 'Ошибка!'
// 	}
// 	let reverseString = someString.split('').reverse().join('')
// 	return reverseString
// }

// const baseCurrencies = ['USD', 'EUR']
// const additionalCurrencies = ['UAH', 'RUB', 'CNY']

// function availableCurr(arr, missingCurr) {
// 	let string = 'Доступные валюты:\n'
// 	if (arr.length <= 0) {
// 		return 'Нет доступных валют'
// 	}
// 	let index = arr.indexOf(missingCurr)
// 	arr.splice(index, 1)
// 	arr.forEach((el) => {
// 		string += `${el}\n`
// 	})
// 	console.log(string)
// 	// arr.forEach((el) => {
// 	// 	if (el !== missingCurr) {
// 	// 		string += `${el}\n`
// 	// 	}
// 	// })
// 	// return string
// }

// availableCurr([...baseCurrencies, ...additionalCurrencies], 'RUB')

//*ЗАДАЧА НА РАБОТУ С ОБЪЕКТАМИ И МАССИВАМИ

// const shoppingMallData = {
// 	shops: [
// 		{
// 			width: 10,
// 			length: 5,
// 		},
// 		{
// 			width: 15,
// 			length: 7,
// 		},
// 		{
// 			width: 20,
// 			length: 5,
// 		},
// 		{
// 			width: 8,
// 			length: 10,
// 		},
// 	],
// 	height: 5,
// 	moneyPer1m3: 30,
// 	budget: 50000,
// }

// function isBudgetEnough(data) {
// 	let totalAreaShops = 0
// 	let totalArea = 0
// 	const { shops, height, moneyPer1m3, budget } = data
// 	shops.forEach((el) => {
// 		totalAreaShops += el.length * el.width
// 	})
// 	totalArea = height * totalAreaShops
// 	if (budget - totalArea * moneyPer1m3 >= 0) {
// 		return 'Бюджета достаточно'
// 	} else {
// 		return 'Бюджета недостаточно'
// 	}
// }

// isBudgetEnough(shoppingMallData)

//*ПРОДВИНУТАЯ РАБОТА С МАССИВАМИ И ОБЪЕКТАМИ

// const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam']

// function sortStudentsByGroups(arr) {
// 	arr.sort()
// 	const a = []
// 	const b = []
// 	const c = []
// 	const rest = []
// 	for (let i = 0; i < arr.length; i++) {
// 		if (i < 3) {
// 			a.push(arr[i])
// 		} else if (i < 6) {
// 			b.push(arr[i])
// 		} else if (i < 9) {
// 			c.push(arr[i])
// 		} else {
// 			rest.push(arr[i])
// 		}
// 	}
// 	return [a, b, c, `Оставшиеся студенты: ${rest.length > 0 ? rest.join(', ') : '-'}`]
// }

// sortStudentsByGroups(students)

//*проверка на ошибки

// const restorantData = {
// 	menu: [
// 		{
// 			name: 'Salad Caesar',
// 			price: '14$',
// 		},
// 		{
// 			name: 'Pizza Diavola',
// 			price: '9$',
// 		},
// 		{
// 			name: 'Beefsteak',
// 			price: '17$',
// 		},
// 		{
// 			name: 'Napoleon',
// 			price: '7$',
// 		},
// 	],
// 	waitors: [
// 		{ name: 'Alice', age: 22 },
// 		{ name: 'John', age: 24 },
// 	],
// 	averageLunchPrice: '20$',
// 	openNow: true,
// }

// function isOpen(prop) {
// 	let answer = ''
// 	prop ? (answer = 'Открыто') : (answer = 'Закрыто')

// 	return answer
// }

// console.log(isOpen(restorantData.openNow))

// function isAverageLunchPriceTrue(fDish, sDish, average) {
// 	if (+fDish.price.slice(0, -1) + +sDish.price.slice(0, -1) < +average.slice(0, -1)) {
// 		return 'Цена ниже средней'
// 	} else {
// 		return 'Цена выше средней'
// 	}
// }

// console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice))

// function transferWaitors(data) {
// 	const copy = Object.assign({}, data)

// 	copy.waitors = [{ name: 'Mike', age: 32 }]
// 	return copy
// }

// transferWaitors(restorantData)

//*РЕКУРСИЯ

function factorial(n) {
	if (n <= 0) {
		return 1
	}
	if (!Number.isInteger(n) || typeof n !== 'number') {
		return 'beb'
	} else {
		return n * factorial(n - 1)
	}
}

console.log(factorial('5.34'))
