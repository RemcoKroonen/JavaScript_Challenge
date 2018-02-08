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
	alert("ik zit nu in score")
	for (var i = 0; i <= antwoord.length-1; i++) {
		//antwoord[i]
		//alert(antwoord[i]);
		for (var x = 0 ; x <= subjects[i].parties.length; x++) {
			alert(subjects[i].parties[x].name)
		}
	};

};
//function paginanummer(title) {
    //return title;

//}

// 
// var text = document.getElementById("title")
// var text = document.getElementById("subjects")
// var text = document.getElementById("subjects")
// var text = document.getElementById("subjects")

