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

const personalPlanPeter = {
	name: 'Peter',
	age: '29',
	skills: {
		languages: ['ru', 'eng'],
		programmingLangs: {
			js: '20%',
			php: '10%',
		},
		exp: '1 month',
	},
	showAgeAndLags: function (plan) {
		let string = ''
		const {
			age,
			skills: { languages },
		} = plan
		string = `Мне ${age} и я владею языками:`
		for (let key in languages) {
			string += ` ${languages[key].toUpperCase()}`
		}
		return string
	},
}

function showExperience(plan) {
	const {
		skills: { exp },
	} = plan
	return exp
}

function showProgrammingLangs(plan) {
	let string = ''
	const { programmingLangs } = plan.skills

	for (let key in programmingLangs) {
		string += `Язык ${key} изучен на ${programmingLangs[key]}\n`
	}
	return string
}

showExperience(personalPlanPeter)
showProgrammingLangs(personalPlanPeter)
personalPlanPeter.showAgeAndLags(personalPlanPeter)
