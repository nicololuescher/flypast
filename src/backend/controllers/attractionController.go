package controllers

import (
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
