/*
타입스크립트 장점
타입이 있다는 것
안정성 - 컴파일 단계에서 미리 오류를 감지할 수 있다.
가독성 - 타입을 보고 무엇을 하는지 미리 알 수 있다.

타입스크립트 단점
초기 설정을 해야한다.
스크립트 언어의 유연성이 다소 낮아진다.
컴파일 시간이 길어질 수 있다.

*/

/*
1. 타입 주석과 타입 추론
타입 주석은 변수, 상수 혹은 반환 값이 무슨 타입인지를 나타낸다.
타입 추론은 해당 변수가 어떤 타입인지 추론하는 것으로 생략될 경우 컴파일 타입에 검출된다.
*/

let a: number = 1; 
let b = 2;
let c: boolean = false;
let d: string = 'TypeScript';
let f = { a: 1};
let g: any = 3; // 아무런 타입을 지정가능 남발하는 경우 좋지 않다. 유연성을 높이고 싶은 특정 경우만 사용

g = '1';
g = 3;
g = false;

let h: number[] = [];

h.push(1)
// h.push('') 타입이 다르므로 오류 

let i: 'good' = 'good'; // 특정 값 지정
// let j: 1000 = 1001    1000의 값만 들어가도록 지정되었기에 오류

// 입력 매개변수와 리턴 값의 타입을 명시
function add(a: number, b: number): number {
  return a + b;
}

console.log(add(1, 3))
// console.log(add(1, '3')) 어긋난 타입 입력의 경우 오류 발생


/*
2. 인터페이스
객체의 타입을 정의하는 방법, interface라는 키워드 사용
*/

interface Company {
  name: string;
  age: number;
  address?: string; // 선택속성으로 undefined 값 역시 가능해진다.
}

const cobalt: Company = {
  name: 'Cobalt, Inc.',
  age: 3,
  address: 'Seoul'
}

console.log(cobalt)

const person: { // 익명 인터페이스
  name: string,
  age?: number
} = {
  name: 'Hoon',
  age: 100
}

/*
3. tuple
배열을 Tuple로 이용하는 방법
*/

const tuple: [string, number] = ['hoon', 100];
console.log(tuple[1])

/*
4. enum
열거형을 사용하는 방법
*/

enum Color {
  RED = 'red',
  GREEN = 'green',
  BLUE = 'blue'
};

const color = Color.BLUE;
console.log(color);

/*
5. 대수 타입
여러 자료형의 값을 가질 수 있게하는 방법
합집합, 교집합 타입이 있다.
*/

let numOrStr: number | string = 1;
// numOrStr = false; 합집합 타입의 오류 검출
numOrStr = 'str'

// let numAndStr: number & string = ''; 원시 타입에서의 교집합은 사용불가 
interface Name {
  name: string;
}

interface Age {
  age: number;
}

let hoon: Name & Age = {
  name: 'Hoon',
  age: 100
}

let nam: Name | Age = {
  age: 100
}

type Person = Name & Age;
let julia: Person = {
  name: 'julia',
  age: 100
}

/*
6. Optional
ES 2021에도 추가된 기능, 타입스크립트는 이미 있었다.
*/

interface Post {
  title: string;
  content: string
}

interface ResponseData {
  post?: Post;
  message?: string;
  status: number;
}

const response: ResponseData[] = [
  {
    post: {
      title: 'Hello',
      content: 'How are you?'
    },
    status: 200
  },
  {
    message: 'Error!',
    status: 500
  }
]

console.log(response[0].post.title);
console.log(response[1].post && response[1].post.title);
console.log(response[1].post?.title); // 위와 동일하며 데이터가 없다면 자동으로 undefined를 반환한다.