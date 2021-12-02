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