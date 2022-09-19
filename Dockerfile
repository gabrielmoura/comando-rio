FROM node:16-alpine AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i; \
  else echo "Lockfile not found." && exit 1; \
  fi


FROM node:16-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN yarn build

FROM node:16-alpine AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 comando
RUN adduser --system --uid 1001 comando
COPY --from=builder /app/src ./src
COPY --from=builder /app/package.json ./package.json

USER comando

ENV USERNAME planejamento
ENV PASSWORD planejamentocor
ENV APP_NAME operacoesrio
ENV DB_HOST geriadv1.cdzvlzuih0ch.us-east-1.rds.amazonaws.com
ENV DB_NAME comando
ENV DB_USER leopires
ENV DB_PASS bfe9n208W4EC


CMD ["npm", "run","prod"]