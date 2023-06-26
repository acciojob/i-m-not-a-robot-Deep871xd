//your JS code here. If required.
let resetbtn = document.querySelector("#reset");
let verifybtn = document.querySelector("#verify");


let imgtag = document.createElement("img");
let randomvalue = Math.floor(Math.random()*5) +1;
imgtag.setAttribute("class",`img${randomvalue}`);
document.querySelector(".flex").appendChild(imgtag);


let images = document.querySelectorAll("img");

images.forEach((image) => {
    image.addEventListener("click", () => {
        image.classList.toggle("selected");

        if(isrestbtnvalid()){
         resetbtn.style.display="inline-block";
        }
        else{
            resetbtn.style.display="none";
        }

        if(isverifybtnvalid()){
            verifybtn.style.display="inline-block";
           }
           else{
               verifybtn.style.display="none";
           }

    });

});
function isrestbtnvalid(){
    for(let i=0;i<images.length;i++){
});