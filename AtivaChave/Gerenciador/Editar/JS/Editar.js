var entradas = document.querySelectorAll(".inputs")

entradas.forEach(function(item){
    item.addEventListener('focus', function(){
    	$(this).siblings('.titulo').css({"top": "0px"})
        $(this).siblings('.titulo').css({"color": "rgba(255,255,255,0.6)"})
    });

    item.addEventListener('blur', function(){
    	if(item.value.trim().length == 0){
    		$(this).siblings('.titulo').css({"top": "35px"})
            $(this).siblings('.titulo').css({"color": "rgba(255,255,255,1)"})
    		this.value = ""
    	}
    }); 
});