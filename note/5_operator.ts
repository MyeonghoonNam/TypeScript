// 유니온 타입은 특정 파라미터나 변수에 한가지 이상의 타입을 쓰고 싶을 때 자주 사용한다.
let variable: number | boolean = true;
variable = 100;

// 오류 qkftod
// variable = 'str';

// 유니온 타입을 통해 파라미터나 변수의 값들을 추론해 나갈 수 있다.
const logMessage = (value: string | number) => {
  if(typeof value === 'number') {
    value.toLocaleString();
    console.log(`Number to String: ${value}`);
  }
  
  if(typeof value === 'string') {
    value.toString();
    console.log(`String to Number: ${value}`);
  }

  throw new TypeError('value must be string or number!');
}

logMessage('Hi~');
logMessage(2022);

