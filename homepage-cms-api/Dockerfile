FROM golang:latest as builder
WORKDIR /build
COPY ./ ./
ENV HOMEPAGE_MONGODB_URL mongodb+srv://mongouser:hJZEkMZqDV8d7KLCGCo3@mattmano0.hetoazz.mongodb.net/?retryWrites=true&w=majority
RUN go mod download
RUN CGO_ENABLED=0 go build -o ./main


FROM scratch
WORKDIR /app
COPY --from=builder /build/main ./main
ENV HOMEPAGE_MONGODB_URL mongodb+srv://mongouser:hJZEkMZqDV8d7KLCGCo3@mattmano0.hetoazz.mongodb.net/?retryWrites=true&w=majority
EXPOSE 9090
ENTRYPOINT ["./main"]