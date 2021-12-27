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