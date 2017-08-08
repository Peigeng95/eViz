

// Establish a namespace
var electionViz = electionViz || {};

/*
 * Create a model object within the electionViz namespace.
 */
electionViz.model = function () {
	// Private instance variables
	var numCandidates = 0;
	var	candidatePositions = [];
	var observers = [];

	function addObserver(updateFunc) {
		observers.push(updateFunc);
		updateFunc();
	}


	console.log("Initializing the model.");
	// Return public functions
	return {
		addObserver: addObserver
	};

};