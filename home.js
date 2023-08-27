var _CONTENT = [ 
	"HELLO, AGAMPREET KAUR HERE!",
    "COMMITTED TO DILIGENCE, DISCIPLINE & DYNAMICITY",
    "AUTHANTIC",
    "AUTHENTIC & IMPERFECT :| ", 
	"UNDERGRAD STUDENT AT TIET",
	"TURNING DREAMS INTO REALITY"
];

var _PART = 0;
var _PART_INDEX = 0;
var _INTERVAL_VAL;
var _ELEMENT = document.querySelector("#introtxt");
var _CURSOR = document.querySelector("#cursor");

function Type() { 
    if(_PART==3 && _PART_INDEX==1){
    _PART_INDEX=4;
    }
    var text =  _CONTENT[_PART].substring(0, _PART_INDEX + 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX++;

	if(text === _CONTENT[_PART]) {
		_CURSOR.style.display = 'none';
		clearInterval(_INTERVAL_VAL);
		setTimeout(function() {
			_INTERVAL_VAL = setInterval(Delete, 80);
		}, 1000);
	}
}

function Delete() {
	var text =  _CONTENT[_PART].substring(0, _PART_INDEX - 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX--;
    if(text === "AUTH" && _PART==2) {
		clearInterval(_INTERVAL_VAL);
		if(_PART == (_CONTENT.length - 1))
			_PART = 0;
		else
			_PART++;
		_PART_INDEX = 1;
		setTimeout(function() {
			_CURSOR.style.display = 'inline-block';
			_INTERVAL_VAL = setInterval(Type, 150); //200
		}, 10);
	}

	if(text === "") {
		clearInterval(_INTERVAL_VAL);
		if(_PART == (_CONTENT.length - 1))
			_PART = 0;
		else
			_PART++;
		_PART_INDEX = 1;
		setTimeout(function() {
			_CURSOR.style.display = 'inline-block';
			_INTERVAL_VAL = setInterval(Type, 150);//200
		}, 10);
	}
}

_INTERVAL_VAL = setInterval(Type, 100); //150


/*
var _CONTENT = [ 
	"SHE'S AUTHENTIC", 
	"SHE'S VERSATILE", 
	"SHE'S COMMITTED TO DILIGENCE", 
	"SHE'S A PROBLEM-SOLVER"
];

var _PART = 0;
var _PART_INDEX = 0;
var _INTERVAL_VAL;
var _ELEMENT = document.querySelector("#introtxt");
var _CURSOR = document.querySelector("#cursor");

function Type() { 
    if(_PART_INDEX==0){
        var text =  _CONTENT[_PART].substring(0, _PART_INDEX + 5);
    }
    else{
        var text =  _CONTENT[_PART].substring(0, _PART_INDEX + 1);
    }
	_ELEMENT.innerHTML = text;
	_PART_INDEX++;
	if(text === _CONTENT[_PART]) {
		_CURSOR.style.display = 'none';
		clearInterval(_INTERVAL_VAL);
		setTimeout(function() {
			_INTERVAL_VAL = setInterval(Delete, 50);
		}, 1000);
	}
}

function Delete() {
	var text =  _CONTENT[_PART].substring(0, _PART_INDEX - 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX--;
	if(text === "SHE'S ") {
		clearInterval(_INTERVAL_VAL);
		if(_PART == (_CONTENT.length - 1))
			_PART = 0;
		else
			_PART++;
		_PART_INDEX = 6;
		setTimeout(function() {
			_CURSOR.style.display = 'inline-block';
			_INTERVAL_VAL = setInterval(Type, 200);
		}, 200);
	}
}

_INTERVAL_VAL = setInterval(Type, 200);

*/
