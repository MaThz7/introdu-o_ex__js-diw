var parametros = new URLSearchParams(location.search);
var id = parametros.get('id');

document.getElementById("titulo").innerText(nome)
document.getElementById("plataforma").innerText(id)
