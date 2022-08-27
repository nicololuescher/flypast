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

	// Check if the ride already exists with ride_number
	var existingRide models.Ride
	if err := database.DBConn.Where("ride_number = ?", ride.RideNumber).First(&existingRide).Error; err == nil {
		return c.Status(fiber.StatusConflict).JSON(fiber.Map{
			"message": "Ride already exists",
		})
	}

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
