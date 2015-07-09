var app = {

	// Inicializa os métodos
	init : function(){
		this.setRating();
	},

	// Define classes adicionais para exibir notas, com base no valor dentro da tag
	setRating : function(){
		var nodes = document.querySelectorAll('.icon-rating');
		for (var i = 0; i < nodes.length; i++){
			var rating = Math.round(parseFloat(nodes[i].innerHTML));
			if (rating > 0 && rating <= 5){
				nodes[i].className = nodes[i].className + ' rating-' + rating;
			} else if (rating > 5){
				nodes[i].className = nodes[i].className + ' rating-5';
			}
			nodes[i].innerHTML = "";
		}
	}
};
app.init();