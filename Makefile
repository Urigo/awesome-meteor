install:
	@npm install

clean:
	@rm -rf build/**

build: clean
	@node build.js

serve: build
	@./node_modules/.bin/nodemon --watch build server.js

.PHONY: install clean build serve
