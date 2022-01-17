// 유틸리티 타입
// 이미 정의해 놓은 타입에서 중복이나 변환에 대처할 때에 사용하기 좋은 문법이다.
// 유틸리티 타입을 쓰지 않더라도 기존의 인터페이스, 제네릭 등의 기본 문법으로 충분히 타입 변환이 가능하지만 유틸리티 타입들을 사용하면 훨씬 더 간결한 문법으로 타입을 정의할 수 있다.

interface Product {
  id: number;
  name: string;
  price: number;
  brand: string;
  stock: number;
}

interface ProductDetail {
  id: number;
  name: string;
  price: number;
}

// 위의 코드의 경우 속성이 동일하지만 새로운 타입 지정을 위해 새로운 인터페이스를 생성하여 코드 중복을 늘리는 문제가 있다.
const displayProductDetail1 = (product: ProductDetail) => {
  console.log(product);
}

// 위와 같은 경우 코드 중복을 배제하기 위해 사용하기 편리한 타입이 유틸리티 타입들이고 그 중 아래와 같이 Pick 타입을 사용하면 특정 타입에서 몇 개의 속성만을 선택하여 타입 지정이 가능하다.
// 아래의 코드를 통해 ProductDetail 인터페이스 코드를 줄일 수 있다.
const displayProductDetail2 = (product: Pick<Product, 'id' | 'name' | 'price'>) => {
  console.log(product);
}

interface AddressBook {
  name: string;
  phone: number;
  address: string;
  company: string;
}

// Omit 타입은 특정 타입에서 지정된 속성만 제거한 타입을 정의한다.
const phoneBook: Omit<AddressBook, 'address'> = {
  name: '재택근문',
  phone: 12341111,
  company: '회사'
}

const food: Omit<AddressBook, 'address' | 'company'> = {
  name: '중국집',
  phone: 44445555
}

// Patial 타입은 특정 타입의 부분 집합을 만족하는 타입을 정의할 수 있다.
const updateProductItem = (productItem: Partial<Product>) => {
  productItem = {};
  productItem = {id: 10};
  productItem = {id: 20, price: 10000}
}

// 실제 Patial을 활용하여 코드를 개선하는 과정을 살펴보자
interface UserProfile { 
  username: string;
  email: string;
  profilePhotoUrl: string;
}

// interface UserProfileUpdate {
//   username?: string;
//   email?: string;
//   profilePhotoUrl?:string;
// }

// #1
// interface UserProfileUpdate {
//   username?: UserProfile['username'];
//   email?: UserProfile['email'];
//   profilePhotoUrl?:UserProfile['profilePhotoUrl'];
// }

// #2
// 맵드 타입
// type UserProfileUpdate = {
//   [p in 'username' | 'email' | 'profilePhotoUrl']?: UserProfile[p];
// }
// type UserProfileKeys = keyof UserProfile

// #3
// type UserProfileUpdate = {
//   [p in keyof UserProfile]?: UserProfile[p]
// }

// #4
type Subset<T> = {
  [p in keyof T]?: T[p]
}
