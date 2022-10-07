var entradas = document.querySelectorAll(".entrada")
var btn = document.querySelector("#btn_entrar")

entradas.forEach(function(item){
    item.addEventListener('focus', function(){
    	this.style.backgroundColor = "rgba(126, 126, 126, 0.5)"
    	$(this).siblings('.titulo').css({"top": "-35px"})
    	$(this).siblings('.titulo').css({"left": "-10px"})
    });

    item.addEventListener('blur', function(){
    	if(item.value.trim().length == 0){
    		this.style.backgroundColor = "rgba(126, 126, 126, 0.3)"
    		$(this).siblings('.titulo').css({"top": "0px"})
    		$(this).siblings('.titulo').css({"left": "0px"})
    		this.value = ""
    	}
    }); 
});

VanillaTilt.init(document.querySelectorAll(".card"), {
	max: 15,
	speed: 400
});


