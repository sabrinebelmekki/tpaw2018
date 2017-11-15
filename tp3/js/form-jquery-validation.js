$(document).ready(function () { //pour chargement de la page
    
        $('#submit').on("click", function (event) { //ajouter un "listener" à un élément
            event.preventDefault();
            console.log( "click" );
    
            if ($('#InputNom').val() == ""
             || $('#inputprenom').val() == "" 
             || $('#inputdatedenaissance').val() == "" 
             || $('#inputAdresse').val() == "" 
             || $('#InputEmail').val() == "") {
    
      $(".modal-title").text("remplissez tous les champs");
                $('#myModal').modal("show");
            }
            else {
                $(".modal-body").html (' Votre date de naissance est : ' + $("#inputdatedenaissance").val() + 
            '</br>'  + 'Et vous habitez : ' + '</br>'  + 
            ' <img style="max-width:100%" src="https://maps.googleapis.com/maps/api/staticmap?center='+$('#inputAdresse').val()+'&markers='+$('#inputAdresse').val()+'&size=800x400&zoom=13&key=AIzaSyC-3seQLhWm4wNaI6JeXOdHNLfIWknbN88"/>');
                $(".modal-title").text("Bienvenue "+$("#InputNom").val());
                $('#myModal').modal("show");
    
            }
    
        });
    })
