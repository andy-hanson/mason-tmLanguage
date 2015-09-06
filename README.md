[Mason](http://mason-lang.org) syntax for [sublime text](https://sublimetext.com) and [textmate](https://macromates.com/).


# Install

## Sublime Text

	curl https://raw.githubusercontent.com/mason-lang/mason-tmLanguage/master/mason.tmLanguage > ~/.config/sublime-text-3/Packages/User/mason.tmLanguage


## TextMate

If you know how to use this with textmate, please tell me!


# Build it yourself

	npm install
	./generate.js
	# To install locally:
	cp mason.tmLanguage ~/.config/sublime-text-3/Packages/User/mason.tmLanguage
