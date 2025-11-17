const app = document.getElementById('app');
app.innerHTML = "hello";

setInterval(()=> {
  app.innerHTML= app.innerHTML + "."
},1000)