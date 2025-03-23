document.getElementById('time').innerHTML = new Date().toLocaleString()

function pink() {
  document.body.style.backgroundColor = 'pink'
}

function lightblue() {
  document.body.style.backgroundColor = 'lightblue'
}
function yellow() {
  document.body.style.backgroundColor = 'yellow'
}
function reset() {
  document.body.style.backgroundColor = 'linen'
}

function showhtml() {
  document.getElementById('fig').src = 'img/html5.PNG'
  document.getElementById('desc').innerHTML =
    '<b>HTML</b>은 구조적 웹문서를 작성하는데 사용하는 마크업 언어이다.'
}

function showcss() {
  document.getElementById('fig').src = 'img/css3.PNG'
  document.getElementById('desc').innerHTML =
    '<b>CSS3</b>는 HTML 문서의 스타일을 지정하기 위한 언어이다.'
}

function showjs() {
  document.getElementById('fig').src = 'img/javascript.png'
  document.getElementById('desc').innerHTML =
    '<b>Javascript</b>는 웹을 위한 프로그래밍 언어이며 웹문서에서 동작을 실행할 수 있게 한다. '
}
function showprofile1() {
  document.getElementById('desc').innerHTML =
    '미니언 BOB을 맡은 20학번 최정빈입니다! '
}
function showprofile2() {
  document.getElementById('desc').innerHTML =
    '미니언 Stuart을 맡은 18학번 송명석입니다! '
}
function showprofile3() {
  document.getElementById('desc').innerHTML =
    '미니언 Kevin을 맡은 00학번 신준혁입니다! '
}
function showprofile4() {
  document.getElementById('desc').innerHTML =
    '미니언 Otto을 맡은 00학번 김용섭입니다! '
}

function hide() {
  document.getElementById('desc').innerHTML = ''
  document.getElementById('fig').src = ''
}
