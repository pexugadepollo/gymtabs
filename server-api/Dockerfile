FROM node
WORKDIR /gymtablesAPI

COPY ./package*.json ./
RUN npm install
COPY . .

CMD ["npm","start"]
