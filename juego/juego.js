 let avatar=document.getElementById("avatar")
name_av=localStorage.getItem("name_img")
if(name_av==null){
    avatar.src="../assets/img/av1.png"
}else{
    avatar.src=`../assets/img/${name_av}.png`
}