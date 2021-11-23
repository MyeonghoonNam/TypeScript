// 문자열 선언
const str: string = 'hello'

// 숫자 선언
const num: number = 10

// 배열 선언
const arr: Array<number> = [1, 2, 3]
const itemsNumber: number[] = [1, 2, 3]
const heroes: Array<string> = ['Hoon', 'Myeong']
const itemsString: string[] = ['Hoon', 'Myeong']

// 튜플: 배열의 인덱스에 까지 타입이 정해져 있는 자료구조
const address: [string, number] = ['Hoon', 26]

// 객체
const obj: object = {}

// const person: object = {
//   name: 'Hoon',
//   age: 26
// }

// 위의 방법과 다른 좀 더 구체적인 명세가 가능
const person: {name: string, age: number} = {
  name: 'Hoon',
  age: 26
}

// 진위값
const show: boolean = true