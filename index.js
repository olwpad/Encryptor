const Encriptar = () => {
  const elementos = document.querySelector(".entrada");

  if (elementos.value == ""){
    const valor1 = document.querySelector(".textoChange");
    valor1.textContent = "Ingresa un texto para encriptar";
    return
  }
  let concatenar = "";

  for (const valor of elementos.value) {
    if (valor === "e") {
      concatenar += "enter";
    } else if (valor === "i") {
      concatenar += "imes";
    } else if (valor === "a") {
      concatenar += "ai";
    } else if (valor === "o") {
      concatenar += "ober";
    } else if (valor === "u") {
      concatenar += "ufat";
    } else {
      concatenar += valor;
    }
  }
  const valor1 = document.querySelector(".textoChange");
  const valor2 = document.querySelector(".textoChange1");
  valor1.textContent = concatenar;
  valor2.textContent = "Has encriptado el texto";

};


const Desencriptar = () => {
  const elementos1 = document.querySelector(".entrada");
  if (elementos1.value == "")return
  const elementos = document.querySelector(".textoChange");
  let desencriptar = elementos.innerHTML;
  desencriptar = desencriptar
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
  const valor1 = document.querySelector(".textoChange");
  const valor2 = document.querySelector(".textoChange1");
  valor1.textContent = desencriptar;
  if (valor2.innerHTML == "Ingresa el texto que desees desencriptar") return;
  valor2.textContent = "Has desencriptado el texto";
};
