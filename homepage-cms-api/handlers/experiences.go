package handlers

import (
	"encoding/json"
	"homepagecms/data"
	"homepagecms/models"
	"log"
	"net/http"
	"regexp"
	"strconv"
)

type Experiences struct {
	l *log.Logger
}

func NewExperiences(l *log.Logger) *Experiences {
	return &Experiences{l}
}

func (exp *Experiences) ServeHTTP(rw http.ResponseWriter, h *http.Request) {
	if h.Method == http.MethodGet {
		exp.getExperiences(rw, h)
		return
	}

	if h.Method == http.MethodPost {
		exp.addExperience(rw, h)
		return
	}

	if h.Method == http.MethodPut {
		//Let's get the id
		reg := regexp.MustCompile(`/([0-9]+)`)
		uri := h.URL.Path
		g := reg.FindAllStringSubmatch(uri, -1)

		if len(g) != 1 || len(g[0]) < 2 {
			http.Error(rw, "Invalid URL", http.StatusBadRequest)
			return
		}

		idString := g[0][1]
		id, e := strconv.Atoi(idString)

		if e != nil {
			http.Error(rw, "Invalid URL", http.StatusBadRequest)
			return
		}

		exp.l.Println("ID: ", id)
	}

	rw.WriteHeader(http.StatusNotImplemented)
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
