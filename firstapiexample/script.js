
let root =document.getElementById("root");

let child=document.getElementById("child");
let btn=document.getElementById("btn").addEventListener("click",()=>{
    getjoke();
})
let url="https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,political,sexist,explicit";


let getjoke=()=>{
    fetch(url).then((data)=>data.json()).then((data)=>{ 
        // console.log(data)
        root.innerText=data.setup
    child.innerText=data.delivery}
    ).catch((error)=>console.log(error));

}
getjoke();