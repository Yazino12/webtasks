/**
let countries = ["Kazakhstan","Russia","England","France"];
let cities_by_country = {"Kazakhstan":["Almaty","Astana","Karagandy"],"Russia":["Moscow","Saint-Petersburg","Kazan"],"England":["London","Manchester","Liverpool"],"France":["Paris","Lyon","Marseille"]};
**/
function random(){
	var a = document.getElementById('countries').value;
	if(a === "Kazakhstan"){
		var array=["Almaty","Astana","Karagandy"];
	}
	else if(a==="Russia"){
		var array = ["Moscow","Saint-Petersburg","Kazan"]
	}
	else if(a==="England"){
		var array = ["London","Manchester","Liverpool"]
	}
	else if(a==="France"){
		var array = ["Paris","Lyon","Marseille"]
	}

	else{
		var array= [];
	}

	var string="";
	for (i=0; i<array.length; i++){
		string= string+"<option>"+array[i]+"</option>";
	}
	string = "<select name='lol'>" +string+"</select>";
	document.getElementById('cities').innerHTML=string;

}
