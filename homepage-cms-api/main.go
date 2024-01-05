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
	db, err := data.NewHomepageDatabase()
	if err != nil {
		panic(err)
	}

	//Create logger and router
	eh := handlers.NewExperiences(l, db)
	sh := handlers.NewSkills(l, db)
	ph := handlers.NewProjects(l, db)
	r := handlers.NewRouter(l, eh, sh, ph)

	//Register routes
	sm := http.NewServeMux()
	sm.Handle("/", r)

	//Start the server
	server := &http.Server{
		Addr:         os.Getenv("HOMEPAGE_CMS_API_PORT"),
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

	//Wait for interrupt
	sigChannel := make(chan os.Signal)
	signal.Notify(sigChannel, os.Interrupt)
	signal.Notify(sigChannel, os.Kill)
	sig := <-sigChannel
	l.Println("Shutdown starting... recieved", sig)
	tc, _ := context.WithTimeout(context.Background(), 30*time.Second)
	if err = db.Client().Disconnect(tc); err != nil {
		l.Fatal(err)
	}
	server.Shutdown(tc)

}
