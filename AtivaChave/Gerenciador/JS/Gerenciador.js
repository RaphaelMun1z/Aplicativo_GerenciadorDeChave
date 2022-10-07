var btn_close = document.querySelector(".btn_fechar")
var alertas = document.querySelectorAll(".alert_confirm")

// Cria msg
//createKeyMsg(true)

function closeView(elemento){
	elemento.forEach(obj =>{
		obj.style.animation = "anim 0.5s ease-in-out";
		setTimeout(function(){
			obj.parentNode.removeChild(obj);
		}, 500)
	});
}

btn_close.addEventListener("click", function(){
	closeView(alertas)
})

function createKeyMsg(type){
	var aux;
	if(type)
		aux = "<div class='create_key_sucess ck'><p>Chave criada com sucesso&nbsp;&nbsp;<i class='fas fa-check'></i></p></div>"
	else
		aux = "<div class='create_key_erro ck'><p>Erro ao criar a chave&nbsp;&nbsp;<i class='fas fa-times'></i></p></div>"

	document.querySelector('.aux').insertAdjacentHTML('afterbegin', aux)

	setTimeout(function(){
		document.querySelectorAll('.ck').forEach(obj =>{
			obj.style.animation = "anim 0.5s ease-in-out";
			setTimeout(function(){
				obj.remove();
			}, 500)
		})
	}, 1500)
}

	

