// console.log(Date);

// let myDate = new Date();

// myDate.setYear('98')

// console.log(myDate.getDay());

const dateWrapper = document.querySelector('#timeWrapper');





// dateWrapper.textContent = `${myDate.getDate()} ${myDate.toLocaleString('default', { month: 'long' })} ${myDate.getFullYear()}`
// setInterval(()=>{
//   dateWrapper.textContent = `${myDate.getDate()} ${months[myDate.getMonth()]} ${myDate.getFullYear()} ${myDate.getHours()}:${myDate.getMinutes()}:${myDate.getSeconds()+1}`
// },1000)


function showDate(){

  let myDate = new Date();
  const months = [
    "Yanvar",
    "Fevrak",
    "Mart",
    "Aprel",
    "May",
    "Iyun",
    "Iyul",
    "Avgust",
    "Sentyabr",
    "Oktyabr",
    "Noyabr",
    "Dekabr",
  ];
  dateWrapper.innerHTML = `${myDate.getDate()} ${months[myDate.getMonth()]} ${myDate.getFullYear()} ${myDate.getHours()}:${myDate.getMinutes()}:${myDate.getSeconds()}`
}

setInterval(showDate, 1000);





