//JS 데이터
//리터럴 방식 : 특정한 기호를 통해서 데이터를 손쉽게 만들어 내는것

//String: "", '', ``
//Number
//Boolean: true, false
//undefined
//null
//Array: []
//Object: {}


//문자
const str = '012345'
console.log(str.length) //6
console.log(str.indexOf('seyoung')) //-1
console.log(str.indexOf('seyoung') !== -1) //false
console.log(str.indexOf('1')) //1
console.log(str.slice(0, 3)) //012 = 0부터 시작하는 추출 종료점 인덱스로 그 직전까지 추출됨(MDN출처)
console.log(str.replace('345', 'seyoung')) //012seyoung = 첫번째 내용을 두번째 내용으로 교체
console.log(str.match(/.+(?=4)/)[0]) //0123 = ()안에 있는것은 "정규 표현식"이라 한다. (a를 기준으로 그 앞의 결과를 모두 추출 후 []의 배열 안의 몇번째것만 노출.)
console.log(str.trim()) //012345 = 앞뒤 공백 제거


//숫자
const pi = 3.14159265358979
console.log(pi)

const a = pi.toFixed(2) //몇번째 자리까지 유지할건지? => 문자데이터로 반환됨
console.log(a) //3.14
console.log(typeof a) //string

const integer = parseInt(a)
const float = parseFloat(a)
console.log(integer) //3
console.log(float) //3.14
console.log(typeof integer, typeof float) //number, number

console.log('abs: ', Math.abs(-12)) //12

console.log('min: ', Math.min(2, 8)) //2

console.log('max: ', Math.max(2, 8)) //8

console.log('ceil: ', Math.ceil(3.14)) //4 (올림)

console.log('floor: ', Math.floor(3.14)) //3 (내림)

console.log('round: ', Math.round(3.14)) //3 (반올림)

console.log('random: ', Math.random())

console.log('randon: ', Math.floor(Math.random()*10))


//배열
const numbers = [1, 2, 3, 4, 5]
const fruits = ['apple', 'banana', 'cherry', 'melon']

console.log(numbers[1]) //2
console.log(fruits[3]) //melon

//.length
console.log(numbers.length) //5
console.log(fruits.length) //4
console.log([1, 2].length) //2
console.log([].length) //0

//concat() = 병합 (원본의 배열데이터에는 영향이 X)
console.log(numbers.concat(fruits)) //(9) [1, 2, 3, 4, 5, 'apple', 'banana', 'cherry', 'melon']
console.log(numbers)
console.log(fruits)

//.forEach() = 배열 아이템의 갯수 만큼 반복 출력됨
fruits.forEach(function (element, index, array) {
  console.log(element, index, array)
}) //apple 0 -> (4) ['apple', 'banana', 'cherry', 'melon']
//banana 1 -> (4) ['apple', 'banana', 'cherry', 'melon']....

//.map() = 인수로 사용하는 콜백의 내부에서 반환하는 데이터를 가지고 모아놓은 새로운 배열을 만들어서 반환 (원본의 배열데이터에는 영향이 X)
const b = fruits.forEach(function (fruit, index) {
  console.log(`${fruit}-${index}`)
})
console.log(b) //apple-0, banana-1, cherry-2, melon-3

const c = fruits.map(function (fruit, index) {
  return `${fruit}-${index}`
})
console.log(c) //(4) ['apple-0', 'banana-1', 'cherry-2', 'melon-3']

//.filter() = 배열데이터 안에 들어있는 아이템들을 특정한 기준에대해 필터링 하는것 (원본의 배열데이터에는 영향이 X)
const d = numbers.map(numbers => {
  return numbers < 3
})
console.log(d) //(5) [true, true, false, false, false]

const e = numbers.filter(numbers => {
  return numbers < 3
})
console.log(e) //(2) [1, 2]

//.find() .findIndex()
//.find() = 콜백내에서 무엇인가를 찾으면 반복이 종료가 되며 찾아진 배열의 아이템이 반환이 됨
//.findIndex() = 찾아진 아이템의 인덱스 번호를 반환함
const f = fruits.find(fruit => {
  return /^b/.test(fruit) //b로 시작하는 문자를 추출하는 정규표현식
})
console.log(f) //banana

const g = fruits.findIndex(fruit => {
  return /^c/.test(fruit)
})
console.log(g) //2

//.includes() = 배열데이터의 인수로 사용된 특정한 데이터가 포함되어져 있는지 확인 하는것
const h = numbers.includes(3)
console.log(h) //true

const i = fruits.includes('seyoung')
console.log(i) //false

//.push() .unshift()
//원본 수정됨 주의!
//.push() = 배열에 가장 뒤쪽에 데이터가 추가됨
//.unshift() = 배열에 가장 앞쪽에 데이터가 추가됨
const num = [1, 2, 3, 4, 5]
const fru = ['apple', 'banana', 'cherry', 'melon']

num.push(5)
console.log(num)

num.unshift(0) //(6) [1, 2, 3, 4, 5, 5]
console.log(num) //(7) [0, 1, 2, 3, 4, 5, 5]

//.reverse() = 배열의 순서를 거꾸로 뒤집어서 노출됨
//원본 수정됨 주의!
const nums = [1, 2, 3, 4, 5]
const frus = ['apple', 'banana', 'cherry', 'melon']

nums.reverse()
frus.reverse()

console.log(nums) //(5) [5, 4, 3, 2, 1]
console.log(frus) //(4) ['melon', 'cherry', 'banana', 'apple']

//.splice() = 배열 데이터의 인덱스 값을 몇개 지울지 결정
//.splice(인덱스 번호, 지울 갯수, 추가할 데이터)
//원본 수정됨 주의!

const number = [1, 2, 3, 4, 5]
const fruit = ['apple', 'banana', 'cherry', 'melon']

number.splice(2, 1)
console.log(number) //(4) [1, 2, 4, 5]

fruit.splice(2, 0, 'orange')
console.log(fruit) //(5) ['apple', 'banana', 'orange', 'cherry', 'melon']


//Object(객체)
const userAge = {
  //key: value
  name: 'seyoung',
  age: 27
}
const userEmail = {
  name: 'seyoung',
  email: 'jangse8931@gmaile.com'
}

const target = Object.assign(userAge, userEmail)
console.log(target) //{name: 'seyoung', age: 27, email: 'jangse8931@gmaile.com'}
console.log(userAge) //{name: 'seyoung', age: 27, email: 'jangse8931@gmaile.com'}
console.log(target === userAge) //true

const j = {l : 123}
const k = {l : 123}
console.log(j === k) //false : 다른 메모리 주소를 보기때문에 false

const user = {
  name: 'jang se young',
  age: 27,
  email: 'jangse8931@gmail.com'
}

const keys = Object.keys(user)
console.log(keys) //(3) ['name', 'age', 'email']

console.log(user['email']) //jangse8931@gmail.com

const values = keys.map(key => user[key])
console.log(values) //(3) ['jang se young', 27, 'jangse8931@gmail.com']


//구조 분해 할당 = 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담는다
const l = {
  name: 'jang se young',
  age: 27,
  email: 'jangse8931@gmail.com'
}

const { name, age, email, address} = l
//E.g, user.address

console.log(`사용자의 이름은${name}입니다.`) //사용자의 이름은jang se young입니다.
console.log(`${name}의 나이는 ${age}세 입니다.`) //jang se young의 나이는 27세 입니다.
console.log(`${name}의 이메일 주소는 ${email}입니다.`) //jang se young의 이메일 주소는 jangse8931@gmail.com입니다.
console.log(address) //undefined

const m = ['apple', 'banana', 'cherry', 'melon']
const [ㄱ, ㄴ, ㄷ, ㄹ, ㅁ] = m
console.log(ㄱ, ㄴ, ㄷ, ㄹ, ㅁ) //apple banana cherry melon undefined


//전개 연산자
const n = ['apple', 'banana', 'cherry', 'melon']
console.log(n) //(4) ['apple', 'banana', 'cherry', 'melon']
console.log(...n) //apple banana cherry melon (문자데이터로 출력)

// function toObject(a, b, c, d) {
//   return {
//     a: a,
//     b: b,
//     c: c,
//     d: d
//   }
// }
// console.log(toObject(...n)) //{a: 'apple', b: 'banana', c: 'cherry', d: 'melon'}

const toObject = (a, b, c, d) => ({a, b, c, d}) //위의 일반함수를 화살표 함수로 변경
console.log(toObject(...n)) //{a: 'apple', b: 'banana', c: 'cherry', d: 'melon'}


//데이터 불변성
//원시 데이터 : String, Number, Boolean, undefined, null
//참조형 데이터: Object, Array, Function

//-원시 데이터
let o = 1
let p = 4
console.log(o, p, o===p) //1 4 false
p = o
console.log(o, p, o===p) //1 1 true
o = 7
console.log(o, p, o===p) //7 1 false
let q = 1
console.log(p, q, p===q) //1 1 true

//-참조형 데이터 = 할당연산자를 사용할때 단순하게 메모리의 참조 주소만 옮겨짐 (복사 X)
let r = { s : 1}
let t = { s : 1}

console.log(r, t, r === t) //{s: 1} {s: 1} false
r.s = 7
t = r
console.log(r, t, r === t) //{s: 7} {s: 7} true
r.s = 2
console.log(r, t, r === t) //{s: 2} {s: 2} true
let u = t
console.log(r, t, u, r === u) //{s: 2} {s: 2} {s: 2} true
r.s = 9
console.log(r, t, u, r === u) //{s: 9} {s: 9} {s: 9} true


//얕은 복사와 깊은 복사 
//얕은 복사 = 객체, 배열을 복사할때 그 내부에 또 다른 참조형 데이터가 없다는 전제
//깊은 복사 = 특정한 참조데이터 내부에 또 다른 참조 데이터가 있을때 
const aa = {
  name: '세영',
  age: 27,
  emails: ['jangse8931@gmail.com']
}
const copyUser = Object.assign({}, aa)
console.log(copyUser === aa) //false

aa.age = 22
console.log('user', aa) //user {name: '세영', age: 22, email: 'jangse8931@gmail.com'}
console.log('copyUser', copyUser) //copyUser {name: '세영', age: 27, email: 'jangse8931@gmail.com'}

console.log('------') //------
console.log('------') //------

aa.emails.push('jangse8931@naver.com')
console.log(aa.emails === copyUser.emails) //true
console.log('user', aa) //user {name: '세영', age: 22, emails: "jangse8931@gmail.com", "jangse8931@naver.com"}
console.log('copyUser', copyUser) //copyUser {name: '세영', age: 27, emails: "jangse8931@gmail.com", "jangse8931@naver.com"}

// 깊은 복사를 하려면 lodash를 설치 후 import _ from 'lodash'를 가져온다.
// 위 코드 중 271번째 줄 const copyUser = _.cloneDeep(aa)을 입력한다.
// 결과는 aa의 나이는 22살 이메일은 2개, copyUser의 나이는 27살 이메일은 1개(원래 이메일'jangse8931@gmail.com'이 노출됨)이다.