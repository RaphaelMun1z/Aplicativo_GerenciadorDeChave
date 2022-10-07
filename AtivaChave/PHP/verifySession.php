<?php
	if(!isset($_SESSION['login'])){
		
		if(isset($_POST['acao'])){
			echo "Formulário enviado"
		}

		include('login.php')
	}else{
		include('index.html') 
	} 
?>