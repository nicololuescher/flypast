package controllers

import (
	"fmt"
	"math"

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

		var freeRidesPerSlotArray []models.FreeRidesPerSlot

		for i := 0; i < numberOfSlots; i++ {

			freeRidesPerSlotArray = append(freeRidesPerSlotArray, models.FreeRidesPerSlot{
				SlotNumber: i,
				FreeRides:  attraction.MaxRidesPerSlot,
			})
			if len(rides) > 0 {
				for _, ride := range rides {
					if ride.SlotNumber == i {
						freeRidesPerSlotArray[i].FreeRides = freeRidesPerSlotArray[i].FreeRides - 1
					}
				}
			}
		}
		Dashboard = append(Dashboard, models.Dashboard{
			Attraction:       attraction,
			FreeRidesPerSlot: freeRidesPerSlotArray,
		})
	}

	return c.JSON(Dashboard)
}
