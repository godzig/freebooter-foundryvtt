// name: Resolve Spell
// img: systems/pf2e/icons/spells/comprehend-language.webp

// Looks at the last spell cast with the cast spell macro to elaborate outcomes

const messages = Array.from(game.messages);
const lastMessage = messages[messages.length - 1]
const flavor = lastMessage.flavor;
const result = lastMessage.content;

let msg;
let options = [
            `<b>Incursion!</b> Mark Intelligence. ${flavor} fails, you forget it, and some troublesome or dangerous arcane force is released into this world. Left unchecked, it will worsen.`,
            `<b>Disaster!</b> Mark Intelligence. ${flavor} fails and you forget it, but someone or something nearby (which might be you or an ally) suffers a permanent affliction or alteration of the Judge's choosing, in proportion to the spell's intended effect.`,
            `<b>Disruption!</b> Mark Intelligence. ${flavor} fails and you forget it, but arcane forces temporarily warp reality for the worse, in proportion to the spell's intended effect.`,
            `<b>Misfire!</b> Mark Intelligence. ${flavor} works, but affects a different target.`,
            `<b>Perplexity!</b> ${flavor} works as intended, but you burn [[1d4]] Intelligence.`,
            `<b>Vacuity!</b> ${flavor} works as intended, but you forget it and may not cast it again until you re-memorize it.`,
            `<b>Disturbance!</b> ${flavor} works as intended, but its casting draws unwanted attention.`,
            `<b>Success!</b> ${flavor} works as intended`,
            `<b>Success!</b> ${flavor} works as intended`,
            ];

if (result >= 10) {
    msg = 7;
} else if (result == 9) {
    msg = 6;
} else if (result == 8) {
    msg = 5;
} else if (result == 7) {
    msg = 4;
} else if (result == 6) {
    msg = 3;
} else if (result == 5) {
    msg = 2;
} else if (result == 4) {
    msg = 1;
} else if (result <= 3) {
    msg = 0;
}


if (flavor && result) {
    ChatMessage.create({
        content: `<h2>${flavor} Outcome</h2>
                              With a roll of ${result}...<br><br>
                              ${options[msg]}<br><br>
                              If you burn one luck:<br><br>
                              ${options[msg + 1]}
                             `
    });
}