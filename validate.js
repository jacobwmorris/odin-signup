const pass1 = document.getElementById("password");
const pass2 = document.getElementById("password2");

function setPassClass(val) {
    pass1.classList.add(val);
    pass2.classList.add(val);
    document.querySelector(".noMatchErr").classList.add(val);
}

function validate() {
    if (pass1.value === "" || pass2.value === "") {
        setPassClass("error");
        return;
    }
    if (pass1.value !== pass2.value) {
        setPassClass("error");
        return;
    }

    pass1.classList.remove("error");
    pass2.classList.remove("error");
    document.querySelector(".noMatchErr").classList.remove("error");
}

pass1.addEventListener("change", validate);
pass2.addEventListener("change", validate);
