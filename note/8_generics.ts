// 제네릭은 재사용성이 높은 컴포넌트를 만들 때 자주 활용되는 특징이다.
// 특히, 한가지 타입보다 여러 가지 타입에서 동작하는 컴포넌트를 생성하는데 많이 사용되어진다.

// const logText = <T>(text:T):T => {
//   console.log(text);

//   return text;
// }

// 호출하는 시점에 타입을 지정한다.
// logText<string>('Hi~');
// logText<number>(10);

// -------------------------------------------------------------------------

// 기존 타입 방식의 문법은 동일한 기능의 함수지만 타입에 따라 여러 중복 선언이 발생하는 단점이 있다.
// const logNumber = (text:number) => {
//   console.log(text);

//   return text;
// }

// const logBoolean = (text: boolean) => {
//   console.log(text);

//   return text;
// }

// 위의 중복 선언 단점을 극복하기 위해 파라미터에 유니온 타입을 이용하여 선언 중복을 막을 수 있지만
// 유니온 타입들의 공통적으로 사용가능한 메서드만 사용가능하기에 input에 관한 문제는 해결가능 하지만 output에 관한 예상치 못한 에러를 직면할 수 있다.
// const logText = (text: string | number) => {
//   console.log(text);
//   return text;
// } 

// const log = logText('Hi');
// 언급한 바와 같이 문자열을 반환했지만 문자열 메서드를 사용하지 못하는 상황이 발생한다.
// log.split('')

// -------------------------------------------------------------------------------------------

const logText = <T>(text:T):T => {
  console.log(text);

  return text;
}

// input과 output에 대한 타입 추론을 호출에서 미리 지정하므로 각 타입에 대한 다양한 메서드들을 사용할 수 있는 이점을 가져갈 수 있다.
const string = logText<string>('Hi');
string.split('');

const boolean = logText<boolean>(true);

// 인터페이스에 제네릭을 선언하는 방법
interface Dropdown<T> {
  value: T;
  boolean: boolean;
}

const obj1: Dropdown<string> = { value: 'abc', boolean: true};
const obj2: Dropdown<number> = { value: 10, boolean: true};

// 제네릭의 타입 제한
// const logTextLength = <T>(arr: T[]): T[] => {
//   console.log(arr.length);

//   arr.forEach((el) => {
//     console.log(el)
//   })

//   return arr;
// }

// logTextLength<string>(['hi', 'abc']);

// 제네릭 타입 제한 2 - 정의된 타입 이용하기
interface LengthType {
  length: number;
}

const logTextLength = <T extends LengthType>(text: T): T => {
  text.length;
  return text;
}

logTextLength('a');
logTextLength({ length: 10, text: 'abc'});

// 제네릭 타입 제한 3 - keyof
interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}

// 인터페이스의 값 중 하나를 인자로 하는 타입을 지정할 수 있다.
const getShoppingItemOption = <T extends keyof ShoppingItem>(itemOption: T): T => {
  return itemOption;
}

getShoppingItemOption('name');
getShoppingItemOption('price');
getShoppingItemOption('stock');
