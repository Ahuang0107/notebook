mkdir repo
cd repo
git clone https://github.com/juj/emsdk.git
cd emsdk
./emsdk install latest
./emsdk activate latest
source ./emsdk_env.sh
cd ../
mkdir hello
cd hello
echo '#include <stdio.h>' > hello.c
echo 'int main(int argc, char ** argv) {' >> hello.c
echo 'printf("Hello, world!\n");' >> hello.c
echo '}' >> hello.c
emcc hello.c -s WASM=1 -o hello.html
emrun --no_browser --port 8080 .