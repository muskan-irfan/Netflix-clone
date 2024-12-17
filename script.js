let signin= document.querySelector(".signin");
let btn= document.querySelector(".btn");
let content= document.querySelector(".content");
let close= document.querySelector(".close");
let btn2= document.querySelector(".btn2");
let btn5= document.querySelector(".btn5");
let step1= document.querySelector("#step1");
let step2= document.querySelector(".step2");
let ans1= document.querySelector(".ans1");
let Qs= document.querySelector(".Qs");




btn.addEventListener('click',() =>{
    signin.style.visibility = "visible";
    content.style.visibility = "hidden";
    btn.style.visibility = "hidden";
})

close.addEventListener('click',() =>{
    signin.style.visibility = "hidden";
    content.style.visibility = "visible";
    btn.style.visibility = "visible";
})
btn2.onclick= ()=>{
    document.location="step1.html";
}


function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    return regex.test(email);
}

// Handling the button in the "content" section
document.querySelector('.btn2').addEventListener('click', () => {
    const emailInput = document.querySelector('.content .email').value.trim();
    if (validateEmail(emailInput)) {
        window.location.href = "step1.html";
    } else {
        alert("Please enter a valid email address");
    }
});

// Handling the button in the "box" section
document.querySelector('#button').addEventListener('click', () => {
    const emailInput = document.querySelector('.box input[type="email"]').value.trim();
    if (validateEmail(emailInput)) {
        window.location.href = "step1.html";
    } else {
        alert("Please enter a valid email address");
    }
});

// FAQs
document.querySelectorAll('.Qs').forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        if (answer.style.maxHeight) {
            answer.style.maxHeight = null;
            answer.style.visibility = "hidden";
        } else {
            answer.style.maxHeight = "1000px";
            answer.style.visibility = "visible";
        }
    });
});
