package handlers

import (
	"log"
	"net/http"
	"regexp"
	"strings"
)

/*
 *	Route - stores a possible route
 */
type Route struct {
	method  string
	regex   *regexp.Regexp
	handler http.HandlerFunc
}

func NewRoute(method string, pattern string, handler http.HandlerFunc) Route {
	return Route{method, regexp.MustCompile("^" + pattern + "$"), handler}
}

/*
 *	Router - maps the various routes
 */
type Router struct {
	l      *log.Logger
	eh     *Experiences
	routes []Route
}

func NewRouter(l *log.Logger, eh *Experiences, sh *Skills) *Router {

	// Generate and compile routes
	routes := []Route{
		NewRoute("GET", "/experiences", eh.getExperiences),
		NewRoute("GET", "/experiences/[0-9]+", eh.getAnyExperience),
		NewRoute("POST", "/experiences", eh.addExperience),
		NewRoute("PUT", "/experiences/[0-9]+", eh.updateExperience),
		NewRoute("GET", "/skills", sh.getSkills),
		NewRoute("GET", "/skills/[0-9]+", sh.getAnySkill),
		NewRoute("POST", "/skills", sh.addSkill),
		NewRoute("PUT", "/skills/[0-9]+", sh.updateSkill),
	}

	return &Router{l, eh, routes}
}

func (router *Router) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	var allow []string
	for _, route := range router.routes {
		matches := route.regex.FindStringSubmatch(r.URL.Path)

		if len(matches) > 0 {
			if r.Method != route.method {
				allow = append(allow, route.method)
				continue
			}
			route.handler(w, r)
			return
		}
	}

	//Return a helpful method not allowed if applicable
	if len(allow) > 0 {
		w.Header().Set("Allow", strings.Join(allow, ", "))
		http.Error(w, "405 method not allowed", http.StatusMethodNotAllowed)
		return
	}

	//Otherwise 404
	http.NotFound(w, r)
}
