package middleware

import "net/http"

func authorize(rw http.ResponseWriter, request *http.Request, handler *http.HandlerFunc) *http.HandlerFunc {

	//TODO: authorize something
	if 1 < 0 {
		http.Error(rw, "Unauthorized", http.StatusUnauthorized)
		return nil
	}

	return handler
}
