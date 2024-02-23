import throttle from "lodash.throttle";

const form = document.querySelector("form.feedback-form")
const emailEl = document.querySelector('label [name="email"]')
const messageEl = document.querySelector('label [name="message"]')

// const STORAGE_KEY = "feedback-form-state";

form.addEventListener("input", throttle(onFormInput, 500))

function onFormInput() {
    const email = emailEl.value //input from email text box
    const message = messageEl.value //input from message text box

    const formData = {
        email,
        message,
    };

    localStorage.setItem("feedback-form-state", JSON.stringify(formData))

}



function onPageReload() {
    const savedMessage = JSON.parse(localStorage.getItem("feedback-form-state"))
    emailEl.value = savedMessage.email;
    messageEl.value = savedMessage.message;

}

onPageReload()

form.addEventListener("submit", onFormSubmit)

function onFormSubmit(e) {
    e.preventDefault(); 
    const email = emailEl.value
    const message = messageEl.value

    if (email == "" || message == "") {
        alert("Enter both input parameters!")
        form.requestFullscreen()
        return
    }

    const formData = {email, message}
    console.log(formData)
    form.reset()

    localStorage.removeItem("feedback-form-state")
}
