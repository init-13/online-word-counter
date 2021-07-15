function counter() {
		let noc =document.getElementById('input_text').value
		if (noc!=null){
		document.getElementById('displaycount').innerHTML =  noc.length + " Characters "+  noc.trim().split(/\s+/).length + " Words";
		var format = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/gi;
		if (noc.match(format)!=null){
		document.getElementById('displayspecial').innerHTML = "Special Character "+ noc.match(format).length;}

	}}
