const onBtn = document.getElementById('btn');

const newText = document.getElementById('text');

onBtn.addEventListener('click', () =>
{setTimeout(() => {
  newText.textContent = 'ボタンがクリックされました';
}, 2000);

});
