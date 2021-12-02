// 반복되는 타입에 관한 코드 중복을 간소화시켜준다.
interface User {
  age: number;
  name: string;
}

// 변수에 인터페이스 활용
const hoon: User = {
  age: 33,
  name: '훈'
}

// 함수에 인터페이스 활용
function getUser(user: User): void {
  console.log(user)
}

const myeong = {
  name: '명'
}

// 인자가 오류 발생 인터페이스 형태와 다르다.
// getUser(myeong)
getUser(hoon)

// 함수의 스펙(구조)에 인터페이스를 활용
interface SumFunction {
  // 인자 지정
  (a: number, b: number): number
}

// 인터페이스 인자와 함수 인자 네이밍이 동일할 필요는 없다.
const sum:SumFunction = (a2: number, b2: number): number => {
  return a2 + b2
}