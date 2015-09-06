#! /usr/bin/env node
'use strict'

const fs = require('fs'), plist = require('plist'), request = require('request')

function handle(err, body) {
	if (err)
		throw err

	const data = JSON.parse(body)
	const out = plist.build(data)
	fs.writeFileSync('mason.tmLanguage', out)
}

const local = true
if (local)
	fs.readFile('../mason-atom/grammars/mason.json', 'utf-8', handle)
else {
	const url = 'https://raw.githubusercontent.com/mason-lang/mason-atom/master/grammars/mason.json'
	request(url, (err, res, body) => handle(err, body))
}
