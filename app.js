const signupForm = document.querySelector(".signup_form");
const loginForm = document.querySelector(".login_form");
const links = document.querySelectorAll(".link");

let signUpActive = true;

links.forEach(link => {
    link.addEventListener("click", () => {
        if (link.id === "signup") {
            loginForm.style.display = "none";
            signupForm.style.display = "block";
            signUpActive = true;
        } else {
            signupForm.style.display = "none";
            loginForm.style.display = "block";
            signUpActive = false; 
        }
        links.forEach((c) => c.classList.remove("active"));
        makeActiveLink();
        
    });
});

// Current Form Indicator

const makeActiveLink = () => {
    if (signUpActive) {
        document.getElementById("signup").classList.add("active");
    } else {
        document.getElementById("login").classList.add("active");
    }
}
