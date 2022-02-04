FROM python:3.9

WORKDIR /app
RUN apt update && apt install libpq-dev python3-dev xmlsec1 libxml2-dev libxmlsec1-dev libxmlsec1-openssl nodejs npm -y
RUN python -m pip install --upgrade pip

COPY . .
RUN npm install

EXPOSE 3000

# TODO: productionalize
CMD ["npm", "start"]