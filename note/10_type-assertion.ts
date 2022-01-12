// 타입 단언(type assertion)
// 타입스크립트 보다 개발자가 타입을 더 구체적으로 알고 있으므로 타입스크립트에게 타입을 건드리지 말라고 직접적으로 명시하는 것
let a;
a = 20;
a = 'a';

// b는 any 타입
// let b = a

// 타입 단언 후
// b는 개발자 지정 타입
// let b = a as string;

// DOM API 조작
// <div id='app'>test dom</div>
const dom = document.querySelector('#app'); // 타입단언 안할 시 dom은 element 타입이나 null 타입의 union 타입으로 지정이 된다.

// 타입단언을 안할 시 언급한바와 같이 union타입이 지정되므로 아래와 같이 존재유무를 체크해야하는 로직이 필요하다.
// 존재유무를 체크하지 않으면 불확실한 타입에 에러가 발생한다.
if(dom) {
  dom.innerHTML;
}

// 하지만 단언을 한 경우는 domdms element 타입만 지정되어 존재유무를 체크하지 않아도 되므로 코드가 단순해진다.
const dom2 = document.querySelector('#app') as HTMLElement;
dom2.innerHTML;