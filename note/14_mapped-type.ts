// 맵드(Mapped Type) 이란 기존에 정의되어 있는 타입을 새로운 타입으로 변환해 주는 문법을 의미한다.
type Heroes = 'Hulk' | 'Capt' | 'Thor'
type HeroAges = { [K in Heroes]: number }
const ages: HeroAges = {
  Hulk: 33,
  Capt: 100,
  Thor: 1000,
}