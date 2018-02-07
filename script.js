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
	};

	document.getElementById("onderwerp").innerHTML = (subjects[nr-1].title);
	document.getElementById("vraag").innerHTML = (subjects[nr-1].statement);

};
function opstartgedrukt() {

	nr++;
	paginawissel();
}

function opvorigegedrukt() {

	nr--;
	paginawissel();
}
function opvolgondegedrukt() {
	nr++;
	paginawissel();
}
//function paginanummer(title) {
    //return title;

//}

// 
// var text = document.getElementById("title")
// var text = document.getElementById("subjects")
// var text = document.getElementById("subjects")
// var text = document.getElementById("subjects")

