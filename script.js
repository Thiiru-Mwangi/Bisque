// Testimonials Slider
const clientData = [{
    imgPath: "./img-assets/4s6.jpg",
    name: "Habakuk Otichillo",
    text: "Bisque has completely transformed my wardrobe. The attention to detail and personalized service are unmatched. From the initial consultation to the final fitting, the experience was seamless. The suit fits like a glove and exudes quality from every stitch."

},
{
    imgPath: "./img-assets/4s4.jpg",
    name: "Onesmus Kipruto",
    text: "I recently had a bespoke suit made by Bisque, and I couldn't be happier. The craftsmanship is exquisite, and the fabric selection is top-notch. The team at Bisque took the time to understand my preferences and delivered a suit that perfectly matches my style"

},
{
    imgPath: "./img-assets/4s2.jpg",
    name: "Austin Muigai",
    text: "My experience with Bisque was phenomenal. From the moment I walked into their showroom, I knew I was in good hands. The consultation was thorough and the final suit exceeded my expectations in every way."
},
{
    imgPath: "./img-assets/4s3.jpg",
    name: " Rashid Mohammed",
    text: "I can't say enough good things about Bisque. The entire process was seamless, from the initial consultation to the final fitting. The team was attentive, professional, and incredibly skilled. The suit they created for me is a work of art."
},
{
    imgPath: "./img-assets/4s7.jpg",
    name: " Rashid Mohammed",
    text: "he team at Bisque made the entire process enjoyable and stress-free. I couldn't be happier with the final result. This is the best suit I've ever owned, and I highly recommend Bisque"
},
];

const clientImageEl = document.querySelector(".client__card-img");
const userNameEl = document.querySelector(".client__card-h3");
const clientTextEl = document.querySelector(".client__card-p");

let idx = 0;

updateClientCard()

function updateClientCard(){
    const {imgPath, name, text} = clientData[idx];
    clientImageEl.src = imgPath;
    userNameEl.innerText = name;
    clientTextEl.innerText = text;
    idx++

    if(idx=== clientData.length){
        idx = 0;
    }
    setTimeout(()=> {updateClientCard()}, 7000)
};



// Dark mode Toggle
const bodyEl = document.querySelector("body")
const checkBox = document.querySelector(".toggle__checkbox");

checkBox.checked = true
updateBody()
function updateBody(){
    if(checkBox.checked){
        bodyEl.style.background = "var(--DARKMODECOLOR)"
        bodyEl.style.color = "var(--NAVCOLOR)"
    }else{
        bodyEl.style.background = "white"
    }
}