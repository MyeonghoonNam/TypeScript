// 제네릭은 재사용성이 높은 컴포넌트를 만들 때 자주 활용되는 특징이다.
// 특히, 한가지 타입보다 여러 가지 타입에서 동작하는 컴포넌트를 생성하는데 많이 사용되어진다.

const logText = <T>(text:T):T => {
  console.log(text);

  return text;
}

// 호출하는 시점에 타입을 지정한다.
logText<string>('Hi~');
logText<number>(10);