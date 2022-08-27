package models

import "gorm.io/gorm"

type Attraction struct {
	gorm.Model
	Name            string `json:"name"`
	Description     string `json:"description"`
	ImageURL        string `json:"image_url"`
	Coordinates     string `json:"coordinates"`
	Slotduration    int    `json:"slotduration"`
	StartTime       string `json:"start_time"`
	EndTime         string `json:"end_time"`
	MaxSeatsPerSlot int    `json:"max_seats_per_slot"`
}
