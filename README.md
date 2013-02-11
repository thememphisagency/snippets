# Snippets [![Build Status](https://travis-ci.org/thememphisagency/snippets.png?branch=master)](https://travis-ci.org/thememphisagency/snippets)

Sublime Text snippet library used by The Memphis Agency.

## Prefixes for triggers

A cheat sheet for the various groups, and the prefix for triggers in these groups.

* coldfusion : cf
* css : css
* farcry : fc
	* api : fcapi
	* testmxunit : fct
* html : html
* javascript : js
	* jquery : jq


## Tests

Before you commit any snippets to the respository, make sure you run your updates against the test suite. To do so (with Node.js installed):

- install the dev depenencies with `npm install`
- run the tests with `make` or `mocha --reporter spec`

If the tests pass, commit!