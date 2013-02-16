function JadeView() {
	this.template = require(__resourceQuery.substr(1) + "/template/" + this.name + ".jade");
}
module.exports = JadeView;