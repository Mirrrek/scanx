FROM node:lts-alpine3.23 AS base

WORKDIR /app

FROM base AS deps

COPY ./package*.json ./

RUN --mount=type=cache,target=/root/.npm,sharing=locked \
    npm ci --no-audit --no-fund

FROM base AS builder

ARG BACKEND_URL
ENV BACKEND_URL $BACKEND_URL

COPY --from=deps /app/node_modules ./node_modules
COPY ./ ./

RUN npm run build

FROM base AS prod

ENV NODE_ENV=production
ENV HOSTNAME="0.0.0.0"

RUN addgroup -g 5001 -S nodejs && \
    adduser -u 5001 -S -D -H -G nodejs nodejs

RUN mkdir .next && chown nodejs:nodejs .next

COPY --from=builder --chown=nodejs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nodejs:nodejs /app/.next/static* ./.next/static
COPY --from=builder --chown=nodejs:nodejs /app/public* ./public

USER nodejs

HEALTHCHECK --interval=5m --timeout=5s --retries=3 \
    CMD wget --no-verbose --tries=1 --spider http://127.0.0.1:3000 || exit 1

CMD ["node", "server.js"]
