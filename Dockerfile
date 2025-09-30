# 使用官方 Node.js LTS 作為建置環境
FROM node:20-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build

# --- Runtime ---
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

# 複製必要檔案
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

EXPOSE 3000

CMD ["npm", "start"]
