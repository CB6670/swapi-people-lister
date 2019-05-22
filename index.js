const resultsDiv = document.getElementById("right");
const namesList = document.getElementById("listOfNames");
const fullNamesList = document.getElementsByTagName("li");

async function getData() {
  try {
    let endpoint = "https://swapi.co/api/people/";
    const response = await fetch(endpoint);
    const data = await response.json();
    const info = await data.results;
    //console.log(info);
    return info;
  } catch (err) {
    console.error(err);
  }
}

getData()
  .then(resultsArr => {
    const listArr = resultsArr.map(item => {
      return `<li>${item.name}</li>`;
    });
    return listArr;
  })
  .then(listArr => {
    namesList.innerHTML = listArr.join("");
    return namesList;
   })
  .catch(err => {
    console.error(err);
  });
console.log(fullNamesList);

async function ListData (){
    const data = await getData();
for(let i = 0; i<fullNamesList.length;i++){
    fullNamesList[i].addEventListener('click',()=>{
        if(fullNamesList[i].innerText === )
    })
}
}





// fullNamesList.addEventListener("click",()=>{

// })

// function logData(cb){
//     for(let i = 0;i<fullNamesList.length;i++){
//         fullNamesList[i].addEventListener("click",()=>{
// if(fullNamesList[i].innerHTML === cb().names)
//         });
//     }
// }
