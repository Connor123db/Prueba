document.addEventListener("DOMContentLoaded", () => {
  const btnTema = document.getElementById("modo-tema");
  const cuerpo = document.body;

  // Ver si ya hay un modo guardado
  const modoGuardado = localStorage.getItem("modo");
  if (modoGuardado === "oscuro") {
    cuerpo.classList.add("oscuro");
    btnTema.textContent = "Cambiar a modo claro";
  }

  btnTema.addEventListener("click", () => {
    cuerpo.classList.toggle("oscuro");

    if (cuerpo.classList.contains("oscuro")) {
      localStorage.setItem("modo", "oscuro");
      btnTema.textContent = "Cambiar a modo claro";
    } else {
      localStorage.setItem("modo", "claro");
      btnTema.textContent = "Cambiar a modo oscuro";
    }
  });
});