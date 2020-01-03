# 环境
FROM daocloud.io/library/node:7.9-wheezy
RUN mkdir -p /usr/src/nodejs/
# 工作目录
WORKDIR /usr/src/nodejs/
COPY package.json /usr/src/nodejs/package.json
RUN cd /usr/src/nodejs
RUN npm i 

COPY . /usr/src/nodejs/

EXPOSE 1314
CMD yarn start
