export function contactForm() {

    const form = document.querySelector("#driverForm");
    const feedBack = document.querySelector("#feedback");

    function regForm(event) {
        event.preventDefault();
        const thisform = event.currentTarget;
        const formdata = 
        "fname=" + thisform.elements.fname.value +
        "&lname=" + thisform.elements.lname.value +
        "&email=" + thisform.elements.email.value +
        "&city=" + thisform.elements.city.value;
        console.log(formdata);
    }
    form.addEventListener("submit", regForm);
}