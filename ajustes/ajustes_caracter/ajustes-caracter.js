let image=document.querySelectorAll(".img")
let name_img=""
for(let i=0; i<image.length; i++){
    image[i].addEventListener("click",(e)=>{
        name_img=e.target.name
        localStorage.setItem("name_img", name_img);
        window.location.href = "../../index.html"
        console.log(localStorage.getItem("name_img"))
    })
}

