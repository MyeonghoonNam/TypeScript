// 타입추론
// 타입스크립트가 코드를 해석해 나가는 동작을 의미

// number + string => string의 기본적인 타입 추론 
const getA = (number = 10) => {
  const str = '10';

  return number + str;
}