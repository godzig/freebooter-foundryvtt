// name: Book Title
// img: systems/pf2e/icons/features/feats/spin-tale.webp

// Generates a booktitle based on Freebooters rules

type = ["a Theory of ","an Outline of ","the Ethics Implied by ","a Definition of ","the Remarkable Truth about ","the Shocking Findings on ","Conclusive Evidence for ","the Unspeakable Secrets of ","an Explanation of ","the Underlying Models of ","the Essentials of ","the Prerequisites for ","the Painful Consequences of ","Selections from ","a Gift to Those Who Contemplate ","Conservative Interpretations of ","the Life Changing Impact of ","the Disturbing Implications of ","a Radical Examination of ","the Traditional Wisdom of ","the Ancient Secrets of ","the Cutting Edge of ","a Groundbreaking Study in ","the Best of ","an Inquiry into the Causes of ","the Collected Works of ","the Ridiculous Follies of ","the Dark Implications of ","the Accepted Truth about ","the Terrible Fate of ","a Practical Approach to ","the Collected Poetry on ","the Local Wisdom Regarding ","the Folklore Regarding ","the Evidence of ","Stories about ","Poems on ","the Poetry of ","Verses on ","a Formula for ","a Model for ","an Experiment in ","a Tale of ","the Mysteries of ","the Ritual of ","a Primer on ","the Scandal of ","a Game of "];
topic = ["History ","Dwarves ","Undeath ","Magic ","Runes ","Demons ","Business ","Engineering ","Botany ","Anatomy ","Monsters ","Factions ","Witchcraft ","Empire ","Statecraft ","Diplomacy ","Manners ","the Planes ","Summoning ","Legends ","Physical Fitness ","Warfare ","Prophecy ","Ethnography ","Games ","Philosophy ","Unity ","Discord ","Nature ","Art ","Law ","Architecture ","Fortresses ","Language ","Biography (relevant name) ","Fiction ","Cooking ","Plants ","Herbology ","Animal Husbandry ","Alchemy ","(Local Region)","Beasts ","Fauna ","Flora ","Ecology ","Life ","Death ","Crafts ","Stone ","Wood ","Nobility ","Arms ","Romance ","Dungeons ","Traps ","High Society ","Healing ","Guilds ","Kingdoms ","Architecture ","Watercraft ","Sea ","Fortifications ","Armor ","Domestic Relations ","Agriculture ","Hospitality ","Vows ","Vengeance ","Crime ","Festivals ","Stewardship ","Regents ","Metal ","Cloth ","Fashion ","Good Taste ","Injury ","Industry ","Occult Mysteries ","the Arcane ","Reagents ","Spirits ","Sorcery ","Hedge Magic ","Divinity ","Shadow ","Planes ","Elves ","Humans ","Halflings ","Goblins ","Fae ","Animalkind ","Chaos ","Religion ","Ritual ","Rites ","Forests ","Mountains ","Deserts ","Plains ","Lowlands","Highlands","Wastelands ","Dragons ","Rivers ","Roads ","Paths ","Tracks ","Punishment ","Divination ","Conjuration ","Abjuration ","Transmutation ","Illusions ","Enchantment ","Necromancy ","Disease ","the Unknowable ","Forbidden Knowledge ","Riddles ","Torture ","Spycraft ","Subterfug ","Sabotage ","Murder ","Seigecraft ","Fall ","Seasons ","Summer ","Autumn ","Spring ","Winter ","Harvest ","Festival "];
subtitle = [": A Modern Deconstruction ",": A Refutation ",": A Shocking Revelation ",": Threat or Menace? ",": A Critical Examination ",": Memoirs of a Witness ",": The Authoritative Stance ",": The Definitive Reference ",": The Journal of [NPCName] ",": A Deconstruction",": Path to the Truth ",": What You've Been Missing ",": The Essential Primer ",": Over {10-400} Copies Made ",": Aligning Perspectives ",": A Paradigm Shift ",": The Shocking Truth ",": What You Must Know ",": An Illustrated Guide for Children ",": Expanded","Revised",": Annotated",": A Surprising Conclusion ",": What They Don't Want You to Know ",": A Practical Guide ",": A How-To Guide ",": The Unauthorized Tell-All ",": An Expert's Opinion ",": A Novel ",": The Surprisingly Alluring Truth ",": A Revelation ",": A Summary",": Abridged",": A Modern Translation",": A Rebuttal",": A Cookbook",": A History",": Illuminated Edition",": A Play in Three Acts",": An Introduction",": A Primer",": For the Aspiring Novice",": In Verse",": The Lost Pages",": Recovered",": A Romance",": A Comedy",": A Tragedy",": Illustrated",": With Sheet Music",": A Fable",": In Rhyme"];
preposition = ["Toward ","On ","About ","Regarding ","Concerning ","Within ","Preceding ","Unto ","After ","Upon ","Without ","In Defense of ","Against ","Describing ","Navigating ","Bumbling through ", "Meandering through ", "Strolling through ", "Interpreting ","Reimagining ","Debating ","From ","To ","An Attack on ","Discovering ","Uncovering ","Recovering ","Covering ","Touching on ","Summarizing ","Collecting ","Revealing ","Setting aside ","Embracing ","Re-evaluating ","Recording ","Capturing ","Being ","Examining ","Re-examining ","Rediscovering ","Refuting "];

pick = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
}

let bookName = ''; 
if (Math.random() <= 0.5) { bookName += pick(preposition); }
if (Math.random() <= 0.5) { bookName += pick(type); }

option = Math.random()
if (option <= 0.333) {
    bookName += pick(topic);
} else if (option <= 0.666) {
    bookName += `${pick(topic)}& ${pick(topic)}`;
} else {
    bookName += `${pick(topic)}of ${pick(topic)}`;
}

if (Math.random() <= 0.25) { bookName += pick(subtitle); }

bookName = bookName.substring(0,1).toUpperCase() + bookName.substring(1);

ChatMessage.create({
    content: `<h2>Book Title</h2>
    ${bookName}`
});