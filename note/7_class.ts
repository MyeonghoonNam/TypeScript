class Person {
  public name: string;
  private age: number;
  readonly log: string;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    this.log = `이름: ${this.name}}, 나이: ${this.age}`
  }

  print() {
    console.log(this.log);
  }
}