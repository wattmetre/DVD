function fill_DVD(title, actor, price, special) {
	document.getElementById("titre").getElementsByTagName('input')[0].value=title;
	document.getElementById("acteur").getElementsByTagName('input')[0].value=actor;
	document.getElementById("prix").getElementsByTagName('input')[0].value=price;
	document.getElementById("Promo").style.display=special?'block':'none';
}

function fill_list(list) {
	l=[];
	list.forEach(function(e) { l.push("<span onclick='fill_DVD(\""+e.title+"\", \""+e.actor+"\", "+e.price+", "+e.special+")'>"+e.title+"</span>");})
	document.getElementById("liste").innerHTML=l.join('<br>');
}
