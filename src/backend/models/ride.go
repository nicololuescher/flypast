package models

import "gorm.io/gorm"

type Ride struct {
	gorm.Model
	Attraction   Attraction `json:"attraction"`
	AttractionID uint       `json:"attraction_id"`
	Ticket       Ticket     `json:"ticket"`
	TicketID     uint       `json:"ticket_id"`
	RideNumber   int        `json:"ride_number"`
}
