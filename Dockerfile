FROM madnificent/ember:3.27.0 as builder

LABEL maintainer="info@redpencil.io"

WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN DEPLOY_ENV=production ember build -prod

FROM semtech/static-file-service:0.1.0

COPY --from=builder /app/dist /data
