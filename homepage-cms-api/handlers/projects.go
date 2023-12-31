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

type Projects struct {
	l  *log.Logger
	db *mongo.Database
}

func NewProjects(l *log.Logger, db *mongo.Database) *Projects {
	return &Projects{l, db}
}

type Project struct {
	Title       string   `json:"title"`
	Link        string   `json:"link"`
	Description string   `json:"description"`
	GitHub      string   `json:"github"`
	Stack       []string `json:"stack"`
}

func (exp *Projects) getProjects(rw http.ResponseWriter, h *http.Request) {
	//Load all Projects from db
	searchAllOptions := options.Find()
	searchAllOptions.SetLimit(50)
	var results []Project
	cursor, err := exp.db.Collection("Projects").Find(context.TODO(), bson.D{{}}, searchAllOptions)
	if err != nil {
		http.Error(rw, "Couldn't load Project", http.StatusInternalServerError)
		return
	}

	//Hydrate objects
	for cursor.Next(context.TODO()) {
		exp := Project{}
		err = cursor.Decode(&exp)
		if err != nil {
			http.Error(rw, "Couldn't load Project", http.StatusInternalServerError)
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

func (exp *Projects) addProject(rw http.ResponseWriter, h *http.Request) {
	//TODO: Implement CMS routes and UI
}

func (exp *Projects) updateProject(rw http.ResponseWriter, h *http.Request) {
	//TODO: Implement CMS routes and UI
}

func (exp *Projects) getAnyProject(rw http.ResponseWriter, h *http.Request) {
	// Load any entry from database (TODO: Add in IDs and URL matching)
	loaded := &Project{}
	err := exp.db.Collection("Projects").FindOne(context.TODO(), bson.D{{}}).Decode(loaded)
	if err != nil {
		exp.l.Println(err)
		http.Error(rw, "Couldn't load Project", http.StatusInternalServerError)
		return
	}

	// Return as JSON
	rw.Header().Set("Content-Type", "application/json")
	encoder := json.NewEncoder(rw)
	err = encoder.Encode(loaded)

	if err != nil {
		http.Error(rw, "Couldn't encode Project", http.StatusInternalServerError)
		return
	}

}
