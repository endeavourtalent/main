export const setupHandlers = () => {
  const contactBtn = document.getElementById("contact-btn");
  const callToActionBtn = document.getElementById("call-to-action-btn");
  const contactFormCloseBtn = document.getElementById("contact-form-close-btn");
  const backDrop = document.getElementById("backdrop");
  const contactFormContainer = document.getElementById(
    "contact-form-container"
  );
  const contactFormSubmitBtn = document.getElementById(
    "submit-contact-form-btn"
  );

  contactBtn.onclick = showContactForm;
  contactFormCloseBtn.onclick = hideContactForm;
  callToActionBtn.onclick = showContactForm;
  contactFormSubmitBtn.onclick = (event) => {
    event.preventDefault();
    handleFormSubmit();
  };

  function resetForm() {
    const nameInput = document.getElementById("nameInput");
    const emailInput = document.getElementById("emailInput");
    const notesInput = document.getElementById("notesInput");
    nameInput.value = "";
    emailInput.value = "";
    notesInput.value = "";
  }

  function hideContactForm() {
    backDrop.classList.add("hide");
    contactFormContainer.classList.add("hide");
  }

  function showContactForm() {
    resetForm();
    backDrop.classList.remove("hide");
    contactFormContainer.classList.remove("hide");
    const nameInput = document.getElementById("nameInput");
    nameInput.focus();
  }

  function handleFormSubmit() {
    const nameInput = document.getElementById("nameInput");
    const emailInput = document.getElementById("emailInput");
    const notesInput = document.getElementById("notesInput");

    const contactInfo = {
      name: nameInput.value.trim(),
      email: emailInput.value.trim(),
      notes: notesInput.value.trim(),
    };

    //TODO::: Make a fetch POST request with contactInfo to server
    hideContactForm();
    toastAlert(`Thanks for reaching out! We'll be in touch soon.`, "success");
  }

  function toastAlert(msg, type) {
    const alert = document.getElementById("alert");
    alert.innerText = msg;
    alert.classList.add(type);
    alert.classList.remove("hide");
    setTimeout(() => alert.classList.add("hide"), 3000);
  }
};
