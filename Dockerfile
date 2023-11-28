FROM node:18 as builder

LABEL maintainer="info@redpencil.io"

WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build

FROM semtech/static-file-service:0.2.0

COPY --from=builder /app/dist /data
