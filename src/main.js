const app = document.getElementById('app');
app.innerHTML = "hello";

setInterval(()=> {
  app.innerHTML= app.innerHTML + `<span class="character">▮</span>`
},1000)