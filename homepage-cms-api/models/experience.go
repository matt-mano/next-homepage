package models

type Experience struct {
	ID       int     `json:"id"`
	Company  string  `json:"company"`
	Location string  `json:"location"`
	Roles    []*Role `json:"roles"`
}
