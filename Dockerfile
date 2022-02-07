FROM python:3.8

WORKDIR /app
COPY package.json /app/
COPY package-lock.json /app/
RUN apt update && apt install npm -y
RUN npm install

COPY ./public /app/public
COPY ./src /app/src

EXPOSE 3000

# TODO: productionalize
CMD ["npm", "start"]