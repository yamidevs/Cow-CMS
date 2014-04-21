$(document).ready(function(){
	$(document).on("click", "#connexion", function(){
		$("#MenuConnexion").fadeIn();
		return false;
	});
	$(document).on("click", "#hide", function(){
		$("#MenuConnexion").fadeOut();
		return false;
	});
});