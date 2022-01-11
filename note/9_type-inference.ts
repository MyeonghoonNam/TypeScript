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

// Best Common Type 추론 방식
// 타입들을 union 방식으로 묶어 가장 가까운 타입을 지정해 나가는 추론 과정을 말한다.
const arr = [1, 2, true, 'string'];

window.onmousedown = function(mouseEvent) {
  console.log(mouseEvent.button);   //<- OK
  console.log(mouseEvent.kangaroo); //<- Error!
};

// 위 코드를 타입스크립트 검사기 관점에서 보면 window.onmousedown에 할당되는 함수의 타입을 추론하기 위해 window.onmousedown 타입을 검사한다.
// 타입 검사가 끝나고 나면 함수의 타입이 마우스 이벤트와 연관이 있다고 추론하기 때문에 mouseEvent 인자에 button 속성은 있지만 kangaroo 속성은 없다고 결론을 내리게 된다.