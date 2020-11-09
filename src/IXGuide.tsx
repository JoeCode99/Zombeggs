import React from 'react';
import List from './components/List';
import EEHeader from './components/EEHeader';
import './index.css';

const steps: Array<Array<string>> = [
  ["Complete 3 challenges in the Arena",
    "Interact with any 1 of the 4 flags in the Arena to start the challenges:::IX_Flag.jpg",
    "Collect the Z-Harmony pistol:::https://charlieintel.com/wp-content/uploads/2018/11/Call-of-Duty%C2%AE_-Black-Ops-4_20181121132800.jpg"],
  ["Hit the gong in each of the 4 altar rooms and collect the champion heads", 
    "Danu Altar Room:::https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-black-ops-4/f/fd/Screen_Shot_2018-10-10_at_4.10.26_PM_%282%29.png?width=1280",
    "Ra Altar Room:::https://assets.primagames.com/media/files/black-ops-4-ix-gongs.jpg/PRIMA/resize/618x0", 
    "Zeus Altar Room:::https://www.gamespew.com/wp-content/uploads/2018/10/ix-Black-Ops-4-Zombies-3-min.jpg",
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

];

function IXGuide() {
  return (
    <React.Fragment>
      <EEHeader 
        title="IX" 
        sub="Full Guide" 
        source_img="IX.jpg"
      />
      <p className="playerReq"><strong>Min Players Required &nbsp;&nbsp;<span className="playerNo">&nbsp;1&nbsp;</span></strong></p>
      <List content={steps} map="IX"/>
      <p style={{height: '30px'}}></p>
      <p className="playerReq"><strong>Sources <span className="playerNo">CodeNamePizza, TheUndeadZone, PowerPyx.com</span></strong></p>
      <p style={{height: '15px'}}></p>
    </React.Fragment>
  );
}

export default IXGuide;
