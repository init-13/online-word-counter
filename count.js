function counter() {
		let noc =document.getElementById('input_text').value
		document.getElementById('displaycount').innerHTML =  noc.length + " Characters "+  noc.trim().split(/\s+/).length + " Words";
	function slen (string) { let asp='!@#$%^&*()_+{}|:"<>?/.,\';][\\=-'; let count=0; 
				for (let x of asp){ count+=string.match(x).length;}
			       return count;}
	
		document.getElementById('displayspecial').innerHTML = "Special Character "+ slen(noc);

	}
