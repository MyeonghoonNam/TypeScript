// 타입 단언(type assertion)
// 타입스크립트 보다 개발자가 타입을 더 구체적으로 알고 있으므로 타입스크립트에게 명시하는 것
let a;
a = 20;
a = 'a';

// b는 any 타입
// let b = a

// 타입 단언 후
// b는 개발자 지정 타입
// let b = a as string;