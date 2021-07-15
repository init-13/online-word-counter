function counter() {
		let noc =document.getElementById('input_text').value
		document.getElementById('displaycount').innerHTML =  noc.length + " Characters "+  noc.trim().split(/\s+/).length + " Words";
		var format = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/gi;
		if (format.test(noc)){
		document.getElementById('displayspecial').innerHTML = "Special Character "+ noc.match(format).length;}

	}
