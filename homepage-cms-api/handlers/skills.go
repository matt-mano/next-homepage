package handlers

import (
	"context"
	"encoding/json"
	"errors"
	"fmt"
	"homepagecms/data"
	"log"
	"net/http"
	"regexp"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
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
	Id           data.MongoObjectID `json:"id" bson:"_id"`
	CategoryName string             `json:"categoryName"`
	Skills       []string           `json:"skills"`
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

	skill, err := getSkillFromRequest(h)
	if err != nil {
		http.Error(rw, "Couldn't parse the request", http.StatusBadRequest)

	}

	id, err := getSkillId(h)
	if err != nil {
		exp.l.Println(err)
		http.Error(rw, err.Error(), http.StatusBadRequest)
		return
	}

	filter := bson.D{{"_id", id}}
	update := bson.D{{"$set",
		bson.D{
			{"CategoryName", skill.CategoryName},
			{"Skills", skill.Skills},
		},
	}}

	_, err = exp.db.Collection("Skills").UpdateOne(context.TODO(), filter, update)
	if err != nil {
		exp.l.Println(err)
		http.Error(rw, "Couldn't load Skill", http.StatusInternalServerError)
		return
	}

	exp.getSkill(rw, h)
}

func (exp *Skills) getSkill(rw http.ResponseWriter, h *http.Request) {

	// Load any entry from database (TODO: Add in IDs and URL matching)
	loaded := &Skill{}
	id, err := getSkillId(h)
	if err != nil {
		exp.l.Println(err)
		http.Error(rw, err.Error(), http.StatusBadRequest)
		return
	}

	err = exp.db.Collection("Skills").FindOne(context.TODO(), bson.D{{"_id", *id}}).Decode(loaded)
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

func getSkillId(h *http.Request) (*primitive.ObjectID, error) {
	//Parse url for id
	reg := regexp.MustCompile(`skills/([a-zA-Z0-9]+)`)
	uri := h.URL.Path
	g := reg.FindAllStringSubmatch(uri, -1)

	//Check capture group
	if len(g) != 1 || len(g[0]) < 2 {
		fmt.Printf("%+v", g)
		return nil, errors.New("Invalid URL")
	}
	id := g[0][1]

	objectId, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		log.Println("Invalid id in URL")
	}

	return &objectId, nil
}

func getSkillFromRequest(h *http.Request) (*Skill, error) {
	decoder := json.NewDecoder(h.Body)
	var skill Skill
	err := decoder.Decode(&skill)

	return &skill, err
}
