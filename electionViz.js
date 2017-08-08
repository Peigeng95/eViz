

/*
 * Election visualization.
 * CS349 Fall 2015  Assignment 4
 */ 

$(function() {
	console.log("Execution begins in electionViz.js");
	var model = electionViz.model();
	model.addObserver(function() {
		console.log("I'm observing the model!");
	});
	$("body").append("<h1>Electoral System Visualization</h1>");
	$("h1").fadeOut(3000);
});
