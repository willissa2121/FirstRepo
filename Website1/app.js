// alert()

let openMenu = () => {
  document.getElementById("sidebar-links").style.width="250px"
  document.getElementById("main").style.marginLeft="250px"
  


}

let closeMenu = () => {
document.getElementById("sidebar-links").style.width="0"
document.getElementById("main").style.marginLeft="0"
}

let openContent = (idname) => {
  let tabcontent = document.getElementsByClassName("tabcontent");
  for (var i = 0; i < tabcontent.length; i++){
    tabcontent[i].style.display="none"
  }

  let tablinks = document.getElementsByClassName("tablink");
  for (var i = 0; i < tablinks; i++){
    tablinks[i].style.backgroundColor=""
  }
  document.getElementById(idname).style.display="block";

  

}
document.getElementById("default").click();
