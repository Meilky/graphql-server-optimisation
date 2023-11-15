# ---- Base
FROM denoland/deno:latest as base 

WORKDIR /usr/app/

COPY ./src ./src
COPY ./deno.json .
COPY ./deno.lock .

RUN deno cache src/index.ts

# ---- Prod
FROM base as prod

CMD deno task start 

# ---- Dev
FROM base as dev

CMD deno task watch 
