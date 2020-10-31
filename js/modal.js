const popup = document.querySelector(".modal");
const link = document.querySelector(".location-information-button a");
const closePopup = document.querySelector(".modal-close");
const userName = document.querySelector ("[name=name]");
const userEmail = document.querySelector("[name=email]");
const userText = document.querySelector("[name=text]");
const form = popup.querySelector("form");
const storageName = localStorage.getItem("userNameValue");
const storageEmail = localStorage.getItem("userEmailValue");


link.addEventListener("click", function (evt) {
evt.preventDefault ();
popup.classList.add("modal-show");
userName.focus ();
if (storageName && storageEmail) {
    userName.value = storageName;
    userEmail.value = storageEmail;
    userText.focus();
} else if (storageName) {
    userName.value = storageName;
    userEmail.focus();
}
});

closePopup.addEventListener("click", function (evt) {
evt.preventDefault ();
popup.classList.remove("modal-show");
});

form.addEventListener("submit", function (evt) {
    if (!userName.value) {
    evt.preventDefault();
    userName.classList.add("input-error");
} else {
    localStorage.setItem("userNameValue", userName.value);
    localStorage.setItem("userEmailValue", userEmail.value);
}
});

userName.addEventListener("click", function () {
    userName.classList.remove("input-error");
});

window.addEventListener("keydown", function (evt) {
   if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-show")) {
        evt.preventDefault();
        popup.classList.remove("modal-show")
    }
   } 
});