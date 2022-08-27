package controllers

import (
	"math"

	"github.com/gofiber/fiber/v2"
	"github.com/nicololuescher/flypast/database"
	"github.com/nicololuescher/flypast/models"
)

func GetAttractions(c *fiber.Ctx) error {
	// Get all attractions from the database
	var attractions []models.Attraction
	if err := database.DBConn.Find(&attractions).Error; err != nil {
		return err
	}

	// Return the attractions as JSON
	return c.JSON(attractions)
}

func GetAttraction(c *fiber.Ctx) error {
	// Get the attraction from the database
	var attraction models.Attraction
	if err := database.DBConn.First(&attraction, c.Params("id")).Error; err != nil {
		return err
	}

	// Return the attraction as JSON
	return c.JSON(attraction)
}

func CreateAttraction(c *fiber.Ctx) error {
	// Create a new attraction
	var attraction models.Attraction
	if err := c.BodyParser(&attraction); err != nil {
		return err
	}

	// Check if the attraction already exists with name
	var existingAttraction models.Attraction
	if err := database.DBConn.Where("name = ?", attraction.Name).First(&existingAttraction).Error; err == nil {
		return c.Status(fiber.StatusConflict).JSON(fiber.Map{
			"message": "Attraction already exists",
		})
	}
	if err := database.DBConn.Create(&attraction).Error; err != nil {
		return err
	}

	// Return the attraction as JSON
	return c.JSON(attraction)
}

func UpdateAttraction(c *fiber.Ctx) error {
	// Get the attraction from the database
	var attraction models.Attraction
	if err := database.DBConn.First(&attraction, c.Params("id")).Error; err != nil {
		return err
	}

	// Update the attraction
	if err := c.BodyParser(&attraction); err != nil {
		return err
	}
	if err := database.DBConn.Save(&attraction).Error; err != nil {
		return err
	}

	// Return the attraction as JSON
	return c.JSON(attraction)
}

func DeleteAttraction(c *fiber.Ctx) error {
	// Get the attraction from the database
	var attraction models.Attraction
	if err := database.DBConn.First(&attraction, c.Params("id")).Error; err != nil {
		return err
	}
	if err := database.DBConn.Delete(&attraction).Error; err != nil {
		return err
	}

	// Return the attraction as JSON
	return c.JSON(attraction)
}

func GetAttractionRides(c *fiber.Ctx) error {
	// Get the attraction from the database
	var attraction models.Attraction
	if err := database.DBConn.First(&attraction, c.Params("id")).Error; err != nil {
		return err
	}

	// Get all rides from the database which are connected to the attraction
	var rides []models.Ride
	if err := database.DBConn.Where("attraction_id = ?", attraction.ID).Find(&rides).Error; err != nil {
		return err
	}

	// Return the rides as JSON
	return c.JSON(rides)
}

func GetAttractionFreeRidesBySlotsByDate(c *fiber.Ctx) error {
	// Parse body which contains an array of Ticket Numbers under the key "tickets"
	var body map[string]interface{}
	if err := c.BodyParser(&body); err != nil {
		return err
	}

	if freeRidesBySlotsByAttractionArray, err := GetFreeRidesBySlotsByAttraction(c.Params("id"), c.Params("date_day")); err != nil {
		return err
	} else {
		return c.JSON(freeRidesBySlotsByAttractionArray)
	}
}

func GetFreeRidesBySlotsByAttraction(attractionID string, dateDay string) ([]models.FreeRidesPerSlot, error) {
	var attraction models.Attraction
	if err := database.DBConn.First(&attraction, attractionID).Error; err != nil {
		return nil, err
	}

	// Get all rides from the database which are connected to the attraction from the given date
	var rides []models.Ride
	if err := database.DBConn.Where("attraction_id = ? AND date_day = ?", attraction.ID, dateDay).Find(&rides).Error; err != nil {
		return nil, err
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

	return freeRidesPerSlotArray, nil
}
