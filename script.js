// Este código permite mostrar el tooltip solo al hacer clic sobre un año

document.querySelectorAll('.year').forEach(year => {
    year.addEventListener('click', function() {
      const tooltip = year.querySelector('.tooltip');
      
      // Alternar visibilidad del tooltip
      tooltip.style.display = tooltip.style.display === 'block' ? 'none' : 'block';
    });
  });
  

  document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("TU_USER_ID"); // Reemplaza con tu User ID de EmailJS

    document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        const templateParams = {
            from_name: name,
            from_email: email,
            message: message
        };

        emailjs.send("TU_SERVICE_ID", "TU_TEMPLATE_ID", templateParams)
            .then(response => {
                document.getElementById("responseMessage").innerText = "¡Mensaje enviado con éxito!";
                document.getElementById("contactForm").reset();
            }, error => {
                document.getElementById("responseMessage").innerText = "Hubo un error, intenta nuevamente.";
                document.getElementById("responseMessage").style.color = "red";
            });
    });
});
