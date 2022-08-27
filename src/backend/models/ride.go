package models

import (
	"gorm.io/gorm"
)

type Ride struct {
	gorm.Model
	AttractionID uint `json:"attraction_id"`
	TicketID     uint `json:"ticket_id"`
	SlotNumber   int  `json:"slot_number"`
}

type FreeRidesPerSlot struct {
	SlotNumber int `json:"slot_number"`
	FreeRides  int `json:"free_rides"`
}
