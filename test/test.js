"use strict";

var should = require('should');
var exec = require('child_process').exec;
var fs = require('fs');
var xml2js = require('xml2js');
var parser = new xml2js.Parser();
var findit = require('findit');
var path = require('path');

// define snippet directories to work in
var snippetTypes = ['coldfusion', 'css', 'farcry', 'html', 'javascript'];
var files = [];
var snippet;

describe("All snippets should confirm to our standard", function () {

	// loop through the snippet directories
	snippetTypes.forEach(function (dir) {

		// grab all of the files (and only .sublime-snippet files), not directories
		files = findit.sync(path.normalize(__dirname + '/../' + dir)).filter(function (element, index, array) {
			return path.extname(element) === '.sublime-snippet';
		});

		// for each actual snippet
		files.forEach(function (file) {

			var filename = path.basename(file);
			var snippetType = path.dirname(file).split(path.sep).pop();

			// run the test!
			describe("including the " + snippetType + " snippet " + filename, function () {

				beforeEach(function (done) {

					fs.readFile(file, function (err, data) {

						parser.parseString(data, function (err, result) {

							snippet = result;
							done();

						});

					});

				});

				it("should have a snippet tag", function () {
					snippet.should.have.property('snippet');
				});

				it("snippet should have a content tag", function () {
					snippet.snippet.should.have.property('content');
				});

				it("snippet should have a tabTrigger tag", function () {
					snippet.snippet.should.have.property('tabTrigger');
				});

				it("snippet should have a description tag", function () {
					snippet.snippet.should.have.property('description');
				});

			});

		});

	});

});