package models

import "gorm.io/gorm"

type Dashboard struct {
	gorm.Model
	Attraction       Attraction
	FreeRidesPerSlot []FreeRidesPerSlot
}
