// 다음 배열에서 '라'를 모두 제거하세요.

const arr = ['가', '라', '다', '라', '마', '라'];

while(arr.indexOf('라') !== -1){
  arr.splice(arr.indexOf('라'), 1);
}

console.log(arr);