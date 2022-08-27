package controllers

import (
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

	// Check if the ride already exists with slot_number
	var existingRide models.Ride
	if err := database.DBConn.Where("slot_number = ?", ride.SlotNumber).First(&existingRide).Error; err == nil {
		return c.Status(fiber.StatusConflict).JSON(fiber.Map{
			"message": "Ride already exists",
		})
	}

	// check if existing rides at date and ticket_id exist
	// var existingRides []models.Ride
	// if err := database.DBConn.Where("date_day = ? AND ticket_id = ?", ride.DateDay, ride.TicketID).Find(&existingRides).Error; err != nil {
	// 	return err
	// }

	// if len(existingRides) > 0 {
	// 	// ride must have the same date as existing rides
	// 	if ride.DateDay != existingRides[0].DateDay || ride.TicketID != existingRides[0].TicketID {
	// 		return c.Status(fiber.StatusConflict).JSON(fiber.Map{
	// 			"message": "Ride date and TicketID must be the same as existing rides",
	// 		})
	// 	}
	// }

	if err := database.DBConn.Create(&ride).Error; err != nil {
		return err
	}

	// Return the ride as JSON
	return c.JSON(ride)
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
