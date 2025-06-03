// Tema oscuro
const btnTema = document.getElementById("cambiarTema");
btnTema.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
});

// Formulario
document.getElementById("registroForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const carrera = document.getElementById("carrera").value.trim();

  if (!nombre || !correo || !carrera) {
    alert("Por favor, completa todos los campos.");
  } else {
    alert("Formulario enviado correctamente. ¡Gracias por registrarte!");
    this.reset();
  }
});

// Participantes aleatorios
fetch("https://randomuser.me/api/?results=5")
  .then((res) => res.json())
  .then((data) => {
    const participantes = document.getElementById("participantes");
    data.results.forEach((persona) => {
      const div = document.createElement("div");
      div.classList.add("card");
      div.innerHTML = `
        <p>${persona.name.first} ${persona.name.last}</p>
        <img src="${persona.picture.medium}" alt="Foto de ${persona.name.first}">
      `;
      participantes.appendChild(div);
    });
  })
  .catch((error) => console.error("Error al cargar participantes:", error));
