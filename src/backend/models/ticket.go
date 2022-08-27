package models

import "gorm.io/gorm"

type Ticket struct {
	gorm.Model
	TicketNumber  string `json:"ticket_number"`
	NumberOfRides int    `json:"number_of_rides"`
	ValidAtDay    string `json:"valid_at_day"`
}
