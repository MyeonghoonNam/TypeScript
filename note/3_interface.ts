// 반복되는 타입에 관한 코드 중복을 간소화시켜준다.
interface User {
  age: number;
  name: string;
}

const hoon: User = {
  age: 33,
  name: '훈'
}

console.log(hoon.age)