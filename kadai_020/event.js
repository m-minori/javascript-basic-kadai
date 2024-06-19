// btnというidを持つHTML要素を取得し、定数に代入する
const onBtn = document.getElementById('btn');

const newText = document.getElementById('text');


// HTML要素（btn = onBtn）がクリックされた時にイベント処理を行う
onBtn.addEventListener('click', () => {

  // textというidを持つHTML要素のテキスト内容を取得し、テキストを変更する
  newText.textContent = 'ボタンをクリックしました';
});