console.log(subjects[0].title);

var nr = 0;
/*var title = getElementById("subjects");
var name = getElementById("name");
var pro = getElementById("pro");
var contra = getElementById("contra");
var ambivalent = getElementById("ambivalent");
var text = getElementById("text");
var skip = getElementById("skip");
var back = getElementById("back");
var opinion = getElementById("opinion");
var result = getElementById("result");*/

//var save = [eens, geenvanbeide, oneens];

var antwoord = [];




var text = document.getElementById("subjects");

var points = [];


console.log(subjects[nr]);

function paginawissel() {
	if (nr == 0) {
		document.getElementById('next').style.visibility = 'hidden';
		document.getElementById('back').style.visibility = 'hidden';
		document.getElementById('start').style.visibility = 'visible';
		document.getElementById("onderwerp").style.visibility = 'hidden';
		document.getElementById("vraag").style.visibility = 'hidden';
		document.getElementById('eens').style.visibility = 'hidden';
		document.getElementById('geenvanbeide').style.visibility = 'hidden';
		document.getElementById('oneens').style.visibility = 'hidden';
	};
	if( (nr>0) && (nr<= subjects.length)) {
		document.getElementById('next').style.visibility = 'visible';
		document.getElementById('back').style.visibility = 'visible';
		document.getElementById('start').style.visibility = 'hidden';
		document.getElementById("onderwerp").style.visibility = 'visible';
		document.getElementById("vraag").style.visibility = 'visible';
		document.getElementById('eens').style.visibility = 'visible';
		document.getElementById('geenvanbeide').style.visibility = 'visible';
		document.getElementById('oneens').style.visibility = 'visible';
	};
	if (nr>subjects.length) {
		document.getElementById('next').style.visibility = 'hidden';
		document.getElementById('back').style.visibility = 'visible';
		document.getElementById('start').style.visibility = 'hidden';
		document.getElementById("onderwerp").style.visibility = 'hidden';
		document.getElementById("vraag").style.visibility = 'hidden';
		document.getElementById('eens').style.visibility = 'hidden';
		document.getElementById('geenvanbeide').style.visibility = 'hidden';
		document.getElementById('oneens').style.visibility = 'hidden';

		score();
	};

	document.getElementById("onderwerp").innerHTML = (subjects[nr-1].title);
	document.getElementById("vraag").innerHTML = (subjects[nr-1].statement);

};
function opstartgedrukt() {

	nr++;
	paginawissel();
};

function opvorigegedrukt() {

	nr--;
	paginawissel();
};
function opvolgondegedrukt() {
	nr++;
	paginawissel();
};

function eens(){
	antwoord[nr-1]= 1;
	nr++;
	paginawissel();
	
};

function oneens(){
	antwoord[nr-1]= 3;
	nr++;
	paginawissel();
	
};

function geenvanbeide(){
	antwoord[nr-1]= 2;
	nr++;
	paginawissel();
	
};

function score(){
	subjects[0].parties.forEach(partie => {
		points.push({name: partie.name, points: 0});
	});

	antwoord.forEach(vergelijkantwoord);
	debugger;
	points.sort(function(a,b){
		return b.points - a.points;
		});

	debugger;

	//alert("ik zit nu in score")
	// for (var i = 0; i <= antwoord.length-1; i++) {
	// 	//antwoord[i]
	// 	//alert(antwoord[i]);
	// 	for (var x = 0 ; x <= subjects[i].parties.length-1; x++) {
	// 		alert("antwoord op vraag:" + i + " is:" + antwoord[i] + ". standpunt partij:" + subjects[i].parties[x].name + " is:" + subjects[i].parties[x].position);

	// 	};
	// };

};
function vergelijkantwoord(gegevenantwoord,vraagnummer){
	
	for(partijteller = 0; partijteller < subjects[vraagnummer].parties.length; partijteller++){
		if( (subjects[vraagnummer].parties[partijteller].position == "pro" && gegevenantwoord == 1) || (subjects[vraagnummer].parties[partijteller].position == "ambivalent" && gegevenantwoord == 2) || (subjects[vraagnummer].parties[partijteller].position == "contra" && gegevenantwoord == 3)){
			//alert(gegevenantwoord + " " + subjects[vraagnummer].parties[partijteller].name + " " + subjects[vraagnummer].parties[partijteller].position);
			for(pointsteller = 0; pointsteller < points.length; pointsteller++){
				if(points[pointsteller].name == subjects[vraagnummer].parties[partijteller].name){
					points[pointsteller].points++;
				}
			}
		}
		
	};
	
//	alert(gegevenantwoord + " " + vraagnummer);
//	debugger;
//	subjects[vraagnummer].parties.forEach((partie, gegevenantwo) => {alert(partie.name + " " + partie.position + " " + gegevenantwoord + " " + vraagnummer)});
//	subjects[vraagnummer].parties.forEach((gegevenantwoord,parties.name)=>{ alert(parties.name)});
//		if( ((gegevenantwoord == 1) and (party.position == "pro")) || ((gegevenantwoord == 2) and (party.position == "ambivalent")) || ((gegevenantwoord == 3) and (party.position == "contra")) ) {
//			s
//		}
//		});

};


//function paginanummer(title) {
    //return title;

//}

// 
// var text = document.getElementById("title")
// var text = document.getElementById("subjects")
// var text = document.getElementById("subjects")
// var text = document.getElementById("subjects")

