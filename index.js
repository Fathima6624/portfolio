// Initialize EmailJS
emailjs.init("NUfFNwH-f_yy6zFEw");

// Handle form submit
document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault(); // stop page reload

  emailjs.sendForm(
    "service_wnm6t6d",
    "template_sza2xy9",
    this
  ).then(function () {
    alert("✅ Message sent successfully!");
    document.getElementById("contact-form").reset();
  }, function (error) {
    alert("❌ Failed to send message");
    console.log(error);
  });
});
