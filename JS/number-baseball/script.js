const $input = document.querySelector('#input');
const $form = document.querySelector('#form');
const $logs = document.querySelector('#logs');

const numbers = [];
for (let n = 1; n <= 9; n++) {
  numbers.push(n);
}

const answer = [];
for (let n = 0; n <= 3; n++) {
  const index = Math.floor(Math.random() * numbers.length);
  answer.push(numbers[index]);
  numbers.splice(index, 1);
}

const tries = [];
function checkInput(input) {
  if (input.length !== 4) {
    return alert('4자리 숫자를 입력해 주세요.');
  }
  if (new Set(input).size !== 4) {
    return alert('중복되지 않게 입력해 주세요');
  }
  if (tries.includes(input)) {
    return alert('이미 시도한 값입니다.');
  }
  return true;
}

$form.addEventListener('submit', (event) => {
  event.preventDefault();
  const value = $input.value;
  $input.value = '';
  const valid = checkInput(value);

  if (!valid) return;

  if (answer.join('') === value) {
    $logs.textContent = '홈런!';
    return;
  }

  if (tries.length >=9 ) {
    const message = document.createTextNode(`패배! 정답은 ${answer.join('')}`);
    $logs.appendChild(message);
    return;
  }

  let strike = 0;
  let ball = 0;
  for (let i = 0; i < answer.length; i++){
    const index = value.indexOf(answer[i]);
    if (index > -1) {
      if (index === i) {
        strike += 1;
      } else {
        ball += 1;
      }
    }
  }
  $logs.append(`${value}: ${strike} 스트라이크 ${ball} 볼`, document.createElement('br'));
  tries.push(value);
});