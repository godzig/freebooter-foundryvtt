// name: Cast Spell
// img: systems/pf2e/icons/spells/access-lore.webp

// Cast a spell. Assumes only one wizard in the party.

const actors = game.actors;
const wizard = actors.find(actor => actor.system.props.class === "MagicUser");

if (wizard) {
  let actorPower = wizard.system.props.magicuser_power_max;
  let remainingPower = actorPower;

  let spellTable = Object.values(wizard.system.props.spells_dynamic_table);
  const spellNames = spellTable
    .filter(spell => spell.spell_list_memorized)
    .map(spell => `<option value="${spell.spell_list_name}">${spell.spell_list_name}</option>`);

  const effectTexts = ["parlor trick", "minor (+1/1d6)", "moderate (+2/2d6)", "major (+3/4d6)", "", "spectacular (+4/6d6)", "", "", "", "legendary (+5/8d6)"];
  const rangeTexts = ["touch","close/reach/near","far","within sight","","out of sight","","","","transplanar",];
  const areaTexts = ["self/single target", "a few targets/small area", "group/medium area", "mob/hamlet/large area", "", "throng/village/huge area", "", "", "", "horde/town/vast area"];
  const durationTexts = ["instant","1","3","5","","7","","","","permanent"];

  const updateDialog = () => {
    dialogData.content = `
        <p>Available power: ${actorPower}</p>
        <table>
        <tr><div class="form-group">
          <td><label for="spellSelect">Spell: </label></td>
          <td><select name="spellSelect">
            ${spellNames}
          </select></td>
        </div></tr>
        <tr><div class="form-group">
          <td><label for="effectSelect">Effect: </label></td>
          <td><select name="effectSelect">
            <option value="0">0 - parlor trick</option>
            <option value="1">1 - minor (+1/1d6)</option>
            <option value="2">2 - moderate (+2/2d6)</option>
            <option value="3">3 - major (+3/4d6)</option>
            <option value="5">5 - spectacular (+4/6d6)</option>
            <option value="9">9 - legendary (+5/8d6)</option>
          </select></td>
        </div></tr>
        <tr><div class="form-group">
          <td><label for="rangeSelect">Range: </label></td>
          <td><select name="rangeSelect">
            <option value="0">0 - touch</option>
            <option value="1">1 - close/reach/near</option>
            <option value="2">2 - far</option>
            <option value="3">3 - within sight</option>
            <option value="5">5 - out of sight</option>
            <option value="9">9 - transplanar</option>
          </select></td>
        </div></tr>
        <tr><div class="form-group">
          <td><label for="areaSelect">Area of Effect: </label></td>
          <td><select name="areaSelect">
            <option value="0">0 - self/single target</option>
            <option value="1">1 - a few targets/small area</option>
            <option value="2">2 - group/medium area</option>
            <option value="3">3 - mob/hamlet/large area</option>
            <option value="5">5 - throng/village/huge area</option>
            <option value="9">9 - horde/town/vast area</option>
          </select></td>
        </div></tr>
        <tr><div class="form-group">
          <td><label for="durationSelect">Duration: </label></td>
          <td><select name="durationSelect">
            <option value="0">0 - instant</option>
            <option value="1">0 - 1</option>
            <option value="2">1 - 3</option>
            <option value="3">2 - 5</option>
            <option value="5">3 - 7</option>
            <option value="9">5 - permanent</option>
          </select></td>
        </div></tr></table>`;
    dialog.render(true);
  };

  const dialogData = {
    title: 'Cast Spell',
    content: '',
    buttons: {
      cast: {
        label: "Cast Spell",
        callback: async (html) => {
          selectedEffectValue = parseInt(html.find('[name="effectSelect"]').val(), 10);
          selectedRangeValue = parseInt(html.find('[name="rangeSelect"]').val(), 10);
          selectedAreaValue = parseInt(html.find('[name="areaSelect"]').val(), 10);
          selectedDurationValue = parseInt(html.find('[name="durationSelect"]').val(), 10);
          selectedSpellValue = html.find('[name="spellSelect"]').val();

          enchanter = [0, 0, 1, 2, 0, 3, 0, 0, 0, 5]
          selectedDurationCost = enchanter[selectedDurationValue];

          remainingPower = actorPower - selectedEffectValue - selectedRangeValue - selectedAreaValue - selectedDurationCost;
          ChatMessage.create({
              content: `<h2>${selectedSpellValue}</h2>
              Casting with ${actorPower} power.<br><br>
              -${selectedEffectValue} for <u>${effectTexts[selectedEffectValue]}</u> effect<br>
              -${selectedRangeValue} for <u>${rangeTexts[selectedRangeValue]}</u> range<br>
              -${selectedAreaValue} for <u>${areaTexts[selectedAreaValue]}</u> area of effect<br>
              -${selectedDurationCost} for <u>${durationTexts[selectedDurationValue]}</u> duration<br>
              <br>
              Remaining power provides a +${remainingPower} modifier.<br><br>
              [[/roll 2d6 +${remainingPower} #${selectedSpellValue}]]
              `
          });
        },
      }
    },
  };

  const dialog = new Dialog(dialogData, { width: 400 });
  updateDialog();
} else {
  ui.notifications.warn('Actor "Dinglewiz" not found.');
}

