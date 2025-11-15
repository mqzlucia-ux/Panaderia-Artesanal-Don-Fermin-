function mostrarPrecio(nombre, precio) {
  const mensaje = document.createElement("div");
  mensaje.textContent = `🧺 ${nombre} — $${precio}`;
  Object.assign(mensaje.style, {
    position: "fixed",
    top: "50%", left: "50%",
    transform: "translate(-50%, -50%)",
    background: "#fff8e1", padding: "20px 40px",
    borderRadius: "15px", boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
    fontSize: "1.2em", animation: "popup 0.3s ease", zIndex: "999",
  });
  document.body.appendChild(mensaje);
  setTimeout(() => mensaje.remove(), 2000);
}
const elementos = document.querySelectorAll(".fade");
function mostrarElementos() {
  const triggerBottom = window.innerHeight * 0.85;
  elementos.forEach(el => {
    const rect = el.getBoundingClientRect().top;
    if (rect < triggerBottom) el.classList.add("visible");
  });
}
window.addEventListener("scroll", mostrarElementos);
window.addEventListener("load", mostrarElementos);