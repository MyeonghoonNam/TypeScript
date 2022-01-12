interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

const introduce = (): Developer | Person => {
  const info = {name: 'Hoon', age: '27', skill: 'TypeScript'};

  return info; 
}

const hoon = introduce();

// union 타입을 통한 객체 접근은 공통요소들만 조회가 가능하므로 에러가 발생한다.
// console.log(hoon.skill)

// 그러므로 union 타입에서 공통요소가 아닌 요소에 접근하려면 타입단언이 아래와 같이 필요하다.
// 하지만 아래와 같이 공통요소가 아닌 요소들이 많아진다면 코드의 가독성이 떨어지게 될 것이다. 이러한 문제를 해결하기 위해 타입 가드를 활용한다.
const skill = (hoon as Developer).skill;
const age = (hoon as Person).age;

if(skill) {
  console.log(skill);
} else if(age) {
  console.log(age);
}

// 타입 가드 정의
// 타입가드 함수 네이밍은 앞에 is를 많이 붙여서 네이밍한다.
// 사용자 지정 타입가드는 단순히 어떤 인자명은 어떠한 타입이다라는 값을 리턴하는 함수일 뿐이다.
// 아래와 같이 타입가드를 활용하므로 24~31 라인의 코드 보다 훨씬 가독성이 좋은 코드를 작성할 수 있다.
const isDeveloper = (args: Developer | Person): args is Developer => {
  return (args as Developer).skill !== undefined
}

if(isDeveloper(hoon)) {
  // Developer
  console.log(hoon.skill);
} else {
  // Person
  console.log(hoon.age)
}