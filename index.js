var sct = require('sct');

module.exports = function(content) {
	if (this.cacheable) {
		this.cacheable();
	}

	return 'module.exports = require(\'sct-runtime\')' +
		'.prepareTemplate(function(it, escape, include, helpers, each) { ' + sct.toFnBodyExpression(content) + ' });';
};
