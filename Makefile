install:
	@npm install

clean:
	@rm -rf build/**

build: clean
	@gulp build

serve: build
	@gulp serve

publish: build
	@ghp-import -p build

.PHONY: install clean build serve publish
