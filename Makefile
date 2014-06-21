install:
	@npm install
	@bower install

clean:
	@rm -rf build public

build: clean
	@gulp build

serve: build
	@gulp

publish:
	@gulp deploy

.PHONY: install clean build serve publish
