install: install-deps

run:
	bin/nodejs-package.js 10

install-deps:
	npm ci

bg:
	node bin/brain-games.js

publish:
	npm publish --dry-run

git:
	git push -u origin master

lint:
	npx eslint .