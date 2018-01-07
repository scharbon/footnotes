/*les notes de bas de page ("sectionnotes") sont clonées (variable "boiteclone")
 et intégrées dans le <div class="notes surlignable">. On y ajoute la classe "notebox"*/
var sectionnotes=document.querySelectorAll('.notes')[0];
var boiteclone=sectionnotes.cloneNode(true);
sectionnotes.appendChild(boiteclone);
boiteclone.classList.add("notebox");
/*Des qu'on scroll, la fonction "apparait" est calculée */
function apparait() {
	/*"hauteurfenetre" est la taille du navigateur * 0,6 : 
	le contenu de la note de bas de page sera affichée en bas du navigateur 
	si la note est à moins de 60% du haut du navigateur*/
	var hauteurfenetre = 0.6*document.documentElement.clientHeight;
	/*"notetexte" sont les notes de bas de page qui apparaissent dans le corps du texte*/
	var notetexte = document.getElementsByClassName('spip_note');
	/*"longueur" est le nombre de notes de bas de page qu'il y a dans le texte*/
	var longueur=notetexte.length;
	/*"notebas" est un tableau dont l'entrée i contient le contenu de la note n°i. */
	var notebas = document.querySelectorAll('.notebox div');
	/*la variable "compteur" sert à savoir combien de notes sont visibles*/
  	var compteur = 0;
	for (i=0 ; i<longueur;i++) {
		/*à chaque scroll, on calcule la position des notes "positionnote" sur l'écran*/
		var positionnote=notetexte[i].getBoundingClientRect().top;
		if (positionnote>=0 && positionnote<=hauteurfenetre) {
			/*Si la note i apparaît et est à moins de 60% du haut, alors on la compte dans les notes à afficher */
			notebas[i].style.display="inline";
			/*auquel cas on incrémente le compteur*/
    		compteur++;
		}
		else {
			/*Sinon, la  note ne sera pas affichée*/
			notebas[i].style.display="none";
		}
	}
  if (compteur>0) {
  	/*Si au moins une note apparaît, on fait apparaître leur contenu en bas de l'écran en créant une boîte*/
	document.querySelectorAll('.notebox')[0].classList.add('plein');
  }
  else {
  	/*Sinon on la fait disparaître, acabradrabra*/
  	document.querySelectorAll('.notebox')[0].classList.remove('plein');
  }
}
(function load() {
	document.addEventListener("scroll",apparait,false);
})();
