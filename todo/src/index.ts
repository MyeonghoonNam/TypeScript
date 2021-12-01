// :any 모든 타입을 가능하게 지정한다.
// :void 반환값이 없는 함수의 경우를 명시적으로 나타낸다.

// type Todo = {
//   id: number;
//   title: string;
//   done: boolean;
// };

interface Todo {
  id: number;
  title: string;
  done: boolean;
}

let todoItems: Todo[];

// api
function fetchTodoItems(): Todo[] {
  const todos = [
    { id: 1, title: '안녕', done: false },
    { id: 2, title: '타입', done: false },
    { id: 3, title: '스크립트', done: false },
  ];
  return todos;
}

// crud methods
function fetchTodos(): object[] {
  const todos = fetchTodoItems();
  return todos;
}

function addTodo(todo: Todo): void {
  todoItems.push(todo);
}

function deleteTodo(index: number): void {
  todoItems.splice(index, 1);
}

function completeTodo(index: number, todo: Todo): void {
  todo.done = true;
  todoItems.splice(index, 1, todo);
}

// business logic
function logFirstTodo(): object {
  return todoItems[0];
}

function showCompleted(): object[] {
  return todoItems.filter(item => item.done);
}

function addTwoTodoItems(): void {
  const item4 = {
    id: 4,
    title: 'item 4',
    done: false,
  };

  addTodo(item4);
  addTodo({
    id: 5,
    title: 'item 5',
    done: false,
  });
}

// 유틸 함수
function log(): void {
  console.log(todoItems);
}

// 실행부
todoItems = fetchTodoItems();
addTwoTodoItems();
log();
