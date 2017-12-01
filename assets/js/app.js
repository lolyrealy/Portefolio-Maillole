
  /*

	var boutton= document.getElementById('boutton');

*/


//var val2 =document.getElementById('val2').value;
alert('Le Projet');

document.getElementById('boutton').onclick=function(){
	var commande1=document.getElementById('commande1').value;
	var commande2=document.getElementById('commande2').value;
	alert('le prix du commande1=' + commande1 + '\net le prix du commande2= ' + commande2);
      var tmp;
		   	tmp=commande1;
		    commande1=commande2;
		    commande2=tmp;

	document.getElementById('commande1').value=commande1;
	document.getElementById('commande2').value=commande2;
	alert('le prix du commande1=' + commande1+ '\net la prix du commande2= ' + commande2);
};