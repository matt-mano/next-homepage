package data

import (
	"context"
	"fmt"
	"homepagecms/models"
	"os"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func NewMongoClient() (*mongo.Client, error) {
	serverAPI := options.ServerAPI(options.ServerAPIVersion1)
	opts := options.Client().ApplyURI(os.Getenv("HOMEPAGE_MONGODB_URL")).SetServerAPIOptions(serverAPI)
	// Create a new client and connect to the server
	client, err := mongo.Connect(context.TODO(), opts)
	if err != nil {
		fmt.Println(err)
	}
	return client, err
}

func GetOneExperience(db *mongo.Client) *models.Experience {
	// Send a ping to confirm a successful connection
	exp := &models.Experience{}

	// Send a ping to confirm a successful connection
	err := db.Database("Homepage").Collection("Experiences").FindOne(context.TODO(), bson.D{{}}).Decode(exp)
	if err != nil {
		panic(err)
	}
	fmt.Printf("Got something  %#v", exp)

	return exp
}
