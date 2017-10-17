function fill_DVD(title, actor, price, special) {
	document.getElementById("DVD info TITLE").getElementsByTagName('input')[0].value=title;
	document.getElementById("DVD INFO ACTOR").getElementsByTagName('input')[0].value=actor;
	document.getElementById("DVD INFO Price").getElementsByTagName('input')[0].value=price;
	document.getElementById("DVD INFO Promo").style.display=special?'block':'none';
}

function fill_list(list) {
	l=[];
	list.forEach(function(e) { l.push("<span onclick='fill_DVD(\""+e.title+"\", \""+e.actor+"\", "+e.price+", "+e.special+")'>"+e.title+"</span>");})
	document.getElementById("liste").innerHTML=l.join('<br>');
}
