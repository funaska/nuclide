

/*
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */

/*
 * adapted from https://github.com/atom/underscore-plus/blob/master/src/underscore-plus.coffee
 */

var _require = require('../../commons');

var array = _require.array;

var MAC_MODIFIER_KEYMAP = {
  alt: '⌥',
  cmd: '⌘',
  ctrl: '⌃',
  down: '↓',
  enter: '⏎',
  left: '←',
  option: '⌥',
  right: '→',
  shift: '⇧',
  up: '↑'
};

var NON_MAC_MODIFIER_KEYMAP = {
  alt: 'Alt',
  cmd: 'Cmd',
  ctrl: 'Ctrl',
  down: 'Down',
  enter: 'Enter',
  left: 'Left',
  option: 'Alt',
  right: 'Right',
  shift: 'Shift',
  up: 'Up'
};

// Human key combos should always explicitly state the shift key. This map is a disambiguator.
// 'shift-version': 'no-shift-version'
var SHIFT_KEYMAP = {
  '_': '-',
  ':': ';',
  '?': '/',
  '"': '\'',
  '{': '[',
  '}': ']',
  '+': '=',
  '<': ',',
  '>': '.',
  '|': '\\',
  '~': '`'
};

var FN_KEY_RE = /f[0-9]{1,2}/;

// $FlowIssue
function flatten(arr) {
  var flattened = [];
  for (var el of arr) {
    if (Array.isArray(el)) {
      flattened = flattened.concat(flatten(el));
    } else {
      flattened.push(el);
    }
  }
  return flattened;
}

function capitalize(word) {
  var first = word[0] || '';
  var rest = word.slice(1);
  return first.toUpperCase() + rest;
}

function humanizeKey(key, platform) {
  if (!key) {
    return key;
  }
  var modifierKeyMap = platform === 'darwin' ? MAC_MODIFIER_KEYMAP : NON_MAC_MODIFIER_KEYMAP;
  if (modifierKeyMap[key]) {
    return modifierKeyMap[key];
  }
  if (key.length === 1) {
    if (SHIFT_KEYMAP[key]) {
      return [modifierKeyMap.shift, SHIFT_KEYMAP[key]];
    }
    var uppercase = key.toUpperCase();
    if (key === uppercase && uppercase !== key.toLowerCase()) {
      return [modifierKeyMap.shift, uppercase];
    }
    return uppercase;
  }
  if (FN_KEY_RE.test(key)) {
    return key.toUpperCase();
  }
  return platform === 'darwin' ? key : capitalize(key);
}

/**
 * Humanize the keystroke according to platform conventions. This method
 * attempts to mirror the text the given keystroke would have if displayed in
 * a system menu.
 *
 * @param keystroke A String keystroke to humanize such as `ctrl-O`.
 * @param platform An optional String platform to humanize for (default: `process.platform`).
 * @return a humanized representation of the keystroke.
 */
function humanizeKeystroke(keystroke, platform) {
  if (!keystroke) {
    return keystroke;
  }
  platform = platform || process.platform;
  var separator = platform === 'darwin' ? '' : '+';
  var key = undefined,
      keys = undefined,
      splitKeystroke = undefined;
  var keystrokes = keystroke.split(' ');
  var humanizedKeystrokes = [];
  for (var i = 0; i < keystrokes.length; i++) {
    var currentKeystroke = keystrokes[i];
    splitKeystroke = currentKeystroke.split('-');
    keys = [];
    for (var index = 0; index < splitKeystroke.length; index++) {
      key = splitKeystroke[index];
      if (key === '' && splitKeystroke[index - 1] === '') {
        key = '-';
      }
      if (key) {
        keys.push(humanizeKey(key, platform));
      }
    }
    keys = array.from(new Set(flatten(keys)));
    humanizedKeystrokes.push(keys.join(separator));
  }
  return humanizedKeystrokes.join(' ');
}

module.exports = {
  humanizeKeystroke: humanizeKeystroke
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImtleXN0cm9rZUxhYmVsSGVscGVycy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztlQWVnQixPQUFPLENBQUMsZUFBZSxDQUFDOztJQUFqQyxLQUFLLFlBQUwsS0FBSzs7QUFFWixJQUFNLG1CQUFtQixHQUFHO0FBQzFCLEtBQUcsRUFBRSxHQUFRO0FBQ2IsS0FBRyxFQUFFLEdBQVE7QUFDYixNQUFJLEVBQUUsR0FBUTtBQUNkLE1BQUksRUFBRSxHQUFRO0FBQ2QsT0FBSyxFQUFFLEdBQVE7QUFDZixNQUFJLEVBQUUsR0FBUTtBQUNkLFFBQU0sRUFBRSxHQUFRO0FBQ2hCLE9BQUssRUFBRSxHQUFRO0FBQ2YsT0FBSyxFQUFFLEdBQVE7QUFDZixJQUFFLEVBQUUsR0FBUTtDQUNiLENBQUM7O0FBRUYsSUFBTSx1QkFBdUIsR0FBRztBQUM5QixLQUFHLEVBQUUsS0FBSztBQUNWLEtBQUcsRUFBRSxLQUFLO0FBQ1YsTUFBSSxFQUFFLE1BQU07QUFDWixNQUFJLEVBQUUsTUFBTTtBQUNaLE9BQUssRUFBRSxPQUFPO0FBQ2QsTUFBSSxFQUFFLE1BQU07QUFDWixRQUFNLEVBQUUsS0FBSztBQUNiLE9BQUssRUFBRSxPQUFPO0FBQ2QsT0FBSyxFQUFFLE9BQU87QUFDZCxJQUFFLEVBQUUsSUFBSTtDQUNULENBQUM7Ozs7QUFJRixJQUFNLFlBQVksR0FBRztBQUNuQixLQUFHLEVBQUUsR0FBRztBQUNSLEtBQUcsRUFBRSxHQUFHO0FBQ1IsS0FBRyxFQUFFLEdBQUc7QUFDUixLQUFHLEVBQUUsSUFBSTtBQUNULEtBQUcsRUFBRSxHQUFHO0FBQ1IsS0FBRyxFQUFFLEdBQUc7QUFDUixLQUFHLEVBQUUsR0FBRztBQUNSLEtBQUcsRUFBRSxHQUFHO0FBQ1IsS0FBRyxFQUFFLEdBQUc7QUFDUixLQUFHLEVBQUUsSUFBSTtBQUNULEtBQUcsRUFBRSxHQUFHO0NBQ1QsQ0FBQzs7QUFFRixJQUFNLFNBQVMsR0FBRyxhQUFhLENBQUM7OztBQUdoQyxTQUFTLE9BQU8sQ0FBSSxHQUF3QixFQUFZO0FBQ3RELE1BQUksU0FBUyxHQUFHLEVBQUUsQ0FBQztBQUNuQixPQUFLLElBQU0sRUFBRSxJQUFJLEdBQUcsRUFBRTtBQUNwQixRQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDckIsZUFBUyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDM0MsTUFBTTtBQUNMLGVBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7S0FDcEI7R0FDRjtBQUNELFNBQU8sU0FBUyxDQUFDO0NBQ2xCOztBQUVELFNBQVMsVUFBVSxDQUFDLElBQVksRUFBVTtBQUN4QyxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0FBQzVCLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDM0IsU0FBTyxLQUFLLENBQUMsV0FBVyxFQUFFLEdBQUcsSUFBSSxDQUFDO0NBQ25DOztBQUVELFNBQVMsV0FBVyxDQUFDLEdBQVcsRUFBRSxRQUFpQixFQUEwQjtBQUMzRSxNQUFJLENBQUMsR0FBRyxFQUFFO0FBQ1IsV0FBTyxHQUFHLENBQUM7R0FDWjtBQUNELE1BQU0sY0FBYyxHQUFHLFFBQVEsS0FBSyxRQUFRLEdBQUcsbUJBQW1CLEdBQUcsdUJBQXVCLENBQUM7QUFDN0YsTUFBSSxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7QUFDdkIsV0FBTyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUM7R0FDNUI7QUFDRCxNQUFJLEdBQUcsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO0FBQ3BCLFFBQUksWUFBWSxDQUFDLEdBQUcsQ0FBQyxFQUFFO0FBQ3JCLGFBQU8sQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0tBQ2xEO0FBQ0QsUUFBTSxTQUFTLEdBQUcsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBQ3BDLFFBQUksR0FBRyxLQUFLLFNBQVMsSUFBSSxTQUFTLEtBQUssR0FBRyxDQUFDLFdBQVcsRUFBRSxFQUFFO0FBQ3hELGFBQU8sQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0tBQzFDO0FBQ0QsV0FBTyxTQUFTLENBQUM7R0FDbEI7QUFDRCxNQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7QUFDdkIsV0FBTyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7R0FDMUI7QUFDRCxTQUFPLFFBQVEsS0FBSyxRQUFRLEdBQUcsR0FBRyxHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztDQUN0RDs7Ozs7Ozs7Ozs7QUFXRCxTQUFTLGlCQUFpQixDQUFDLFNBQWlCLEVBQUUsUUFBaUIsRUFBVTtBQUN2RSxNQUFJLENBQUMsU0FBUyxFQUFFO0FBQ2QsV0FBTyxTQUFTLENBQUM7R0FDbEI7QUFDRCxVQUFRLEdBQUcsUUFBUSxJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUM7QUFDeEMsTUFBTSxTQUFTLEdBQUcsUUFBUSxLQUFLLFFBQVEsR0FBRyxFQUFFLEdBQUcsR0FBRyxDQUFDO0FBQ25ELE1BQUksR0FBRyxZQUFBO01BQUUsSUFBSSxZQUFBO01BQUUsY0FBYyxZQUFBLENBQUM7QUFDOUIsTUFBTSxVQUFVLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN4QyxNQUFNLG1CQUFtQixHQUFHLEVBQUUsQ0FBQztBQUMvQixPQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUMxQyxRQUFNLGdCQUFnQixHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN2QyxrQkFBYyxHQUFHLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUM3QyxRQUFJLEdBQUcsRUFBRSxDQUFDO0FBQ1YsU0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLGNBQWMsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQUU7QUFDMUQsU0FBRyxHQUFHLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUM1QixVQUFJLEdBQUcsS0FBSyxFQUFFLElBQUksY0FBYyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7QUFDbEQsV0FBRyxHQUFHLEdBQUcsQ0FBQztPQUNYO0FBQ0QsVUFBSSxHQUFHLEVBQUU7QUFDUCxZQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztPQUN2QztLQUNGO0FBQ0QsUUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMxQyx1QkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0dBQ2hEO0FBQ0QsU0FBTyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Q0FDdEM7O0FBRUQsTUFBTSxDQUFDLE9BQU8sR0FBRztBQUNmLG1CQUFpQixFQUFqQixpQkFBaUI7Q0FDbEIsQ0FBQyIsImZpbGUiOiJrZXlzdHJva2VMYWJlbEhlbHBlcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGJhYmVsJztcbi8qIEBmbG93ICovXG5cbi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgbGljZW5zZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGluXG4gKiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4vKlxuICogYWRhcHRlZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9hdG9tL3VuZGVyc2NvcmUtcGx1cy9ibG9iL21hc3Rlci9zcmMvdW5kZXJzY29yZS1wbHVzLmNvZmZlZVxuICovXG5cbmNvbnN0IHthcnJheX0gPSByZXF1aXJlKCcuLi8uLi9jb21tb25zJyk7XG5cbmNvbnN0IE1BQ19NT0RJRklFUl9LRVlNQVAgPSB7XG4gIGFsdDogJ1xcdTIzMjUnLFxuICBjbWQ6ICdcXHUyMzE4JyxcbiAgY3RybDogJ1xcdTIzMDMnLFxuICBkb3duOiAnXFx1MjE5MycsXG4gIGVudGVyOiAnXFx1MjNjZScsXG4gIGxlZnQ6ICdcXHUyMTkwJyxcbiAgb3B0aW9uOiAnXFx1MjMyNScsXG4gIHJpZ2h0OiAnXFx1MjE5MicsXG4gIHNoaWZ0OiAnXFx1MjFlNycsXG4gIHVwOiAnXFx1MjE5MScsXG59O1xuXG5jb25zdCBOT05fTUFDX01PRElGSUVSX0tFWU1BUCA9IHtcbiAgYWx0OiAnQWx0JyxcbiAgY21kOiAnQ21kJyxcbiAgY3RybDogJ0N0cmwnLFxuICBkb3duOiAnRG93bicsXG4gIGVudGVyOiAnRW50ZXInLFxuICBsZWZ0OiAnTGVmdCcsXG4gIG9wdGlvbjogJ0FsdCcsXG4gIHJpZ2h0OiAnUmlnaHQnLFxuICBzaGlmdDogJ1NoaWZ0JyxcbiAgdXA6ICdVcCcsXG59O1xuXG4vLyBIdW1hbiBrZXkgY29tYm9zIHNob3VsZCBhbHdheXMgZXhwbGljaXRseSBzdGF0ZSB0aGUgc2hpZnQga2V5LiBUaGlzIG1hcCBpcyBhIGRpc2FtYmlndWF0b3IuXG4vLyAnc2hpZnQtdmVyc2lvbic6ICduby1zaGlmdC12ZXJzaW9uJ1xuY29uc3QgU0hJRlRfS0VZTUFQID0ge1xuICAnXyc6ICctJyxcbiAgJzonOiAnOycsXG4gICc/JzogJy8nLFxuICAnXCInOiAnXFwnJyxcbiAgJ3snOiAnWycsXG4gICd9JzogJ10nLFxuICAnKyc6ICc9JyxcbiAgJzwnOiAnLCcsXG4gICc+JzogJy4nLFxuICAnfCc6ICdcXFxcJyxcbiAgJ34nOiAnYCcsXG59O1xuXG5jb25zdCBGTl9LRVlfUkUgPSAvZlswLTldezEsMn0vO1xuXG4vLyAkRmxvd0lzc3VlXG5mdW5jdGlvbiBmbGF0dGVuPFQ+KGFycjogQXJyYXk8VCB8IEFycmF5PFQ+Pik6IEFycmF5PFQ+IHtcbiAgbGV0IGZsYXR0ZW5lZCA9IFtdO1xuICBmb3IgKGNvbnN0IGVsIG9mIGFycikge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGVsKSkge1xuICAgICAgZmxhdHRlbmVkID0gZmxhdHRlbmVkLmNvbmNhdChmbGF0dGVuKGVsKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZsYXR0ZW5lZC5wdXNoKGVsKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZsYXR0ZW5lZDtcbn1cblxuZnVuY3Rpb24gY2FwaXRhbGl6ZSh3b3JkOiBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCBmaXJzdCA9IHdvcmRbMF0gfHwgJyc7XG4gIGNvbnN0IHJlc3QgPSB3b3JkLnNsaWNlKDEpO1xuICByZXR1cm4gZmlyc3QudG9VcHBlckNhc2UoKSArIHJlc3Q7XG59XG5cbmZ1bmN0aW9uIGh1bWFuaXplS2V5KGtleTogc3RyaW5nLCBwbGF0Zm9ybTogP3N0cmluZyk6IHN0cmluZyB8IEFycmF5PHN0cmluZz4ge1xuICBpZiAoIWtleSkge1xuICAgIHJldHVybiBrZXk7XG4gIH1cbiAgY29uc3QgbW9kaWZpZXJLZXlNYXAgPSBwbGF0Zm9ybSA9PT0gJ2RhcndpbicgPyBNQUNfTU9ESUZJRVJfS0VZTUFQIDogTk9OX01BQ19NT0RJRklFUl9LRVlNQVA7XG4gIGlmIChtb2RpZmllcktleU1hcFtrZXldKSB7XG4gICAgcmV0dXJuIG1vZGlmaWVyS2V5TWFwW2tleV07XG4gIH1cbiAgaWYgKGtleS5sZW5ndGggPT09IDEpIHtcbiAgICBpZiAoU0hJRlRfS0VZTUFQW2tleV0pIHtcbiAgICAgIHJldHVybiBbbW9kaWZpZXJLZXlNYXAuc2hpZnQsIFNISUZUX0tFWU1BUFtrZXldXTtcbiAgICB9XG4gICAgY29uc3QgdXBwZXJjYXNlID0ga2V5LnRvVXBwZXJDYXNlKCk7XG4gICAgaWYgKGtleSA9PT0gdXBwZXJjYXNlICYmIHVwcGVyY2FzZSAhPT0ga2V5LnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgIHJldHVybiBbbW9kaWZpZXJLZXlNYXAuc2hpZnQsIHVwcGVyY2FzZV07XG4gICAgfVxuICAgIHJldHVybiB1cHBlcmNhc2U7XG4gIH1cbiAgaWYgKEZOX0tFWV9SRS50ZXN0KGtleSkpIHtcbiAgICByZXR1cm4ga2V5LnRvVXBwZXJDYXNlKCk7XG4gIH1cbiAgcmV0dXJuIHBsYXRmb3JtID09PSAnZGFyd2luJyA/IGtleSA6IGNhcGl0YWxpemUoa2V5KTtcbn1cblxuLyoqXG4gKiBIdW1hbml6ZSB0aGUga2V5c3Ryb2tlIGFjY29yZGluZyB0byBwbGF0Zm9ybSBjb252ZW50aW9ucy4gVGhpcyBtZXRob2RcbiAqIGF0dGVtcHRzIHRvIG1pcnJvciB0aGUgdGV4dCB0aGUgZ2l2ZW4ga2V5c3Ryb2tlIHdvdWxkIGhhdmUgaWYgZGlzcGxheWVkIGluXG4gKiBhIHN5c3RlbSBtZW51LlxuICpcbiAqIEBwYXJhbSBrZXlzdHJva2UgQSBTdHJpbmcga2V5c3Ryb2tlIHRvIGh1bWFuaXplIHN1Y2ggYXMgYGN0cmwtT2AuXG4gKiBAcGFyYW0gcGxhdGZvcm0gQW4gb3B0aW9uYWwgU3RyaW5nIHBsYXRmb3JtIHRvIGh1bWFuaXplIGZvciAoZGVmYXVsdDogYHByb2Nlc3MucGxhdGZvcm1gKS5cbiAqIEByZXR1cm4gYSBodW1hbml6ZWQgcmVwcmVzZW50YXRpb24gb2YgdGhlIGtleXN0cm9rZS5cbiAqL1xuZnVuY3Rpb24gaHVtYW5pemVLZXlzdHJva2Uoa2V5c3Ryb2tlOiBzdHJpbmcsIHBsYXRmb3JtOiA/c3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKCFrZXlzdHJva2UpIHtcbiAgICByZXR1cm4ga2V5c3Ryb2tlO1xuICB9XG4gIHBsYXRmb3JtID0gcGxhdGZvcm0gfHwgcHJvY2Vzcy5wbGF0Zm9ybTtcbiAgY29uc3Qgc2VwYXJhdG9yID0gcGxhdGZvcm0gPT09ICdkYXJ3aW4nID8gJycgOiAnKyc7XG4gIGxldCBrZXksIGtleXMsIHNwbGl0S2V5c3Ryb2tlO1xuICBjb25zdCBrZXlzdHJva2VzID0ga2V5c3Ryb2tlLnNwbGl0KCcgJyk7XG4gIGNvbnN0IGh1bWFuaXplZEtleXN0cm9rZXMgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzdHJva2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgY3VycmVudEtleXN0cm9rZSA9IGtleXN0cm9rZXNbaV07XG4gICAgc3BsaXRLZXlzdHJva2UgPSBjdXJyZW50S2V5c3Ryb2tlLnNwbGl0KCctJyk7XG4gICAga2V5cyA9IFtdO1xuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBzcGxpdEtleXN0cm9rZS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGtleSA9IHNwbGl0S2V5c3Ryb2tlW2luZGV4XTtcbiAgICAgIGlmIChrZXkgPT09ICcnICYmIHNwbGl0S2V5c3Ryb2tlW2luZGV4IC0gMV0gPT09ICcnKSB7XG4gICAgICAgIGtleSA9ICctJztcbiAgICAgIH1cbiAgICAgIGlmIChrZXkpIHtcbiAgICAgICAga2V5cy5wdXNoKGh1bWFuaXplS2V5KGtleSwgcGxhdGZvcm0pKTtcbiAgICAgIH1cbiAgICB9XG4gICAga2V5cyA9IGFycmF5LmZyb20obmV3IFNldChmbGF0dGVuKGtleXMpKSk7XG4gICAgaHVtYW5pemVkS2V5c3Ryb2tlcy5wdXNoKGtleXMuam9pbihzZXBhcmF0b3IpKTtcbiAgfVxuICByZXR1cm4gaHVtYW5pemVkS2V5c3Ryb2tlcy5qb2luKCcgJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBodW1hbml6ZUtleXN0cm9rZSxcbn07XG4iXX0=