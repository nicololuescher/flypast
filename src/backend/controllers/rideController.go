package controllers

import (
	"fmt"

	"github.com/gofiber/fiber/v2"
	"github.com/nicololuescher/flypast/database"
	"github.com/nicololuescher/flypast/models"
)

func GetRides(c *fiber.Ctx) error {
	// Get all rides from the database
	var rides []models.Ride
	if err := database.DBConn.Find(&rides).Error; err != nil {
		return err
	}

	// Return the rides as JSON
	return c.JSON(rides)
}

func GetRide(c *fiber.Ctx) error {
	// Get the ride from the database
	var ride models.Ride
	if err := database.DBConn.First(&ride, c.Params("id")).Error; err != nil {
		return err
	}

	// Return the ride as JSON
	return c.JSON(ride)
}

func CreateRide(c *fiber.Ctx) error {
	// Create a new ride
	var ride models.Ride
	if err := c.BodyParser(&ride); err != nil {
		return err
	}

	// Get the ticket from the database
	var ticket models.Ticket
	if err := database.DBConn.First(&ticket, ride.TicketID).Error; err != nil {
		return err
	}

	// Get the attraction from the database
	var attraction models.Attraction
	if err := database.DBConn.First(&attraction, ride.AttractionID).Error; err != nil {
		return err
	}

	// Get all rides for chosen slot of attraction
	var rides []models.Ride
	if err := database.DBConn.Where("attraction_id = ?", ride.AttractionID).Where("slot_number = ?", ride.SlotNumber).Find(&rides).Error; err != nil {
		return err
	}

	rideCount := 0

	for _, _ride := range rides {
		// Get the ticket from the database
		var _ticket models.Ticket
		if err := database.DBConn.First(&_ticket, _ride.TicketID).Error; err != nil {
			return err
		}
		fmt.Println("_ticket.ValidAtDay: ", _ticket.ValidAtDay)
		fmt.Println("ticket.ValidAtDay: ", ticket.ValidAtDay)
		if _ticket.ValidAtDay == ticket.ValidAtDay {
			rideCount = rideCount + 1
		}
	}

	if rideCount < attraction.MaxRidesPerSlot {
		if err := database.DBConn.Create(&ride).Error; err != nil {
			return err
		}

		// Return the ride as JSON
		return c.JSON(ride)
	} else {
		return c.JSON("this timeslot is full")
	}

}

func UpdateRide(c *fiber.Ctx) error {
	// Get the ride from the database
	var ride models.Ride
	if err := database.DBConn.First(&ride, c.Params("id")).Error; err != nil {
		return err
	}

	// Update the ride
	if err := c.BodyParser(&ride); err != nil {
		return err
	}
	if err := database.DBConn.Save(&ride).Error; err != nil {
		return err
	}

	// Return the ride as JSON
	return c.JSON(ride)
}

func DeleteRide(c *fiber.Ctx) error {
	// Get the ride from the database
	var ride models.Ride
	if err := database.DBConn.First(&ride, c.Params("id")).Error; err != nil {
		return err
	}

	// Delete the ride
	if err := database.DBConn.Delete(&ride).Error; err != nil {
		return err
	}

	// Return the ride as JSON
	return c.JSON(ride)
}
