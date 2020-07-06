FROM node:12.14.1

WORKDIR /src

COPY package.json .

RUN npm install --quiet
RUN npm install mongoose -g --quiet

COPY . .

EXPOSE 9000

CMD ["npm", "run", "dev"]