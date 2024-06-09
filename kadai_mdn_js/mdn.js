
// 現在の時間の取得
const today = new Date();

const year = today.getFullYear();
const month = today.getMonth()+1;
const day = today.getDate();

console.log(year+('年'));
console.log(month+('月'));
console.log(day+('日'));

const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric', 
}
console.log(today.toLocaleDateString('ja', options));