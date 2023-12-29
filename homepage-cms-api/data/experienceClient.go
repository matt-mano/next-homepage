package data

import (
	"fmt"
	"homepagecms/models"
)

func GetExperiences() []*models.Experience {
	return experienceList
}

func GetExperienceById(id int) (*models.Experience, int, error) {
	for i, p := range experienceList {
		if p.ID == id {
			return p, i, nil
		}
	}

	return nil, 0, fmt.Errorf("Product Not Found")
}

func AddExperience(e *models.Experience) {
	e.ID = GetNextID()

	experienceList = append(experienceList, e)
}

func UpdateExperience(id int, exp *models.Experience) error {
	exp, idx, err := GetExperienceById(id)

	if err != nil {
		return err
	}

	exp.ID = id
	experienceList[idx] = exp

	return nil
}

func GetNextID() int {
	return experienceList[len(experienceList)-1].ID + 1
}

var experienceList = []*models.Experience{
	{
		ID:       1,
		Company:  "Cardinal Health",
		Location: "Remote",
		Roles: []*models.Role{
			{
				Title:     "Supervisor",
				StartDate: "09/2022",
				EndDate:   "Current",
				Notes: []string{
					"Blah blah stuff",
					"Blah blah line2",
				},
			},
			{
				Title:     "Worker",
				StartDate: "03/2020",
				EndDate:   "09/2022",
				Notes: []string{
					"Blah blah more stuff",
					"Blah blah line2",
				},
			},
		},
	},
	{
		ID:       2,
		Company:  "KALU",
		Location: "Not Remote",
		Roles: []*models.Role{
			{
				Title:     "Worker",
				StartDate: "05/2018",
				EndDate:   "03/2020",
				Notes: []string{
					"Blah blah more alu stuff",
					"Blah blah line2",
				}},
			{
				Title:     "Intern",
				StartDate: "05/2017",
				EndDate:   "05/2018",
				Notes: []string{
					"Blah blah more intern stuff",
					"Blah blah line2",
				}},
		},
	},
}
