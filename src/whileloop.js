
function counter() {
  let seconds = 0;
  setInterval(() => {
    seconds += 1;
    document.getElementById('demo8').innerHTML = `<p>You have been here for ${seconds} seconds.</p>`;
  }, 1000);
}

counter();