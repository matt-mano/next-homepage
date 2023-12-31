package main

import (
	"context"
	"homepagecms/data"
	"homepagecms/handlers"
	"log"
	"net/http"
	"os"
	"os/signal"
	"time"
)

func main() {
	//Create logger
	l := log.New(os.Stdout, "homepage api: ", log.LstdFlags)

	//Connect to database
	db, err := data.NewMongoClient()
	if err != nil {
		panic(err)
	}

	//Create logger and router
	eh := handlers.NewExperiences(l, db)
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
		if err = db.Disconnect(context.TODO()); err != nil {
			l.Fatal(err)
		}
	}()

	//Wait for interrupt
	sigChannel := make(chan os.Signal)
	signal.Notify(sigChannel, os.Interrupt)
	signal.Notify(sigChannel, os.Kill)
	sig := <-sigChannel
	l.Println("Shutdown starting... recieved", sig)
	tc, _ := context.WithTimeout(context.Background(), 30*time.Second)
	server.Shutdown(tc)
}
