FROM golang:latest as builder
WORKDIR /build
COPY ./ ./
RUN go mod download
ENV HOMEPAGE_CMS_API_PORT :80
RUN CGO_ENABLED=0 go build -o ./main


FROM scratch
WORKDIR /app
ENV HOMEPAGE_CMS_API_PORT :80
COPY --from=builder /build/main ./main
EXPOSE 80 443
ENTRYPOINT ["./main"]