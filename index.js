var sct = require('sct');
var loaderUtils = require('loader-utils');

module.exports = function(content) {
	if (this.cacheable) {
		this.cacheable();
	}

	var query = loaderUtils.parseQuery(this.query);

	return 'module.exports = require(\'sct-runtime\').prepareTemplate(function(it, escape, include, helpers, each) { ' +
		sct.toFnBodyExpression(content, { collapseWhitespaces: query.collapseWhitespaces !== false }) + ' });';
};
