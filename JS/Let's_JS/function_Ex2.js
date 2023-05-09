// 다음과 같이 객체 안에 객체가 있을 때, '조' 값에 접근하는 방법은 무엇일까요?

const zerocho = {
  name: {
    first: '현영',
    last: '조',
  },
  gender: 'm',
}

console.log(zerocho.name.last);