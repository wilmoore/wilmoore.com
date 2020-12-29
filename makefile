.PHONY: all

all: out
	@cp src/* out/

out:
	@mkdir -p out

clean:
	@rm -rf out