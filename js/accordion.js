const accordionButtons = document.querySelectorAll(".accordion-button");
const accordionItems = document.querySelectorAll(".accordion-list-item");
const accordionBody = document.querySelectorAll(".accordion-body-content");

accordionButtons.forEach(accordionButton => {
    accordionButton.addEventListener("click", (e)=>{
        accordionItems.forEach(accordionItem => {
            accordionItem.classList.remove("open");
        })
        accordionButton.parentElement.parentElement.classList.toggle("open");
        const currentAccordionBody = accordionButton.parentElement.nextElementSibling
        currentAccordionBody.style.setProperty("--accordion-body-height", currentAccordionBody.scrollHeight + "px")
    })
})