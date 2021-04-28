FROM node:14-buster-slim as builder
WORKDIR /app

COPY . .

RUN yarn install --frozen-lockfile
RUN yarn build

FROM node:14-alpine as runner
RUN apk add --no-cache libc6-compat
RUN npm install --quiet node-gyp -g
WORKDIR /app

COPY --from=builder /app ./

CMD ["yarn", "start"]