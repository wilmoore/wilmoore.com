.PHONY: all clean

all: clean out
	@cp src/* out/

out:
	@mkdir -p out

clean:
	@rm -rf out

session:
	@git add . ; git commit -am 'update' ; git push
