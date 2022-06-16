// open
function openn(){
	var form = document.getElementById('open').style;
	form.transition = '1s';
	form.top = '-100%';
	
	var main = document.getElementById('main').style;
		main.transition = '1s';
		main.top = '50%';
};
// formpass
function tiep(){
	var key = '20032022'
	var pass = document.getElementById('inputp').value;
	if (key==pass) {
		var form = document.getElementById('formpass').style;
		form.transition = '1s';
		form.top = '-200%';
		var main = document.getElementById('main').style;
		main.transition = '1s';
		main.top = '50%';
	}
}
