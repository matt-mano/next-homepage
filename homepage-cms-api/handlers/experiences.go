package handlers

import (
	"encoding/json"
	"homepagecms/data"
	"homepagecms/models"
	"log"
	"net/http"

	"go.mongodb.org/mongo-driver/mongo"
)

type Experiences struct {
	l  *log.Logger
	db *mongo.Client
}

func NewExperiences(l *log.Logger, db *mongo.Client) *Experiences {
	return &Experiences{l, db}
}

func (exp *Experiences) getExperiences(rw http.ResponseWriter, h *http.Request) {
	exps := data.GetExperiences()
	rw.Header().Set("Content-Type", "application/json")
	encoder := json.NewEncoder(rw)
	err := encoder.Encode(exps)
	if err != nil {
		http.Error(rw, "Couldn't write the JSONs", http.StatusInternalServerError)
		return
	}
}

func (exp *Experiences) addExperience(rw http.ResponseWriter, h *http.Request) {
	decoder := json.NewDecoder(h.Body)
	experience := &models.Experience{}
	e := decoder.Decode(experience)

	if e != nil {
		http.Error(rw, "Couldn't read the JSONs", http.StatusBadRequest)
	}

	exp.l.Printf("Prod: %#v", experience)
	data.AddExperience(experience)
}

func (exp *Experiences) updateExperience(rw http.ResponseWriter, h *http.Request) {
	//TODO: Stuff
}

func (exp *Experiences) getAnyExperience(rw http.ResponseWriter, h *http.Request) {
	loaded := data.GetOneExperience(exp.db)

	rw.Header().Set("Content-Type", "application/json")
	encoder := json.NewEncoder(rw)
	err := encoder.Encode(loaded)

	if err != nil {
		http.Error(rw, "Couldn't read the JSONs from mongo", http.StatusBadRequest)
	}

}
