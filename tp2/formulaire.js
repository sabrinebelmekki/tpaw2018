function validation(){
	
	 //verifie la longueur de nom 
 if(document.getElementById("nom").value.length < 5)
  //affiche erreur 
   {document.getElementById("error").innerHTML = "le nom doit contenir au moins 5 caractéres ";}

   //verifie si tout les champs sont vide affiche message erreur 
   else if(document.getElementById("nom").value.length = 0 || document.getElementById("prenom").value.length<5 || document.getElementById("ddn").value.length<10 || document.getElementById("adress").value.length<5 || document.getElementById("email").value.length<5)
    {
        document.getElementById("resultat").setAttribute("hidden","hidden");
        document.getElementById("error").removeAttribute("hidden");
        document.getElementById("error").innerHTML = "La saisie de tout les champs est obligatoire";
    }
    //verifie si tous est remplit affiche message bienvenu 
	
	else if (document.getElementById("nom").value.length >5  || document.getElementById("prenom").value.length>5 || document.getElementById("ddn").value.length>10 || document.getElementById("adress").value.length>5 || document.getElementById("email").value.length>5)
	{
        document.getElementById("error").setAttribute("hidden","hidden");
        document.getElementById("resultat").removeAttribute("hidden");
        document.getElementById("resultat").innerHTML = "Bienvenue " + document.querySelector("#nom").value;
    }
//valeur ;inimum et maximum de chaque variable 
//vérifier le nom
	
 if((document.getElementById("nom").value.length<5)|| (document.getElementById("nom").value.length>20))
	{

document.getElementById("resultat").setAttribute("hidden","hidden");
        document.getElementById("error").removeAttribute("hidden");
		document.getElementById("error").innerHTML = "le nom doit contenir au entre 5 et 20 caractères";
	
	}
	//verifie prenom 
	if((document.getElementById("prenom").value.length<5)|| (document.getElementById("nom").value.length>20))
	{

document.getElementById("resultat").setAttribute("hidden","hidden");
        document.getElementById("error").removeAttribute("hidden");
		document.getElementById("error").innerHTML = "le prenom doit contenir au entre 5 et 20 caractères";
	}
	//verifie adress 
	if((document.getElementById("adress").value.length<5)|| (document.getElementById("nom").value.length>50))
	{

document.getElementById("resultat").setAttribute("hidden","hidden");
        document.getElementById("error").removeAttribute("hidden");
		document.getElementById("error").innerHTML = "l'adress doit contenir au entre 5 et 50 caractères";
	}
	
	//verifie email 
	
	if((document.getElementById("email").value.length<5)|| (document.getElementById("nom").value.length>30))
	{

document.getElementById("resultat").setAttribute("hidden","hidden");
        document.getElementById("error").removeAttribute("hidden");
		document.getElementById("error").innerHTML = "l'email doit contenir au entre 5 et 30 caractères";
	}