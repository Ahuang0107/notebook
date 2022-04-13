FROM wasmedge/wasmedge

RUN rm /bin/sh && ln -s /bin/bash /bin/sh

RUN mkdir repo \
    && cd repo \
    && git clone https://github.com/juj/emsdk.git \
    && cd emsdk \
    && ./emsdk install latest \
    && ./emsdk activate latest \

EXPOSE 8080