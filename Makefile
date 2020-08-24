
install: install-deps

run:
	bin/nodejs-package.js 10

install-deps:
	npm ci

lint:
	npx eslint .

publish:
	npm publish

link:
	sudo npm link

git:
	git push -u origin master
