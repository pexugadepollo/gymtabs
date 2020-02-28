FROM node
WORKDIR /gymtablesClient

COPY ./package*.json ./
RUN npm install
COPY . .

CMD ["npm","start"]