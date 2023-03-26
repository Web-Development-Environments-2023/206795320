function sendEmail() {
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
    const mailToLink = "mailto:" + email + "?body=" + encodeURIComponent(message);
  
    window.location.href = mailToLink;
  }
  
  document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
    sendEmail();
  });  