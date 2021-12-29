// enum은 동일한 타입의 변수들의 집합을 의미한다.
// enum에 별도의 값을 지정하지 않으면 기본적으로 숫자형 타입이 지정된다.
// 기본값들이 자동적으로 증가하는 특징이 있다.
enum Shoes {
  Nike, // 0
  Adidas // 1
}

const myShoes = Shoes.Nike;
console.log(myShoes); // 0