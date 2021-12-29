// JavaScript Class=> ES2015 (Es6)
class Person {
  // 클래스 로직
  constructor(name, age) {
    console.log("생성");
    this.name = name;
    this.age = age;
  }
}

const p1 = new Person("hoon", 26); // 생성
console.log(p1);
