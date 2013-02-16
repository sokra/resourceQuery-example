var JadeView = require("../JadeView?" + __dirname);

function SpecificView3() {
	this.name = "SpecificView3";
	JadeView.call(this);
}
module.exports = SpecificView3;

SpecificView1.prototype = Object.create(JadeView.prototype);