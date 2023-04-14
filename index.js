var nav = document.getElementById("nav");
window.addEventListener("scroll",()=>{
    if(window.scrollY > 596)
    {
        nav.style.position="sticky";
        nav.style.zIndex=1;
        nav.style.top  = 0;
        nav.style.backgroundColor="white"; 
        nav.style.boxShadow="rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px";
    }
    else 
    {
        nav.style.position = "absolute";
        nav.style.backgroundColor="rgb(253,242,233)";
        nav.style.boxShadow="none"
    }
})

