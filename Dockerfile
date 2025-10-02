# 使用官方 Node.js LTS 作為建置環境
FROM node:20-alpine AS builder

WORKDIR /app

# 安裝必要的 build tools（某些 npm 套件需要）
RUN apk add --no-cache python3 make g++

# 複製 package files
COPY package.json package-lock.json* ./

# 安裝依賴（使用 ci 更穩定）
RUN npm ci --omit=dev --ignore-scripts || npm install --omit=dev

# 複製所有檔案
COPY . .

# Build
RUN npm run build

# --- Runtime ---
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

# 只複製 production 需要的檔案
COPY --from=builder /app/package.json ./
COPY --from=builder /app/package-lock.json* ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.* ./

EXPOSE 3000

CMD ["npm", "start"]
