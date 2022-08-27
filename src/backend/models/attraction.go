package models

import "gorm.io/gorm"

type Attraction struct {
	gorm.Model
	Name             string `json:"name"`
	Description      string `json:"description"`
	ImageURL         string `json:"image_url"`
	Coordinates      string `json:"coordinates"`
	Slotduration     int    `json:"slotduration"`
	StartTimeMinutes int    `json:"start_time_minutes"`
	EndTimeMinutes   int    `json:"end_time_minutes"`
	MaxRidesPerSlot  int    `json:"max_rides_per_slot"`
}
