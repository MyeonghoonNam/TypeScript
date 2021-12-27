type Person = {
  name: string;
  age: number;
}

const hoon: Person = {
  name: '훈',
  age: 26
}

type MyInfo = string;
const hello: MyInfo = 'hello';

type Todo = {id: string; title: string; done: boolean};

const getTodo = (todo: Todo) => {
  console.log(todo);
}

// 타입 별칭의 특징
// 타입 별칭 : 새로운 타입 값을 하나 생성하는 것이 아니라 정의한 타입에 대해 나중에 쉽게 참고할 수 있게 이름을 부여하는 것

// 타입과 인터페이스의 차이점
// 타입은 확장이 불가능하나 인터페이스는 확장이 가능하므로 인터페이스 사용을 지향하자 => 좋은 소프트웨어는 언제나 확장이 용이해야 한다는 원칙