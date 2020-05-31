// Tableau2D renvoit un objet tableau en 2D
function Tableau2D(x, y) {
	var array2D = new Array(x);
	for (var i = 0; i < array2D.length; i++) {
		array2D[i] = new Array(y);
	}
	return array2D;
}

// choix() récupère l'ID de la case cliquée et traite le résultat
var message = "";
function choix(id) {
	let caseTable = document.getElementById(id);
	if (id == idTresor) {
		caseTable.setAttribute('class', 'good');
		msg("vous venez de trouver le trésor en "+ compteur + " trous.");
		for (y = 0; y< monTableau.length; y++){
			for (i = 0; i < monTableau.length; i++){
				let caseId = y + "-" + i;
				document.getElementById(caseId).setAttribute('onclick','');
			}
		}
	// si clique sur la bonne ligne
	}else if (id == coordoneX + "-0" || id == coordoneX + "-1" || id == coordoneX + "-2" || id == coordoneX + "-3" || id == coordoneX + "-4" || id == coordoneX + "-5" || id == coordoneX + "-6" || id == coordoneX + "-7"){
   
	   caseTable.setAttribute('class', 'ligne');     
	   caseTable.setAttribute('onclick', '');         
	   compteur++;
	   AfficherCompteur(compteur);
	   msg(" La ligne est bonne !<br />");

   //si clique sur la bonne colonne
   } else if (id == "0-" + coordoneY || id == "1-" + coordoneY || id == "2-" + coordoneY || id == "3-" + coordoneY || id == "4-" + coordoneY || id == "5-" + coordoneY || id == "6-" + coordoneY || id == "7-" + coordoneY){

	   caseTable.setAttribute('class', 'colonne');    
	   caseTable.setAttribute('onclick', '');        
	   compteur++;
	   AfficherCompteur(compteur);
	   msg("la colonne est bonne !<br />");
   } else {
		msg("<br/> essaie encore !");
		caseTable.setAttribute('class', 'bad');
		caseTable.setAttribute('onclick','')
	}
	AfficherCompteur();	
}
function msg(commentaire){
	document.getElementById("commentaires").innerHTML = commentaire;
}

let monTableau = new Tableau2D(8,8);
let coordoneX = Math.floor(Math.random() * 8);
let coordoneY = Math.floor(Math.random() * 8);
monTableau[coordoneX][coordoneY] = "tresor";
// AfficherCompteur() permet d'afficher la variable compteur à l'emplacement voulu.
// affichera plus tard des commentaires.
var compteur = 0;
function AfficherCompteur() {
	compteur = compteur + 1;
	document.getElementById("compte").innerHTML = compteur;

}
// onload vérifie que la page soit complètement chargée avant de lancer la fonction
window.onload = function() { initTab(); }
// -----------------------------------------------------------------------------
// initTab() affiche le tableau et choisit les coordonnées du trésor
var idTresor = String(coordoneX) + "-" + String(coordoneY);
function initTab() {
	var compteur = 0;
	let monTableau = Tableau2D(8,8);
	monTableau[coordoneX][coordoneY] = "tresor";
	let tableau="<table id='fondtable'>";
	for (var i = 0;i < monTableau.length; i++){
		tableau=tableau + "<tr>";
		for (var x = 0; x < monTableau.length; x++) {
			if (monTableau[i][x] != monTableau[coordoneX][coordoneY]){
				monTableau[i][x] = "";
			}else{
				monTableau[i][x] == monTableau[coordoneX][coordoneY]
				monTableau[i][x] = "";
			}
			tableau = tableau + "<td id=" + String(i) + "-" + String(x) +" onclick ='choix(this.id)'>" + monTableau[i][x] + "</td>"
		}
		tableau = tableau + "</tr>";
	}
	tableau = tableau + "</table>";
	document.getElementById("emplacementTable").innerHTML = tableau;
	document.getElementById("commentaires").innerHTML = "";
	return monTableau;
}

