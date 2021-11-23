// 함수의 파라미터에 타입을 정의하는 방식
const sum = (a: number, b: number) => {
  return a + b
}

sum(10, 20)

// 함수의 반환 값에 타입을 정의하는 방식
const add = (): number => {
  return 10 + 20;
}

// 함수에 타입을 정의하는 방식
const plus = (a: number, b: number): number => {
  return a + b
}