// 타입추론
// 타입스크립트가 코드를 해석해 나가는 동작을 의미
// 변수를 선언하거나 초기화 할 때 타입이 추론된다.

// number + string => string의 기본적인 타입 추론 
const getA = (number = 10) => {
  const str = '10';

  return number + str;
}

interface Dropdown<T> {
  value: T;
  title: string;
}

interface DetailedDropdown<T> extends Dropdown<T>{
  description: string;
  tag: T;
}

// 인터페이스와 제네릭을 이용한 타입추론
const shoppingItem: Dropdown<string> = {
  value: 'nike',
  title: 'shoes',
}

// 복잡한 방식의 타입추론
// 지정된 타입이 DetailedDropdown -> Dropdown순으로 상위로 지정된다.
const detailedItem: DetailedDropdown<string> = {
  title: 'shirt',
  description: 'adidas',
  value: '2022-01-11',
  tag: 'm'
}