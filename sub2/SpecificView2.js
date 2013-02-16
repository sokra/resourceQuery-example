var JadeView = require("../JadeView?" + __dirname);

function SpecificView2() {
	this.name = "SpecificView2";
	JadeView.call(this);
}
module.exports = SpecificView2;

SpecificView1.prototype = Object.create(JadeView.prototype);