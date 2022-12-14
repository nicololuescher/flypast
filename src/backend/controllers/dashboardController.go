package controllers

import (
	"fmt"
	"math"
	"time"

	"github.com/gofiber/fiber/v2"
	"github.com/nicololuescher/flypast/database"
	"github.com/nicololuescher/flypast/models"
)

func GetAttractionFreeRidesToday(c *fiber.Ctx) error {
	fmt.Println("GetAttractionFreeRidesToday")
	// Get all attractions from the database
	var attractions []models.Attraction
	if err := database.DBConn.Find(&attractions).Error; err != nil {
		return err
	}

	var Dashboard []models.Dashboard

	for _, attraction := range attractions {
		// Get all rides from the database which are connected to the attraction from the given date
		var rides []models.Ride
		if err := database.DBConn.Where("attraction_id = ?", attraction.ID).Find(&rides).Error; err != nil {
			return err
		}

		// get delta time of attraction StartTimeMinutes and EndTimeMinutes
		deltaTime := attraction.EndTimeMinutes - attraction.StartTimeMinutes

		// divide delta time by attraction Slotduration to get the number of slots
		numberOfSlots := int(math.Round(float64(deltaTime / attraction.Slotduration)))

		//var freeRidesPerSlotArray []models.FreeRidesPerSlot

		localDate := time.Now().Format("2006-01-02")

		numberOfReservedRides := 0

		for i := 0; i < numberOfSlots; i++ {
			if len(rides) > 0 {
				for _, ride := range rides {
					// Get the ticket from the database
					var _ticket models.Ticket
					if err := database.DBConn.First(&_ticket, ride.TicketID).Error; err != nil {
						return err
					}
					if ride.SlotNumber == i && _ticket.ValidAtDay == localDate {
						numberOfReservedRides++
					}
				}
			}
		}
		Dashboard = append(Dashboard, models.Dashboard{
			Attraction:    attraction,
			TotalSlots:    numberOfSlots,
			ReservedSlots: numberOfReservedRides,
		})
	}

	return c.JSON(Dashboard)
}
