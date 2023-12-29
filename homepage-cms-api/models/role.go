package models

type Role struct {
	Title     string   `json:"title"`
	StartDate string   `json:"startDate"`
	EndDate   string   `json:"endDate"`
	Notes     []string `json:"notes"`
}
