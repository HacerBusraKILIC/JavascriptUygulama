let toggleNavStatus = false;

let toggleNav = function() {
    let getSideBar = document.querySelector(".nav-sidebar")
    let getSideBarUl = document.querySelector(".nav-sidebar ul")
    let getSideBarTitle = document.querySelector(".nav-sidebar span")
    let getSideBarLinks = document.querySelector(".nav-sidebar a")

    if(toggleNavStatus === false){
        getSideBarUl.getElementsByClassName.visibility = "visible";
        getSideBar.style.width = "272px";
        getSideBarTitle.style.opacity = "0.5";

        let arraylength = getSideBarLinks.length;
        for (var i = 0; i < arraylength; i++) {
            getSideBarLinks[i].style.opacity = "1";               
        }

        toggleNavStatus = true;
    }  else {
        getSideBar.style.width = "50px";
        getSideBarTitle.style.opacity = "0.5";

        let arraylength = getSideBarLinks.length;
        for (var i = 0; i < arraylength; i++) {
            getSideBarLinks[i].style.opacity = "1";               
        }
        getSideBarUl.getElementsByClassName.visibility = "hidden";
        toggleNavStatus = false;
    }
}