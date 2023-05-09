// 결과 값이 짝수일 경우 출력하지 않는 구구단

for (i=1; i<10; i++) {
  if ( i%2 === 0 ) continue;
  for (j=1; j<10; j++) {
    if (j%2 === 0) continue;
    console.log(i, '*', j, '=', i*j);
  }
}