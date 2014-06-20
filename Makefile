.PHONY: venv
venv:
	virtualenv -p python2.7 `pwd`/.venv
	. .venv/bin/activate && pip install -r requirements.pip

install: venv
	@npm install

clean:
	@rm -rf build/**

build: clean
	@node build.js

serve: build
	@./node_modules/.bin/nodemon --watch build server.js

publish: build
	@ghp-import -p build

.PHONY: install clean build serve publish
