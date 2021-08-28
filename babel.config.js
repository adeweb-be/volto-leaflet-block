const defaultBabel = require('@plone/volto/babel');

function applyDefault(api) {
  return defaultBabel(api);
}

module.exports = applyDefault;
