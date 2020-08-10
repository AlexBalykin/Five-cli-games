install: npm install

bg:
	node bin/brain-games.js

publish:
	npm publish --dry-run

git:
	git push -u origin master

lint:
	npx eslint .