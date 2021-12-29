// enum은 동일한 타입의 변수들의 집합을 의미한다.
// enum에 별도의 값을 지정하지 않으면 기본적으로 숫자형 타입이 지정된다.
// 값이 초기화가 되지 않았다면 기본값들이 자동적으로 증가하는 특징이 있다.
// 문자형 값을 활용하는 문자형 타입도 가능하다.
enum Shoes {
  Nike, // 0
  Adidas = 12, // 1
  NewBalance, // 13
  Puma = '퓨마', // 퓨마 
}

const myShoes = Shoes.Nike;
console.log(myShoes); // 0

// enum 활용
// 드롭다운과 같이 예제들이 많은 경우 예외처리를 좀 더 수월하게 가져갈 수 있는 효과가 있다.
enum Answer {
  Yes = 'Y',
  No = 'N'
}

const askQuestion = (answer: Answer) => {
  if(answer === Answer.Yes) {
    console.log('정답');
  }

  if(answer === Answer.No) {
    console.log('오답');
  }
}

askQuestion(Answer.Yes);

// enum을 통한 확실한 타입의 값을 제어할 수 있다.
// askQuestion('Yes') 오류