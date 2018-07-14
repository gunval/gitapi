// 指定ms待つ
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
   
  async function countdown(n) {
    for (let i = 0; i < n; i++) {
      console.log(n - i, '...');
      await sleep(1000);
    }
  }
   
  countdown(3)
    .then(() => {
      console.log('done!')
    })