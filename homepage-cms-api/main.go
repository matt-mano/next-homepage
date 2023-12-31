package main

import (
	"context"
	"fmt"
	"homepagecms/data"
	"homepagecms/handlers"
	"homepagecms/models"
	"log"
	"net/http"
	"os"
	"os/signal"
	"time"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func doADataThing() {
	// Use the SetServerAPIOptions() method to set the Stable API version to 1
	serverAPI := options.ServerAPI(options.ServerAPIVersion1)
	opts := options.Client().ApplyURI("mongodb+srv://mongouser:hJZEkMZqDV8d7KLCGCo3@mattmano0.hetoazz.mongodb.net/?retryWrites=true&w=majority").SetServerAPIOptions(serverAPI)
	// Create a new client and connect to the server
	client, err := mongo.Connect(context.TODO(), opts)
	if err != nil {
		panic(err)
	}
	defer func() {
		if err = client.Disconnect(context.TODO()); err != nil {
			panic(err)
		}
	}()
	// Send a ping to confirm a successful connection
	exp := &models.Experience{}

	// Send a ping to confirm a successful connection
	err = client.Database("Homepage").Collection("Experiences").FindOne(context.TODO(), bson.D{{}}).Decode(exp)
	if err != nil {
		panic(err)
	}
	fmt.Printf("Got something  %#v", exp)
	fmt.Println("Pinged your deployment. You successfully connected to MongoDB!")
}

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

	//Bruh idk
	doADataThing()

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

	sigChannel := make(chan os.Signal)
	signal.Notify(sigChannel, os.Interrupt)
	signal.Notify(sigChannel, os.Kill)
	sig := <-sigChannel
	l.Println("Shut er down! ", sig)
	tc, _ := context.WithTimeout(context.Background(), 30*time.Second)
	server.Shutdown(tc)
}
