$(function(){
	var options = $(".options");
	var question = $(".question");

	// sparar de val användaren gör
	var choices = {};

	writeStory("Once upon a time there was a well known...");
	question.html("Well, what was it?");
	options.html(choiceHtml("monster", "dragon", "A dragon") + choiceHtml("monster", "lake monster", "A Lake monster"));
	

	// .find hittar alla element med klassen choice i options, bind binder ett klick-event, funktionen sparar användarens val
	options.find(".choice").bind("click", function(){
		choices.monster = $(this).data("monster");


		writeStory("And once upon a time, there was you!");
		question.html("What’s your name again?");
		options.html("<li><input type=\"text\"><input type=\"button\" value=\"Submit\"/></li>");
	 		options.find("input[type=button]").bind("click", function(){
			choices.userName = options.find("input[type=text]").val();


			writeStory("One day " + choices.userName + " had a truly boring time at home. Nothing seemed to please xhe's mind enough to settle down. It was yearning for something new, some kind of adventure. " + choices.userName + " tried to fight the unsettling mind - presenting different options to pass the time with, soon realising that is was no use. So far xhe’s never won against it. The mind wanted an adventure so an adventure it was.");
			question.html("Because you don’t want to question the great mind.. now do you?");
			options.html(choiceHtml("questions-mind", "yes", "Yes") + choiceHtml("questions-mind","no", "No"));


			options.find(".choice").bind("click", function(){
				choices.questionsMind = $(this).data("questions-mind");
				if (choices.questionsMind === "yes"){
					writeStory("Game over. Maybe next time you won’t question the great mind…");
					setTimeout(function(){
						window.location.href = window.location.href;
					}, 5000);
				}
				else {
					writeStory("Great, let’s get going!");
					writeStory(choices.userName + " went to the kitchen in search of today’s newspaper, xhe remembered xhe’s roommate talking about some article covering a story about a discovery of a thousand year old " + (choices.monster === "lake monster" ? "underwater" : "") + " cave. The legend said that it presumably belonged to an old " + choices.monster + " whom guarded a great treasure.");
					
					writeStory(choices.userName + " finally saw the paper under a big pile of random mess, to be able to lift the great pile xhe’ll need at the very least a total of 2 kg arm muscles. Let’s see.. last month xhe weighed 60kg and 4kg of the bodyweight were arm muscles. This month xhe had lost  30% of last month’s arm muscles…");
					question.html("Can xhe still lift the great pile to get the paper?");
					options.html(choiceHtml("answer", "yes", "Yes") + choiceHtml("answer", "no", "No"));
					options.find(".choice").bind("click", function(){
						if ($(this).data("answer") === "no") {
							writeStory("Hm.. that’s not quite right. Why don’t you find some energy for your brain and think that one over again?");
						}
						else {
							writeStory("Oh you’re not just muscles are you!");
							writeStory(choices.userName + " read the paper and figured out the directions to the " + (choices.monster === "lake monster" ? "underwater" : "") + " cave. Xhe was as ready as xhe would ever be! Xhe was… to first get some items to defend with, in case there would be any " + (choices.monster === "lake monster" ? "hostile" : "fiery") + " contact...");
							writeStory(choices.userName + " went to the wardrobe to find the right items for the great adventure. The right items…");
							question.html("...which were...?");

							if (choices.monster === "dragon") {
								options.html(choiceHtml("item", "potato", "A potato") + choiceHtml("item", "spray bottle", "A spray bottle") + choiceHtml("item", "cat shovel", "A cat shovel"));
							}
							else {
								options.html(choiceHtml("item", "fork", "A fork (or is it really a trident...?)") + choiceHtml("item", "snickers bar", "A snickers bar") + choiceHtml("item", "cellphone", "A cellphone"));
							}
							options.find(".choice").bind("click", function(){
								choices.item = $(this).data("item");
								question.html("");
								options.html("");

								writeStory("Now " + choices.userName + " was well equipped and ready to leave for the great adventure!");
								setTimeout(function(){
									if (choices.monster === "dragon") {
										changeScenery("dragonOnTheWay");	
									} else {
										changeScenery("lakeMonsterOnTheWay");
									}
									writeStory("Right foot, left foot");
									setTimeout(function(){
										writeStory("Right foot, left foot");
										setTimeout(function(){
											writeStory("Right foot, left foot");
											setTimeout(function(){
												writeStory("Right foot, left foot");
												setTimeout(function(){
													
													if (choices.monster === "lake monster") {
														changeScenery("lakeMonsterFoundLake");
														writeStory("After a half hour walk " + choices.userName + " finds the lake, which in person seems a lot ghostlier and quite dark.. and.. and…");
														question.html("Does xhe really have the courage?");
														options.html(choiceHtml("answer", "yes", "Yes") + choiceHtml("answer", "no", "No"));

														options.find(".choice").bind("click", function(){
															if ($(this).data("answer") === "no") {
																writeStory("Oh man up you little twat - you bet Santa Claus is watching you now so you better impress and dive head first!");
															}
															else {
																writeStory("Oh fifty flops and hippety hops, time to suit up and dive in!");
															}
															options.html(choiceHtml("answer", "yes", "Dive in!"));
															options.find(".choice").bind("click", function(){

																changeScenery("lakeMonsterSwimming");
																writeStory("After swimming for a bit " + choices.userName + " discovered an underwater cave system with several tunnels. Xhe investigated them briefly, each one was marked with an color. And probably only one of them would lead " + choices.userName + " the way to the lake monster, and of course.. the treasure. Though, which one to choose.. " + choices.userName + " thought about it for a while and suddenly discovered an old sign. Xhe swam to it and read the sign.");
																options.html(choiceHtml("answer", "yes", "Swim to the sign!"));
																options.find(".choice").bind("click", function(){

																	changeScenery("lakeMonsterAtRiddle");
																	writeStory("<em>One of these tunnels will lead you either to the great treasure, or to an early death. Which one of those endings that comes true is up to you. Answer the question below and face your destiny. If answered correctly the light will show you the right way.</em>");
																	writeStory("<em>Lighter than what I am made of,<br>More of me is hidden than is seen,<br>I am the bane of the mariner,<br>A tooth within the sea.</em>");
																	question.html("Speak my name.");

																	options.html(choiceHtml("answer", "diamond", "Diamond") + choiceHtml("answer", "ice", "Ice")+ choiceHtml("answer", "clam", "Clam"));
																	options.find(".choice").bind("click", function(){
																		if ($(this).data("answer") === "ice") {
																			changeScenery("lakeMonsterSwimming");
																			writeStory("Suddenly a light as bright as the very moon itself shone upon the tunnel at " + choices.userName + "’s left side. " + choices.userName + " took a deep breath.");
																			question.html("");
																			options.html(choiceHtml("answer", "yes", "Swim towards the tunnel..."));
																			options.find(".choice").bind("click", function(){
																			
																				changeScenery("lakeMonsterAtTunnel");
																				writeStory("The tunnel looked even more creepy inside than " + choices.userName + " had imagined, but with guts of iron xhe carried on. Xhe's arm began to hurt after all non stop swimming, so xhe stopped for a short pause. While stretching a big shadow appeared behind xhe. " + choices.userName + " froze for a second.. but then remembering the iron guts xhe turned around.");
																				writeStory("– Welcome my dear. I see you solved my riddle. I am the great wizard who guards all lake creatures. I can imagine you, like so many before you are here to find the treasure. Very well, I will help you - and I can assure you that you do need it - if you answer me this.");
																				options.html(choiceHtml("answer", "yes", "Bring it!"));
																				options.find(".choice").bind("click", function(){
																					
																					changeScenery("lakeMonsterAtRiddle");
																					writeStory("<em>– With no wings, I fly. With no eyes, I see. With no arms, I climb. More frightening than any beast, stronger than any foe. I am cunning, ruthless and tall; in the end, I rule all.</em>");
																					question.html("– What am I?");
																					
																					options.html(choiceHtml("answer", "imagination", "Imagination") + choiceHtml("answer", "wind", "Wind")+ choiceHtml("answer", "water", "Water"));
																					options.find(".choice").bind("click", function(){
																						if ($(this).data("answer") === "imagination") {
																							question.html("");
																							options.html("");

																							changeScenery("lakeMonsterAtTunnel");
																							writeStory("– Very good my dear, very good. Imagination is stronger than anything else in this world. Keep that in mind and you’ll go far in everything you take on. Now, I can help you, but the exchange has to fair. Do you have anything of value in exchange for my help?");
																							writeStory("– Um.. uh, a "+ choices.item + "!");
																							writeStory("– Fascinating, just fascinating! As promised I will help you. I will put an invisibility spell on you that will last for an hour, with this the lake monster cannot see you. During this hour you will have to find the treasure and bring it out, before the lake monster realises it’s gone. Good luck my dear.")
																							changeScenery("lakeMonsterTreasure");
																							writeStory("The wizard showed " + choices.userName + " the way and then disappeared. Before xhe was now the great (GREAT) lake monster. It was banging it’s tail against the surrounding rocks - smashing them as if they were nothing. It was wandering around, looking after it’s many treasures. The wizard’s spell better be working or else " + choices.userName + " would be smashed meat in no time. Xhe set xhe’s eyes on a very shiny coffin which no doubt would contain gold, because everyone knows that monsters loves gold! With great skill and dedication " + choices.userName + " carefully stepped around the lake monster’s tail and swam towards the small coffin. The lake monster whiffed around, almost as if it could sense someone was there but not being able to see what or who it was. Great, the wizard wasn’t just all words. " + choices.userName + " reached the treasure and quickly grabbed it, making the way back home. Boy, did xhe have something to tell, and maybe share?, with xhe's roommate tonight.");
																							writeStory("<strong><em>The end</em><strong>");
																							question.html("Well played, " + choices.userName + " ~");
																						} else {
																							writeStory("– I believe you are not the one to take on the lake monster, nor do you deserve the treasure with such poor mind as yours.");
																							writeStory("Hurry and pick another answer before the wizard disappears, and along with that your chances with the treasure!");
																						}
																					});
																				});
																			});
																		} else {
																			writeStory("Suddenly the ground started to rumble and of the tunnels collapsed! " + choices.userName + " better hurry and answer the riddle correctly, or else there won’t be much left of this place, or " + choices.userName + "..");
																		}
																	});
																});
															});
														});
													}
													else {
														changeScenery("dragonFoundMountain");
														 writeStory("After a half hour walk " + choices.userName + " finds the mountain which holds the dragon’s cave. In person the mountain looks a lot bigger and, really - where should one place the hands in order to get anywhere?");
														 question.html("Hm… does " + choices.userName + " really have the brains and muscles to go on with this?");
														options.html(choiceHtml("answer", "yes", "Yes")+ choiceHtml("answer", "no", "No"));
														
														options.find(".choice").bind("click", function(){
															if ($(this).data("answer") === "no") {
																writeStory("Oh man up you little twat - you bet Santa Claus is watching you now so you better impress and start placing one hand after the other and get going!");
															}
															else {
																writeStory("Oh fifty flops and hippety hops, time to suit up and start climbing!");
															}
															question.html("");
															options.html(choiceHtml("answer", "yes", "Start climbing!"));
															options.find(".choice").bind("click", function(){

																changeScenery("dragonClimbing");
																writeStory("After climbing for a bit " + choices.userName + " discovered some sort of a cave system with several tunnels. Xhe investigated them briefly, each one was marked with an color. And probably only one of them would lead " + choices.userName + " the way to the dragon, and of course.. the treasure. Though, which one to choose.. " + choices.userName + " thought about it for a while and suddenly discovered an old sign.");
																options.html(choiceHtml("answer", "yes", "Climb to the sign!"));
																options.find(".choice").bind("click", function(){

																	changeScenery("dragonAtRiddle");
																	writeStory("<em>One of these tunnels will lead you either to the great treasure, or to an early death. Which one of those endings that comes true is up to you. Answer the question below and face your destiny. If answered correctly the light will show you the right way.</em>");
																	writeStory("<em>A spirited jig it dances bright,<br>Banishing all but then darkest night.<br>Give it food and it will live;<br>Give it water and it will die.</em>");
																	question.html("What is it?");

																	options.html(choiceHtml("answer", "spirit", "Spirit") + choiceHtml("answer", "dwarf", "Dwarf")+ choiceHtml("answer", "fire", "Fire"));
																	options.find(".choice").bind("click", function(){
																		if ($(this).data("answer") === "fire") {
																			writeStory("Suddenly a light as bright as the very moon itself shone upon the tunnel at " + choices.userName + "’s left side. " + choices.userName + " took a deep breath and climbed towards it.");
																			question.html("");
																			options.html(choiceHtml("answer", "yes", "Climb towards the tunnel..."));
																			options.find(".choice").bind("click", function(){
																				changeScenery("dragonAtTunnel");
																				writeStory("The tunnel looked even more creepy inside than " + choices.userName + " had imagined, but with guts of iron xhe carried on. Xhes legs began to hurt a little after all the climbing, and now all the walking so xhe stopped for a short pause. While stretching, a big shadow appeared behind xhe. " + choices.userName + " froze for a second.. but then remembering the iron guts xhe turned around.");
																				writeStory("– Welcome my dear. I see you solved my riddle. I am the great wizard who guards all lake creatures. I can imagine you, like so many before you are here to find the treasure. Very well, I will help you - and I can assure you that you do need it - if you answer me this.");
																				options.html(choiceHtml("answer", "yes", "Bring it!"));
																				options.find(".choice").bind("click", function(){																					
																					changeScenery("dragonAtRiddle");
																					writeStory("<em>– With no wings, I fly. With no eyes, I see. With no arms, I climb. More frightening than any beast, stronger than any foe. I am cunning, ruthless and tall; in the end, I rule all.</em>");

																					question.html("– What am I?");
																					options.html(choiceHtml("answer", "imagination", "Imagination") + choiceHtml("answer", "wind", "Wind")+ choiceHtml("answer", "water", "Water"));
																					options.find(".choice").bind("click", function(){
																						if ($(this).data("answer") === "imagination") {
																							question.html("");
																							options.html("");
																							changeScenery("dragonAtTunnel");
																							writeStory("– Very good my dear, very good. Imagination is stronger than anything else in this world. Keep that in mind and you’ll go far in everything you take on. Now, I can help you, but the exchange has to fair. Do you have anything of value in exchange for my help?");
																							writeStory("– Um.. uh, a "+ choices.item + "!");
																							writeStory("Fascinating, just fascinating! As promised I will help you. I will put an invisibility spell on you that will last for an hour, with this the dragon cannot see you. During this hour you will have to find the treasure and bring it out, before the dragon realises it’s gone. Good luck my dear.");
																							changeScenery("dragonTreasure");
																							writeStory("The wizard showed X the way and then disappeared. Before xhe was now the great (GREAT) dragon. It was spitting fire against the walls and wandering around, looking after it’s many treasures. The wizard’s spell better be working or else X would be smoked meat in no time. Xhe set xhe’s eyes on a very shiny coffin which no doubt would contain gold, because everyone knows that dragons loves gold! With great skill and dedication X carefully stepped around the dragon’s tail and moved towards the small coffin. The dragon whiffed in the air, almost as if it could sense someone was there but not being able to see what or who it was. Great, the wizard wasn’t just all words. X reached the treasure and quickly grabbed it, making the way back home. Boy, did xhe have something to tell, and maybe share?, with xhe’s roommate tonight.");
																							writeStory("<strong><em>The end</em><strong>");
																							question.html("Well played, " + choices.userName + " ~");
																						} else {
																							writeStory("– I believe you are not the one to take on the dragon, nor do you deserve the treasure with such poor mind as yours.");
																							writeStory("Hurry and pick another answer before the wizard disappears, and along with that your chances with the treasure!");
																						}
																					});
																				});
																			});
																	
																		} else {
																			writeStory("Suddenly the ground started to rumble and of the tunnels collapsed! " + choices.userName + " better hurry and answer the riddle correctly, or else there won’t be much left of this place, or " + choices.userName + "..");
																		}
																	});
																});
															});
														});
													}
												}, 2000);
											}, 2000);
										}, 2000);
									}, 2000);
								}, 2000);
							});
						}
					});
				}

			});
		});
	});
});
// funktion som returnerar html för ett val
function choiceHtml(name, data, text) {
	return "<li data-" + name + "=\"" + data + "\" class=\"choice\">" + text + "</li>";
}
// funktion som ser till att texten åker upp i rutan när nya val görs
function writeStory(text){
	$(".text").append("<p>" + text + "</p>");
	$(".text").animate({ scrollTop: $(".text")[0].scrollHeight }, "slow");
}
// funktion som byter bakgrundsbilder när användaren gör olika val
function changeScenery(scenery) {
	$("body").removeClass().addClass(scenery);
}
