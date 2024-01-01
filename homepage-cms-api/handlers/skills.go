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

func NewSkills(l *log.Logger, db *mongo.Database) *Skills {
	return &Skills{l, db}
}

type Skill struct {
	CategoryName string   `json:"categoryName"`
	Skills       []string `json:"skills"`
}

func (exp *Skills) getSkills(rw http.ResponseWriter, h *http.Request) {
	//Load all Skills from db
	searchAllOptions := options.Find()
	searchAllOptions.SetLimit(50)
	var results []Skill
	cursor, err := exp.db.Collection("Skills").Find(context.TODO(), bson.D{{}}, searchAllOptions)
	if err != nil {
		http.Error(rw, "Couldn't load Skill", http.StatusInternalServerError)
		return
	}

	//Hydrate objects
	for cursor.Next(context.TODO()) {
		exp := Skill{}
		err = cursor.Decode(&exp)
		if err != nil {
			http.Error(rw, "Couldn't load Skill", http.StatusInternalServerError)
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

func (exp *Skills) addSkill(rw http.ResponseWriter, h *http.Request) {
	//TODO: Implement CMS routes and UI
}

func (exp *Skills) updateSkill(rw http.ResponseWriter, h *http.Request) {
	//TODO: Implement CMS routes and UI
}

func (exp *Skills) getAnySkill(rw http.ResponseWriter, h *http.Request) {
	// Load any entry from database (TODO: Add in IDs and URL matching)
	loaded := &Skill{}
	err := exp.db.Collection("Skills").FindOne(context.TODO(), bson.D{{}}).Decode(loaded)
	if err != nil {
		exp.l.Println(err)
		http.Error(rw, "Couldn't load Skill", http.StatusInternalServerError)
		return
	}

	// Return as JSON
	rw.Header().Set("Content-Type", "application/json")
	encoder := json.NewEncoder(rw)
	err = encoder.Encode(loaded)

	if err != nil {
		http.Error(rw, "Couldn't encode Skill", http.StatusInternalServerError)
		return
	}

}
