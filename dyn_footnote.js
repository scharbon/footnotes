/* */
function apparait() {
	var hauteurfenetre = 0.6*document.documentElement.clientHeight;
	var notetexte = document.getElementsByClassName('spip_note');
	var longueur=notetexte.length;
	var notebas = document.querySelectorAll('.notes div');
	for (i=0 ; i<longueur;i++) {
		var positionnote=notetexte[i].getBoundingClientRect().top;
		if (positionnote>=0 && positionnote<=hauteurfenetre) {
			document.querySelectorAll('.notes')[0].style.display="inline";
			document.querySelectorAll('.notes')[0].style.opacity=1;
			notebas[i].style.display="inline";
		}
		else {
			notebas[i].style.display="none";
		}
	}
}
(function load() {
	document.addEventListener("scroll",apparait,false);
})();
