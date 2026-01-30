document.getElementById("contactForm").addEventListener("submit", function() {
  const respuesta = document.getElementById("respuesta");
  respuesta.textContent = "Enviando mensaje...";
  respuesta.style.color = "#38bdf8";
  respuesta.style.marginTop = "1rem";
  respuesta.style.fontWeight = "bold";
});
