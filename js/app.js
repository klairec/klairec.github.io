$(function($){
    
    // je créé une variable qui contient le tableau des différentes sections que j'ai dans mon body
 	var sections = [];

 	// je créé une variable qui va stocker l'id de la section scrollée
 	var id = false;


 	// je créé une fonction permettant d'ajouter une animation au click des liens du menu
 	$('.sidebar a').click(function(e){
 		$('html, body').animate({
 			scrollTop: ($($(this).attr('href'))).offset().top
 		})
 	});


 	// pour chaque lien, j'insère dans mon tableau sections la valeur de l'href
    $('.sidebar a').each(function(){
    	sections.push($($(this).attr('href')));
    });

    // lorsqu'il y a scroll sur ma fenêtre, je calcul ma position par rapport au milieu de mon écran
    $(window).scroll(function(e){
    	var scrollTop = $(this).scrollTop() + ($(window).height() / 2)

    	// je créé une boucle qui va lire les entrées du tableau section
    	for (var i in sections){
    		var section = sections[i];

    		// si ma valeur scrollTop est supérieure à la position de ma section par rapport au haut de la page
    		if (scrollTop > section.offset().top){
    			// je stocke l'id de la section scrollée
    			scrolled_id = section.attr('id');
    		}
    	}

    	// si mon id scrollé est différent de mon id stocké
    	if(scrolled_id !== id){
    		id = scrolled_id;
    		$('.sidebar a').removeClass('active');
    		$('.sidebar a[href="#' + id + '"]').addClass('active');
    	}

    	
    	console.log(id);
    });
});