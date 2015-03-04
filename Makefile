test: node_modules
	@node bin/test

node_modules:
	@npm install --dev

.PHONY: test