package models

import "gorm.io/gorm"

type Activity struct {
	gorm.Model
	Name             string `json:"name"`
	Description      string `json:"description"`
	Coordinates      string `json:"coordinates"`
	Duration         int    `json:"duration"`
}
