var JadeView = require("../JadeView?" + __dirname);

function SpecificView1() {
	this.name = "SpecificView1";
	JadeView.call(this);
}
module.exports = SpecificView1;

SpecificView1.prototype = Object.create(JadeView.prototype);