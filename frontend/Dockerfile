FROM node:latest AS build
WORKDIR /react-docker
COPY package.json package-lock.json* /react-docker/
RUN npm install --force
COPY . .
RUN npm run build

FROM node:latest
WORKDIR /react-docker
RUN npm install -g serve
COPY --from=build /react-docker/dist /react-docker/dist
EXPOSE 3000
CMD ["serve", "-s", "dist", "-l", "3000"]
