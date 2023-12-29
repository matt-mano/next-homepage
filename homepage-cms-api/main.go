package main

import (
	"context"
	"homepagecms/handlers"
	"log"
	"net/http"
	"os"
	"os/signal"
	"time"
)

func main() {
	//Create logger and router
	l := log.New(os.Stdout, "homepage api: ", log.LstdFlags)
	eh := handlers.NewExperiences(l)
	r := handlers.NewRouter(l, eh)

	//Register routes
	sm := http.NewServeMux()
	sm.Handle("/", r)

	//Start the server
	server := &http.Server{
		Addr:         ":9090",
		Handler:      sm,
		IdleTimeout:  120 * time.Second,
		ReadTimeout:  1 * time.Second,
		WriteTimeout: 1 * time.Second,
	}

	go func() {
		l.Printf("Server running on %s", server.Addr)
		err := server.ListenAndServe()
		if err != nil {
			l.Fatal(err)
		}
	}()

	sigChannel := make(chan os.Signal)
	signal.Notify(sigChannel, os.Interrupt)
	signal.Notify(sigChannel, os.Kill)
	sig := <-sigChannel
	l.Println("Shut er down! ", sig)
	tc, _ := context.WithTimeout(context.Background(), 30*time.Second)
	server.Shutdown(tc)
}
