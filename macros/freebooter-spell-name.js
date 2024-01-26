// name: Spell Name
// img: systems/pf2e/icons/spells/abyssal-pact.webp

// Generates spell names per Freebooter tables

form = ["Armor","Arrow","Aura","Bane","Beast","Blade","Blast","Blessing","Blob","Blood","Bolt","Bond","Boon","Brain","Burst","Call","Charm","Circle","Claw","Cloak","Cone","Crown","Cube","Cup","Curse","Dagger","Dart","Demon","Disturbance","Door","Eye","Eyes","Face","Fang","Feast","Finger","Fissure","Fist","Gate","Gaze","Glamour","Globe","Golem","Guard","Guide","Guise","Halo","Hammer","Hand","Heart","Helm","Horn","Jar","Lock","Mantle","Mark","Memory","Mind","Mouth","Oath","Oracle","Pattern","Pet","Pillar","Pocket","Portal","Pyramid","Ray","Rune","Scream","Seal","Sentinel","Servant","Shaft","Shield","Sigil","Sign","Song","Spear","Sphere","Spray","Staff","Storm","Strike","Sword","Tendril","Tongue","Tooth","Trap","Veil","Voice","Wall","Ward","Wave","Weapon","Weave","Whisper","Wings","Word"];
property = ["Acid","Aether","Air","Anger","Ash","Avarice","Balance","Battle","Blight","Blood","Bone","Brimstone","Clay","Cloud","Copper","Cosmos","Dark","Death","Deceit","Despair","Destiny","Dimension","Doom","Dust","Earth","Ember","Energy","Envy","Fear","Fire","Fog","Force","Fury","Glory","Gluttony","Gold","Greed","Hate","Hatred","Health","Heat","History","Hope","Ice","Iron","Justice","Knowledge","Lead","Lies","Life","Light","Lightning","Lore","Love","Lust","Metal","Might","Mist","Moon","Mud","Nature","Oil","Pain","Perception","Plane","Plant","Poison","Quicksilver","Revulsion","Rot","Salt","Shadow","Sight","Silver","Smoke","Soil","Soul","Sound","Spirit","Stars","Steam","Steel","Stone","Storm","Strength","Sun","Terror","Time","Treasure","Truth","Vanity","Venom","Vermin","Void","Water","Will","Wind","Wisdom","Wood","Youth"];
adjective = ["All-Knowing","All-Seeing","Arcane","Befuddling","Binding","Black","Blazing","Blinding","Bloody","Bright","Cacophonous","Cerulean","Concealing","Confusing","Consuming","Crimson","Damnable","Dark","Deflecting","Delicate","Demonic","Devastating","Devilish","Diminishing","Draining","Eldritch","Empowering","Enlightening","Ensorcelling","Entangling","Enveloping","Erratic","Evil","Excruciating","Expanding","Extra-Planar","Fearsome","Flaming","Floating","Freezing","Glittering","Gyrating","Helpful","Hindering","Icy","Illusory","Incredible","Inescapable","Ingenious","Instant","Invigorating","Invisible","Invulnerable","Liberating","Maddening","Magnificent","Many-Colored","Mighty","Most Excellent","Omnipotent","Oozing","Penultimate","Pestilential","Piercing","Poisonous","Prismatic","Raging","Rejuvenating","Restorative","Screaming","Sensitive","Shimmering","Shining","Silent","Sleeping","Slow","Smoking","Sorcerer’s","Strange","Stupefying","Terrible","Thirsty","Thundering","Trans-dimensional","Transmuting","Ultimate","Uncontrollable","Unseen","Unstoppable","Untiring","Vengeful","Vexing","Violent","Violet","Viridian","Voracious","Weakening","White","Wondrous","Yellow"];
wizPrefix = ["A","Ab","Aga","Alha","Appol","Apu","Arne","Asmo","Baha","Bal","Barba","Bol","By","Can","Cinni","Cir","Cyn","Cyto","Dar","Darg","De","Des","Dra","Dul","Elez","Ely","Ez","Fal","Faral","Flo","Fol","Gaili","Garg","Gast","Gil","Gy","Haz","Heca","Her","Hog","Hur","I","Ik","Ilde","In","Jas","Jir","Ju","Krak","Kul","Laf","Long","Ma","Mer","Mercu","Mor","Mune","Munno","Murz","Naf","O","Osh","Pande","Pander","Par","Per","Quel","Ra","Ragga","Rhi","Satan","Satur","Semi","Sera","She","Shrue","Sloo","Sol","T’","Tcha","Tol","Tub","Tur","U","Vag","Val","Vance","Ver","Vish","Wa","Win","Xa","Yu","Za","Zal","Zan","Zili","Zim","Zuur","Zza"];
wizSuffix = ["ak","alto","ana","anti","aris","ark","asta","balia","bus","by","cas","ce","derol","deus","din","dok","dor","dred","driar","dula","dun","dustin","er","fant","fia","fonse","gad","gax","glana","goria","goth","heer","houlik","ia","iala","iana","ingar","ista","jan","jobulon","kan","kang","konn","lah","leius","leo","leou","lin","lonia","lonius","loo","lume","ma","mas","mast","mia","miel","motto","moulian","mut","nak","nia","nish","nob","o","ol","ool","pa","pheus","phim","por","quint","ramis","rezzin","ro","rrak","ry","sira","sta","te","teria","thakk","thalon","tine","toomb","torr","troya","tur","tuva","u","valva","vance","vilk","wink","xa","yop","zant","zark","zirian","zred"];

pick = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
}

wizardName = () => {
    return (`${pick(wizPrefix)}${pick(wizSuffix)}`);
}

roll = Math.floor(Math.random() * 12) + 1;
let spellName;

if (roll <= 2) {
    spellName = `${pick(property)} ${pick(form)}`;
} else if (roll <= 4 ) {
    spellName = `${pick(adjective)} ${pick(form)}`;
} else if (roll <= 6) {
    spellName = `${pick(adjective)} ${pick(property)}`;
} else if (roll == 7) {
    spellName = `${pick(form)} of ${pick(property)}`;
} else if (roll == 8) {
    spellName = `${pick(form)} of ${pick(adjective)} ${pick(property)}`;
} else if (roll == 9) {
    spellName = `${wizardName()}'s ${pick(adjective)} ${pick(form)}`;
} else if (roll == 10) {
    spellName = `${wizardName()}'s ${pick(adjective)} ${pick(property)}`;
} else if (roll == 11) {
    spellName = `${wizardName()}'s ${pick(form)} of ${pick(property)}`;
} else if (roll == 12) {
    spellName = `${wizardName()}'s ${pick(property)} ${pick(form)}`;
}

ChatMessage.create({
    content: `<h2>Spell Name</h2>
    ${spellName}
    `
});
