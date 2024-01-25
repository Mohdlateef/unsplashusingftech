const container=document.getElementById("container");
const form=document.getElementById("form");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
let inputtext=e.target.search.value.trim();

getdata(inputtext);
inputtext="";
});
let getdata=(text)=>{
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${text||'chicken'}`)
    .then((data)=>data.json())
    .then((data)=>{
        console.log(data.meal);
//  if(data.meal)
//  {
//     data.meal.Map((iteam)=>{
//         let child1=document.createElement("div");
//         chaild1.innerhtml=`<div>

//         </div>`

//     })
//  }
    })
    .catch((error)=>console.log(error));

}
getdata();