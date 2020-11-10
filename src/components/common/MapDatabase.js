const MapDatabase = new Map([
    ['IX', {steps: [
        ["Complete 3 challenges in the Arena",
          "Interact with any 1 of the 4 flags in the Arena to start the challenges:::IX_Flag.jpg",
          "Collect the Z-Harmony pistol:::https://charlieintel.com/wp-content/uploads/2018/11/Call-of-Duty%C2%AE_-Black-Ops-4_20181121132800.jpg"],
        ["Hit the gong in each of the 4 altar rooms and collect the champion heads", 
          "Danu Altar Room:::https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-black-ops-4/f/fd/Screen_Shot_2018-10-10_at_4.10.26_PM_%282%29.png?width=1280",
          "Ra Altar Room:::https://assets.primagames.com/media/files/black-ops-4-ix-gongs.jpg/PRIMA/resize/618x0", 
          "Zeus Altar Room",
          "Odin Altar Room:::https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-black-ops-4/d/d7/Screen_Shot_2018-10-10_at_4.38.02_PM.png"],
        ["Collect the 3 Brazen Bull Shield parts",
          "Temple of Ra (2 locations):::https://www.powerpyx.com/wp-content/uploads/Snapshot_20181012_152702-1-1024x580.jpg https://www.powerpyx.com/wp-content/uploads/Snapshot_20181012_155234-1-1024x580.jpg ",
          "Temple of Odin (3 locations):::https://www.powerpyx.com/wp-content/uploads/Snapshot_20181012_152157-1-1024x580.jpg https://www.powerpyx.com/wp-content/uploads/Snapshot_20181012_154607-1-1024x580.jpg https://www.powerpyx.com/wp-content/uploads/Snapshot_20181012_160236-1-1024x580.jpg",
          "Temple of Zeus (3 locations):::https://www.powerpyx.com/wp-content/uploads/Snapshot_20181012_154541-1-1024x580.jpg https://www.powerpyx.com/wp-content/uploads/Snapshot_20181012_154952-1-1024x580.jpg https://www.powerpyx.com/wp-content/uploads/Snapshot_20181012_152414-1-1024x580.jpg",
          "The Pit crafting table:::https://assets.primagames.com/media/files/black-ops-4-brazen-bull-workbench-location.jpg/PRIMA/resize/618x0"],
        ["Unlock the Pack-a-Punch by placing the champions' heads on the spikes",
          "Place the heads here: :::IX_Spikes.jpg"],
        ["Collect the acid trap pieces on either side of the Pack-a-Punch room and assemble it",
          "Chain under one of the balconies in the Temple:::http://theundeadzone.com/wp-content/uploads/2018/10/acid-chain.jpg",
          "Cog under one of the balconies in the Temple:::http://theundeadzone.com/wp-content/uploads/2018/10/Acid-Trap-gear.jpg",
          "Bowl on the altar (complete 3 challenges first):::http://theundeadzone.com/wp-content/uploads/2018/10/acid-trap-bowl.jpg",
          "Assembly location at the Danu Tower: Entrance:::https://i.ytimg.com/vi/3vzZCPNCLwE/maxresdefault.jpg"],
        ["Shoot the bowl at the Danu-Ra Temple Entrance using the Bull Shield", 
          "Shoot this flaming bowl with the Bull Shield:::IX_bowl.png"],
        ["On the Stone Bridge (between Ra and Danu) identify which temple the flaming arrow points to",
          "Look for this: :::https://i0.wp.com/www.mundoplayers.com/wp-content/uploads/2019/05/IX-flaming-arrow-Gameranx.jpg?w=1064&ssl=1"],
        ["Retrieve the skull from the basement of the correct temple",
          "Ra Tower: Burial Chamber:::IX_Skull_Ra.png",
          "Zeus Tower: Bath House:::IX_Skull_Zeus.png",
          "Danu Tower: Arboretum:::IX_Skull_Danu.png",
          "Odin Tower: Cauldron:::IX_Skull_Odin.png"],
        ["Melt the skull using the acid trap you built earlier and retrieve the scorpion",
          "Place the skull on the grate below the trap:::IX_Acid.jpg"],
        ["Maintain high affinity to recieve the Gift of Serket from the crowd",
          "Gift of Serket: :::https://i.imgur.com/DTFElcf.jpg"],
        ["Collect the tree sap from the Danu Temple (flip 1 round)",
          "Do the following in the Danu Tower: Arboretum:::https://kill-the-game.com/wp-content/uploads/2018/10/how-unlock-death-of-orion-guide-CoD-black-ops-4.jpg",
          "Tip: Knife the tree to insert the scorpion"],
        ["Go to the left corner of the Mystery Box and interact with it. After it glows, spin it to get Serket's Kiss",
          "Interact in this position:::IX_Mystery.png"],
        ["Interact with the skull with a symbol on it (with your specialist ability) in the Pack-a-Punch room",
          "Map of skull locations: :::https://i.redd.it/zhem2y8pfds11.png",
          "The skull's appearance: :::https://media.discordapp.net/attachments/483357127486996503/501428556824576000/Z.png",
          "NOTE: The skull is known to not appear in custom game modes"],
        ["Locate the grinder in the Flooded Crypts and place the skull inside it, powering it with blasts from Serket's Kiss. Collect the powder",
          "The grinder: :::http://theundeadzone.com/wp-content/uploads/2018/10/3474e763-ceba-4d9a-a4b8-dcb9ed9fc44a_Thumbnail.png"],
        ["Make a Gladiator throw their axe at 1 of the 2 wooden pyres in the Arena, and collect the fallen wood",
          "Look for this: :::http://theundeadzone.com/wp-content/uploads/2018/10/capture2-1.jpg"],
        ["Place the wood in the Odin Tower cauldron (flip 2 rounds) and collect the charcoal",
          "Place the wood here: :::https://i.imgur.com/u1X7ETC.jpg"],
        ["Jump in the fires and throw grenades in the crowd to reduce affinity and collect the poo thrown",
          "You should eventually recieve this: :::IX_Poo.png"],
        ["Place the skull powder, charcoal, and poo in the bowl in the Zeus Tower: Bath House (flip 1 round)",
          "Look for this: :::http://theundeadzone.com/wp-content/uploads/2018/10/Capture.jpg",
          "When it is ready: :::IX_Mix_Done.png"],
        ["At Danu Temple place the fertilizer in the middle of the ground (flip 2 rounds)",
          "Place it here: :::IX_Danu_Poo.png",
          "When it is ready: :::IX_Danu_Done.png"],
        ["Get a weapon with the Fire Bomb modification"],
        ["Fire at zombies over the fertilizer with your Fire Bomb weapon (until you see blue cracks) and interact with it",
          "When you have killed a zombie correctly the screen should go white momentarily",
          "Interact with the floor:::IX_Danu_Trial.png"],
        ["Complete the trial by destroying the glowing red growths",
          "Tip: Have Stock Option and a Homonculus ready, especially if you're going solo"],
        ["Locate and shoot 4 bull symbols (9 possible locations) with the Bull Shield and kill the Gladiators that spawn in",
          "Danu Altar Room:::https://i.imgur.com/5rNdoix.jpg",
          "Danu Tunnel:::IX_Danu_Tun.png",
          "The Pit:::https://i.imgur.com/6SqOtUm.jpg",
          "Ra Tower: Burial Chamber:::https://cdn.discordapp.com/attachments/483357127486996503/501732154062143488/CqM1ZXo9FWUAAAAASUVORK5CYII.png",
          "Draw Bridge (between Zeus and Odin):::https://i.imgur.com/ps1DApO.jpg",
          "Arena:::https://i.imgur.com/UUwPsVg.jpg",
          "Temple:::https://i.imgur.com/cMQ1bLn.png",
          "Flooded Crypt:::https://i.imgur.com/n67Dh3T.jpg",
          "Odin-Zeus Temple Entrance:::https://i.imgur.com/CJ9X3rN.jpg"],
        ["Interact with the column in the Ra Altar Room and play through 2 rounds of the symbols game",
          "Symbols will appear on the column (be prepared to pause the game)",
          "Only kill enemies of the specified type in the order the symbols appeared",
          "Refer to this image (credit to @CodeNamePizza): :::IX_Symbols.png",
          "Killing normal zombies will not jeopardise the challenge"],
        ["Interact with the altar in the middle of the Arena"],
        ["Shoot the 4 screws until they no longer descend back down",
          "The Collapsed Tunnel:::IX_CT.png",
          "Odin Tunnel:::IX_OT.png",
          "Danu Tunnel:::IX_DT.png",
          "The Cursed Room:::IX_CR.png"],
        ["Get a weapon with the Kill-O-Watts modification"],
        ["Kill zombies in the electrical circles in the Arena with your Kill-O-Watts weapon",
          "Killing 2 Gladiators quickly completes one circle"],
        ["Get everybody to interact with each of the orbs at the altar",
          "You are granted unlimited specialist ability, just survive the waves"],
        ["Shoot the 3 blue symbols underground with Serket's Kiss (non-charged shot)",
          "Shoot exactly in the positions shown (both cursor and player), the symbol glows forever if done correctly",
          "The Pit:::IX_TP.png",
          "Danu Tunnel:::IX_SDT.png",
          "The Crypts:::IX_STC.png"],
        ["Go to the Pit and interact with the grate - come prepared",
          "Interact here: :::IX_Grate.png",
          "Survive the challenge, use and repair the Bull Shield as much as possible",
          "Go to the grate and collect the small key on top of it"],
        ["BOSS FIGHT: Go to the Arena and interact with the red portal (bring a Homonculus)",
          "Shoot the armoured sides of the first elephant and take it down",
          "Do the same for the second elephant - beware of the snipers on its back!",
          "Shooting the snipers also significantly injures the elephant",
          "Enjoy the cutscene :)"],
      
      ], sources: 'CodeNamePizza, TheUndeadZone, PowerPyx.com', minPlayers: 1}],
      ['Der_Eisendrache', {steps: [
        ["Turn on the power",
          "Find it here: :::power.png"],
        ["Kill 6 zombies near each of the dragon statues",
          "Outdoor location:::final_dragon.png",
          "Church location:::church_dragon.png",
          "Pyramid location:::pyramid_dragon.png"],
        ["Collect the bow where the deceased knight is"],
        ["Build an upgraded bow (choose any four of the below steps)"],
        ["Storm Bow",
          "Shoot the weathervane near the deathray:::weathervane_start.png",
          "Collect the arrow at the base of the weathervane",
          "Shoot each of the bonfires:::bonfire_location1.png bonfire_location2.png bonfire_location3.png",
          "Wall run over all the wind pressure plates in the pyramid room:::wallrun.png",
          "Get kills near the electric urns located around the map:::urn_location1.png urn_location2.png urn_location3.png",
          "Charge your bow by drawing it near the urn and shoot the bonfires again:::draw_bow_near_urn.png",
          "Go back to the weathervane and interact (press square) with the blue mist on the ground",
          "Collect the arrow and place it in the correct box in the pyramid room:::place_arrow_in_box.png",
          "Kill zombies near the box. When it stops collecting souls, place your bow in the box (press square on it) and you will collect your upgraded dawn bow"],
        ["Wolf Howl Bow",
          "Find the four paintings around the map. Select them in the correct order (press square, if they make a guitar sound, the order is correct. If you don't hear that sound, restart from the beginning):::painting_location_1.png painting_location_2.png painting_location_3.png painting_location_4.png",
          "Go to the pyramid room, the arrow will be there:::collect_arrow.png",
          "Go to the rocket testing area and shoot the red flag on the top of the hill:::shoot_red_flag.png",
          "A skull will drop right beneath it - pick it up:::pick_up_skulls.png",
          "Place the skull into the box in the pyramid room:::place_skull_in_box.png",
          "Follow the ghost dog, killing zombies near the area the dog tries to dig up. Collect the exposed items in the ground:::follow_dog_and_kill_zombies_near_sites.png",
          "Wall run in the pyramid room and shoot the hole in the wall:::shoot_in_wall_hole.png",
          "Stand on the ledge that spawns in, interact with the hole and collect the arrow:::stand_on_ledge_and_collect_bow.png",
          "Place the arrow inside the correct box near the pyramid and collect souls"],
        ["Rune Prison (Teleport) Bow",
          "Head to Double Tap, shoot the roof and collect the elemental arrow:::shoot_roof.png",
          "Go to the room under the clock tower and get a melee kill above the purple square. Interact with the exposed floor:::melee_kills_over_glowing_square.png",
          "Collect the skulls scattered around the map:::skull_location_1.png skull_location_2.png skull_location_3.png skull_location_4.png skull_location_5.png skull_location_6.png",
          "Make 6 crawlers and lead them into the room underneath the clock tower. The skulls will kill them:::lure_crawlers.png",
          "The demonic voice will tell you his name. Write it down.",
          "Kill zombies and collect the six glowing symbols:::collect_six_symbols.png",
          "Interact with the statues that have symbols that match the name. Remember the symbols and their order:::interact_with_statues.png",
          "Go back to the room below the clock tower and shoot the discovered symbols in the correct order:::choose_correct_symbols_in_correct_order.png",
          "A purple beam will form. Interact with it and collect the arrow. Put it in the correct box in the pyramid room"],
        ["Demon Gate (Fire) Bow",
          "Shoot the wall at the top of the clock tower and collect the elemental arrow:::shoot_clocktower_wall.png",
          "Head to the Rocket Testing area. Wait for the rocket to launch, and head out of the bunker right away. Shoot the glowing orb:::shoot_glow_after_rocket_test.png",
          "Head to the launchpads around the map and shoot the red rings while in the air:::launch_and_shoot.png",
          "Stand on the circles and collect souls:::collect_souls.png",
          "Head back to the top of the clock tower and interact with the back of the clock:::interact_with_clocktower.png",
          "Note the symbol that appears above the clock cogs",
          "Find the corresponding fireplace in the map (Church, Eddie's Room, or in room near the outdoor dragon location). Then flip the round",
          "Stand on one of the fire circles (that has a little volcano next to it) and shoot your bow. It will spawn a volcano",
          "Stand next to the volcano you shot out and try to get it into the right fireplace within 4 shots",
          "Interact with the fireplace and head to the fireball near the deathray",
          "Kill one zombie underneath the fireball. Collect the arrow and put it in the correct box in the pyramid room:::kill_zombie_beneath_orb.png"],
        ["Shoot the orbs on the top of the teleporter with a bow",
          "Shoot here: :::shoot_teleporter_orbs.png"],
        ["Shoot the 4 wisps located around the map with your upgraded bow",
          "Location 1: :::wisp_location_1.png",
          "Location 2: :::wisp_location_2.png",
          "Location 3: :::wisp_location_3.png",
          "Location 4: :::wisp_location_4.png",
          "Location 5: :::wisp_location_5.png",
          "Location 6: :::wisp_location_6.png",
          "Location 7: :::wisp_location_7.png",
          "Location 8: :::wisp_location_8.png"],
        ["Repeat the above step 3 more times (much pain, much suffer)"],
        ["The teleporter should now be purple, use it to go back in time",
          "It will look like so: :::purple_teleporter.png",
          "Collect the fuses on the box:::collect_fuses.png",
          "Collect the blue tube:::collect_blue_tube.png",
          "Remember the code the scientist puts into the safe:::remember_code.png"],
        ["Go to the death ray and attach the fuses",
          "Place the fuses here: :::place_fuse_in_death_ray.png",
          "Go to the other side and turn the dial:::turn_dial_death_ray.png",
          "Activate the deathray"],
        ["Go to the computers nearby (along the castle walls) and input the code you saw earlier",
          "Put the code in here: :::input_code.png",
          "Go to the safe in the teleporter room (that is now open) and collect the items inside it:::unlocked_teleporter_room.png"],
        ["Place the collected fuses in the two electric towers near the deathray",
          "Place them here: :::put_items_in_deathray_towers.png",
          "Turn the dial on the side of the deathray (back to destroy mode):::turn_dial_death_ray.png"],
        ["Place the floppy disk into the computer you put the safe code in, and play two rounds of Simon Says",
          "First game of Simon Says is played here: :::place_floppy_disk_in_computer.png",
          "The second location is at the Rocket Testing area: :::simon_says_2.png",
          "If successful, the deathray towers should look like so: :::successful_simon_says.png",
          "Activate the green button on the back of the deathray:::activate_back_of_death_ray.png",
          "Kill all remaining zombies in this round"],
        ["Repeat the wisp step once more"],
        ["Return to the teleporter, which should be purple again",
          "Once back in time, interact with the computer here: :::interact_with_computer.png",
          "Collect the tablet in the box near the doorway:::collect_tablet.png",
          "Place the tablet into the side of this wall: :::place_tablet.png"],
        ["Collect the golden rod from the floor of Dempsey's pod",
          "It will look like this: :::collect_golden_rod.png",
          "Place the golden rod where the knight is laying:::place_golden_rod.png"],
        ["Follow the ghost and get kills in the circle with your bow",
          "There will be 4 stops along the way:::follow_ghost_and_get_kills.png"],
        ["Go to the pyramid room and place the blue tube in the corner",
          "Place it here: :::place_blue_tube.png"],
        ["(NEEDED FOR BOSS FIGHT) Build the Ragnarok (Gravity Spikes)",
          "When you kill a Panzer it will drop the first part",
          "Activate the deathray. You will see a glowing part above either one of the deathray towers or above the launchpad right behind the deathray",
          "Use the correct launchpad to jump and retrieve that hovering part (be quick)",
          "The final part is in the rocket testing area. Wait here until the rocket is just about to launch, activate the switch, and run into the bunker:::ragnarok1.png",
          "Go to this switch in the bunker and wait until all 3 lights are green. Flick it immediately:::ragnarok2.png",
          "The final part will spawn in the teleporter right behind you"],
        ["(OPTIONAL) Get the Golden Plunger (insta-kill Panzers - after you kill one Panzer with your other weapons)",
          "Shoot the wall at the top of the clocktower with your bow",
          "Place your Ragnaroks right behind the exposed clock",
          "Activate the switch at the bottom of the stairs:::activate_switch.png",
          "The clock will start to move. You need to stop the clock (flick the switch again) when it is on exactly 9:35",
          "Go to the pyramid room and do a wall run when zero gravity is on. If successful, you will go back in time",
          "Collect the Golden Plunger:::collect_golden_plunger.png"],
        ["BOSS FIGHT",
          "Place your Ragnaroks at any of the four pressure plates in the pyramid room",
          "Don't do anything (spawns are endless anyway) until a wisp spawns into the middle of the map. Place your gravity spikes on that wisp",
          "The boss will expose his chest, allowing it to be shot",
          "Collect your Ragnaroks and the max ammo and kill the Panzers that spawn in",
          "Wait for the wisp to spawn in and repeat the same process as before",
          "Once all 3 waves are done, you have completed the boss fight!",
          "Put the summoning key into the pyramid:::place_key_in_pyramid.png",
          "Get your summoning key back once the process is done",
          "Head to the computers (by the castle wall) and interact with them",
          "Enjoy the cutscene :)"],
      ], sources: 'CodeNamePizza', minPlayers: 1}]
])

export default MapDatabase;