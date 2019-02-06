let togglerElt = document.getElementById("view-more-toggler");
let viewMoreElt = document.getElementById("view-more");
viewMoreElt.style.display = "none";
togglerElt.addEventListener("click", function(){
    let display = getComputedStyle(viewMoreElt).display;
    if(display === "inline") {
        viewMoreElt.style.display = "none";
        togglerElt.textContent = "";
        let eyeElt = createEye();
        togglerElt.appendChild(eyeElt);
        togglerElt.appendChild(document.createTextNode(" lire la suite"));
    }else{
        viewMoreElt.style.display = "inline";
        togglerElt.textContent = "";
        let eyeElt = createEye(false);
        togglerElt.appendChild(eyeElt);
        togglerElt.appendChild(document.createTextNode(" masquer"));
    }
});

function createEye(open = true) {
    let eyeElt = document.createElement("i");
    eyeElt.classList.add("fas");
    if(open){
        eyeElt.classList.add("fa-eye");
    }else{
        eyeElt.classList.add("fa-eye-slash");
    }
    return eyeElt;
}