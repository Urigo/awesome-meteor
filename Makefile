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
	@BASE_URL='/awesome-meteor/' gulp deploy

.PHONY: install clean build serve publish
