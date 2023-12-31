package handlers

import (
	"context"
	"encoding/json"
	"log"
	"net/http"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

type Skills struct {
	l  *log.Logger
	db *mongo.Database
}

func NewSkills(l *log.Logger, db *mongo.Database) *Experiences {
	return &Experiences{l, db}
}

func (exp *Skills) getExperiences(rw http.ResponseWriter, h *http.Request) {
	//Load all experiences from db
	searchAllOptions := options.Find()
	searchAllOptions.SetLimit(50)
	var results []Experience
	cursor, err := exp.db.Collection("Experiences").Find(context.TODO(), bson.D{{}}, searchAllOptions)
	if err != nil {
		http.Error(rw, "Couldn't load experience", http.StatusInternalServerError)
		return
	}

	//Hydrate objects
	for cursor.Next(context.TODO()) {
		exp := Experience{}
		err = cursor.Decode(&exp)
		if err != nil {
			http.Error(rw, "Couldn't load experience", http.StatusInternalServerError)
			return
		}
		results = append(results, exp)
	}

	//Write to JSON
	rw.Header().Set("Content-Type", "application/json")
	encoder := json.NewEncoder(rw)
	err = encoder.Encode(results)
	if err != nil {
		http.Error(rw, "Couldn't write the JSONs", http.StatusInternalServerError)
		return
	}
}

func (exp *Skills) addExperience(rw http.ResponseWriter, h *http.Request) {
	//TODO: Implement CMS routes and UI
}

func (exp *Skills) updateExperience(rw http.ResponseWriter, h *http.Request) {
	//TODO: Implement CMS routes and UI
}

func (exp *Skills) getAnyExperience(rw http.ResponseWriter, h *http.Request) {
	// Load any entry from database (TODO: Add in IDs and URL matching)
	loaded := &Experience{}
	err := exp.db.Collection("Experiences").FindOne(context.TODO(), bson.D{{}}).Decode(loaded)
	if err != nil {
		exp.l.Println(err)
		http.Error(rw, "Couldn't load experience", http.StatusInternalServerError)
		return
	}

	// Return as JSON
	rw.Header().Set("Content-Type", "application/json")
	encoder := json.NewEncoder(rw)
	err = encoder.Encode(loaded)

	if err != nil {
		http.Error(rw, "Couldn't encode experience", http.StatusInternalServerError)
		return
	}

}
