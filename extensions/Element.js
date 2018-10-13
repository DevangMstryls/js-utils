Element.prototype.addClasses = function(classes) {
	const classesArr = classes.split(' ');
	classesArr.map((classToAdd) => {
		this.classList.add(classToAdd);
	});
};

Element.prototype.removeClasses = function(classes) {
	const classesArr = classes.split(' ');
	classesArr.map((classToAdd) => {
		this.classList.remove(classToAdd);
	});
};
