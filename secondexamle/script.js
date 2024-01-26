const container=document.getElementById("container");
const form=document.getElementById("form");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
let inputtext=e.target.search.value.trim();

getdata(inputtext);
inputtext="";
});
let getdata=(text)=>{
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${text||"chicken"}`)
    .then((data)=>data.json())
    .then((data)=>{
 console.log(data);

 if(data.meals)
 {
    container.innerHTML=""
    data.meals.map((iteam)=>{
 let child=document.createElement("div");

        child.innerHTML=`<div class="cards">
        <img src="${iteam.strMealThumb}">
        <p>${iteam.strMeal}</p>
        </div>`
        // console.log(iteam.strMealThumb)
        container.appendChild(child);
        // console.log(iteam.strMeal)
    })
}
    })
    .catch((error)=>console.log(error));

}
getdata();