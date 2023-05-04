const botao = document.getElementById("save");
const baseOrigem = document.getElementById("baseOrigem");
const baseDestino = document.getElementById("baseDestino");
const caixaDoNumero = document.getElementById("caixaDoNumero");

botao.onclick = function () {
  const valor = caixaDoNumero.value;
  const baseOrigemSelecionada = baseOrigem.value;
  const baseDestinoSelecionada = baseDestino.value;

  let resultado;
  switch (baseOrigemSelecionada) {
    case "2":
      resultado = BinarioParaDecimal(valor);
      break;
    case "8":
      resultado = OctalParaDecimal(valor);
      break;
    case "10":
      resultado = valor;
      break;
    case "16":
      resultado = HexadecimalParaDecimal(valor);
      break;
  }

  switch (baseDestinoSelecionada) {
    case "2":
      resultado = DecimalParaBinario(resultado);
      break;
    case "8":
      resultado = DecimalParaOctal(resultado);
      break;
    case "10":
      resultado = resultado.toString();
      break;
    case "16":
      resultado = DecimalParaHexadecimal(resultado);
      break;
  }

  document.getElementById("output").innerHTML = resultado;
};

function converteBase() {
    let valor = document.getElementById("caixaDoNumero").value;
    let baseOrigem = parseInt(document.getElementById("baseOrigem").value);
    let baseDestino = parseInt(document.getElementById("baseDestino").value);
    let resultado;
  
    if (baseOrigem == baseDestino) {
      resultado = valor;
    } else {
      switch (baseOrigem) {
        case 2:
          resultado = BinarioParaDecimal(valor);
          break;
        case 8:
          resultado = OctalParaDecimal(valor);
          break;
        case 16:
          resultado = HexadecimalParaDecimal(valor);
          break;
        default:
          resultado = parseInt(valor);
      }
  
      switch (baseDestino) {
        case 2:
          resultado = DecimalParaBinario(resultado);
          break;
        case 8:
          resultado = DecimalParaOctal(resultado);
          break;
        case 16:
          resultado = DecimalParaHexadecimal(resultado);
          break;
        default:
          resultado = resultado.toString();
      }
    }
  
    document.getElementById("output").innerHTML = resultado;
  }
  
  function DecimalParaBinario(valor) {
    let resultado = "";
    while (valor > 0) {
      resultado += (valor % 2).toString();
      valor = Math.floor(valor / 2);
    }
    resultado = resultado.split("").reverse().join("");
    return resultado;
  }
  
  function DecimalParaOctal(valor) {
    let resultado = "";
    while (valor > 0) {
      resultado += (valor % 8).toString();
      valor = Math.floor(valor / 8);
    }
    resultado = resultado.split("").reverse().join("");
    return resultado;
  }
  
  function DecimalParaHexadecimal(valor) {
    let resultado = "";
    while (valor > 0) {
      let resto = valor % 16;
      switch (resto) {
        case 10:
          resultado += "A";
          break;
        case 11:
          resultado += "B";
          break;
        case 12:
          resultado += "C";
          break;
        case 13:
          resultado += "D";
          break;
        case 14:
          resultado += "E";
          break;
        case 15:
          resultado += "F";
          break;
        default:
          resultado += resto.toString();
      }
      valor = Math.floor(valor / 16);
    }
    resultado = resultado.split("").reverse().join("");
    return resultado;
  }
  
  function BinarioParaDecimal(valor) {
    let resultado = 0;
    for (let i = valor.length - 1, j = 0; i >= 0; i--, j++) {
      let digito = parseInt(valor.charAt(i));
      resultado += digito * Math.pow(2, j);
    }
    return resultado;
  }
  
  function OctalParaDecimal(valor) {
    let resultado = 0;
    for (let i = valor.length - 1, j = 0; i >= 0; i--, j++) {
      let digito = parseInt(valor.charAt(i));
      resultado += digito * Math.pow(8, j);
    }
    return
  }  
botao.onclick = Converte;



        
      

   