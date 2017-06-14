function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
}
function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
}

$(document).ready(function(){

	var p = 0;
	var pmax = 17;

    $("#butright").click(function(){
    	p++;

    	if (p < 0) {
    		p = 0;
    	}
    	if (p > pmax) {
    		p = pmax;
    	}

    	if (p == 0) {
			$("#cedit").attr("src","../img/gallery/whokilledmycrew.png");
			$("#descript").text("This was my first attempt at photo editing. While playing an online game I glitched out of a ship and was left wandering a land nobody was supposed to walk on. I was horrified to find a secret snowman and a plot came up.");
			console.log(p);
		} 

		if (p == 1) {
			$("#cedit").attr("src","../img/gallery/dwarf2.png");
			$("#descript").text("This is some Overwatch fan art of Tjbrornadfk the dwarf (I won't remember his name).");
			console.log(p);
		} 

		if (p == 2) {
			$("#cedit").attr("src","../img/gallery/dwarf2molten.png");
			$("#descript").text("Fan art of the dwarf using his ultimate.");
			console.log(p);
		} 

		if (p == 3) {
			$("#cedit").attr("src","../img/gallery/noosie.png");
			$("#descript").text("This in an edited Nike ad for my new product, the Noosie. A portable noose for when you can't take it anymore and want to go out in style.");
			console.log(p);
		} 


		if (p == 4) {
			$("#cedit").attr("src","../img/gallery/thehillsarealive.png");
			$("#descript").text("From 'The Sound Of Music'. I couldn't resist.");
			console.log(p);
		} 

		if (p == 5) {
			$("#cedit").attr("src","../img/gallery/dankcord.png");
			$("#descript").text("An edit of the Discord program's logo.");
			console.log(p);
		} 

		if (p == 6) {
			$("#cedit").attr("src","../img/gallery/king.png");
			$("#descript").text("This is a logo for one of my bots in Discord. He is (or will be) used for standard moderation and voiting.");
			console.log(p);
		} 

		if (p == 7) {
			$("#cedit").attr("src","../img/gallery/kuck.png");
			$("#descript").text("A logo for another Discord bot called Commander Cuck. He is used for command, like rolling a die.");
			console.log(p);
		} 

		if (p == 8) {
			$("#cedit").attr("src","../img/gallery/machine.png");
			$("#descript").text("This is the logo for the bot 'Meme Machine'. He posts pictures and responds to certain situations like spamming.");
			console.log(p);
		} 

		if (p == 9) {
			$("#cedit").attr("src","../img/gallery/liamdiscord.png");
			$("#descript").text("Another edit of the Discord logo for Liam. You can see the resemblence. The start of the chronicles.");
			console.log(p);
		} 

		if (p == 10) {
			$("#cedit").attr("src","../img/gallery/pilot.png");
			$("#descript").text("Another edit of Liam.");
			console.log(p);
		} 

		if (p == 11) {
			$("#cedit").attr("src","../img/gallery/wrath.png");
			$("#descript").text("Another another edit of Liam.");
			console.log(p);
		} 

		if (p == 12) {
			$("#cedit").attr("src","../img/gallery/wrathful.jpg");
			$("#descript").text("Another another antother edit of Liam.");
			console.log(p);
		} 

		if (p == 13) {
			$("#cedit").attr("src","../img/gallery/HanzoMain.png");
			$("#descript").text("Another another another another edit of Liam. Playing Hanzo.");
			console.log(p);
		} 

		if (p == 14) {
			$("#cedit").attr("src","../img/gallery/ifhesnotapleb.jpg");
			$("#descript").text("Another another another another another edit of Liam.");
			console.log(p);
		} 

		if (p == 15) {
			$("#cedit").attr("src","../img/gallery/angle.png");
			$("#descript").text("For making it this far here is an edit of me. I was told to make this because of the thing on my head and the light rays behind me in the original photo.");
			console.log(p);
		}

		if (p == 16) {
			$("#cedit").attr("src","../img/gallery/wiz1.png");
			$("#descript").text("I couldn't resist.");
			console.log(p);
		} 

		if (p == 17) {
			$("#cedit").attr("src","../img/gallery/wiz2.png");
			$("#descript").text("UNLIMITED POWER");
			console.log(p);
		}  
    });

    $("#butleft").click(function(){
    	p--;

    	if (p < 0) {
    		p = 0;
    	}
    	if (p > pmax) {
    		p = pmax;
    	}

    	if (p == 0) {
			$("#cedit").attr("src","../img/gallery/whokilledmycrew.png");
			$("#descript").text("This was my first attempt at photo editing. While playing an online game I glitched out of a ship and was left wandering a land nobody was supposed to walk on. I was horrified to find a secret snowman and a plot came up.");
			console.log(p);
		} 

		if (p == 1) {
			$("#cedit").attr("src","../img/gallery/dwarf2.png");
			$("#descript").text("This is some Overwatch fan art of T******* the dwarf (I won't remember his name).");
			console.log(p);
		} 

		if (p == 2) {
			$("#cedit").attr("src","../img/gallery/dwarf2molten.png");
			$("#descript").text("Fan art of the dwarf using his ultimate.");
			console.log(p);
		} 

		if (p == 3) {
			$("#cedit").attr("src","../img/gallery/noosie.png");
			$("#descript").text("This in an edited Nike ad for my new product, the Noosie. A portable noose for when you can't take it anymore and want to go out in style.");
			console.log(p);
		} 


		if (p == 4) {
			$("#cedit").attr("src","../img/gallery/thehillsarealive.png");
			$("#descript").text("From 'The Sound Of Music'. I couldn't resist.");
			console.log(p);
		} 

		if (p == 5) {
			$("#cedit").attr("src","../img/gallery/dankcord.png");
			$("#descript").text("An edit of the Discord program's logo.");
			console.log(p);
		} 

		if (p == 6) {
			$("#cedit").attr("src","../img/gallery/king.png");
			$("#descript").text("This is a logo for one of my bots in Discord. He is (or will be) used for standard moderation and voiting.");
			console.log(p);
		} 

		if (p == 7) {
			$("#cedit").attr("src","../img/gallery/kuck.png");
			$("#descript").text("A logo for another Discord bot called Commander Cuck. He is used for command, like rolling a die.");
			console.log(p);
		} 

		if (p == 8) {
			$("#cedit").attr("src","../img/gallery/machine.png");
			$("#descript").text("This is the logo for the bot 'Meme Machine'. He posts pictures and responds to certain situations like spamming.");
			console.log(p);
		} 

		if (p == 9) {
			$("#cedit").attr("src","../img/gallery/liamdiscord.png");
			$("#descript").text("Another edit of the Discord logo for Liam. You can see the resemblence. The start of the chronicles.");
			console.log(p);
		} 

		if (p == 10) {
			$("#cedit").attr("src","../img/gallery/pilot.png");
			$("#descript").text("Another edit of Liam.");
			console.log(p);
		} 

		if (p == 11) {
			$("#cedit").attr("src","../img/gallery/wrath.png");
			$("#descript").text("Another another edit of Liam.");
			console.log(p);
		} 

		if (p == 12) {
			$("#cedit").attr("src","../img/gallery/wrathful.jpg");
			$("#descript").text("Another another antother edit of Liam.");
			console.log(p);
		} 

		if (p == 13) {
			$("#cedit").attr("src","../img/gallery/HanzoMain.png");
			$("#descript").text("Another another another another edit of Liam. Playing Hanzo.");
			console.log(p);
		} 

		if (p == 14) {
			$("#cedit").attr("src","../img/gallery/ifhesnotapleb.jpg");
			$("#descript").text("Another another another another another edit of Liam.");
			console.log(p);
		} 

		if (p == 15) {
			$("#cedit").attr("src","../img/gallery/angle.png");
			$("#descript").text("For making it this far here is an edit of me. I was told to make this because of the thing on my head and the light rays behind me in the original photo. It's cool you made it this far. That's all the edits though.");
			console.log(p);
		} 

		if (p == 16) {
			$("#cedit").attr("src","../img/gallery/wiz1.png");
			$("#descript").text("I couldn't resist.");
			console.log(p);
		} 

		if (p == 17) {
			$("#cedit").attr("src","../img/gallery/wiz2.png");
			$("#descript").text("UNLIMITED POWER");
			console.log(p);
		}  
    });

    $("#butabout").click(function(){
    	$("#descript").toggle();
    	console.log(p);
    });
});