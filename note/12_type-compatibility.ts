// 타입 호환
// 타입스크립트 코드에서 특정 타입이 다른 타입에 잘 맞는지를 의미한다.

// 구조적타이핑
// 코드 구조 관점에서 타입이 서로 호환되는지의 여부를 판단하는 것으로, interface나 class가 아닌 객체 리터럴 그 자체에서 속성과 값을 비교하여 타입호환 여부를 판단한다.

// 인터페이스
interface Developer {
  name: string;
  skill: string;
}

// interface Person {
//   name: string;
// } 

let developer: Developer;
// let person: Person;

// 에러가 발생하는 이유는 developer가 person 보다 더 큰 형태의 속성과 값을 가지기에 호환이 되지 않는다.
// developer = person

// 반대의 경우는 person의 속성과 값이 developer보다 작기 때문에 타입호환이 가능하여 에러가 발생하지 않는다.
// person = developer;

// 위에서 말했듯이 구조체의 종류(interface, class 등)에 상관없이 타입호환이 가능하다.
// class Person {
//   name: string;
//   skill: string;
// }

// developer = new Person();

// -----------------------------------------------------

// 함수
let add = (num: number) => {
  // ...
}

let sum = (num1: number, num2: number) => {
  // ...
}

// 아래의 함수에서 add 보다 sum의 함수 구조가 크다. 그러므로 위에서 살펴본 타입호환과 같이 에러발생하는 경우를 이해할 수 있다.
sum = add;
// add = sum; 에러 발생

// 제네릭
interface Empty<T> {
  // ..
}

let empty1: Empty<string>
let empty2: Empty<number>
empty1 = empty2;
empty2 = empty1;

interface NotEmpty<T> {
  data: T;
}

let notEmpty1: NotEmpty<string>;
let notEmpty2: NotEmpty<number>;

// 제네릭 타입이 다르므로 호환이 이루어지지 않는다.
// notEmpty1 = notEmpty2;
// notEmpty2 = notEmpty1;