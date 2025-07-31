document.getElementById('add').addEventListener('click', () =>{
  document.getElementById('counter').innerHTML++;
});

document.getElementById('subtract').addEventListener('click', () =>{
  document.getElementById('counter').innerHTML--;
})

document.querySelector('.reset').addEventListener('click', () =>{
  document.getElementById('counter').innerHTML = 0
})