package controllers

import (
	"fmt"
	"time"

	"github.com/gofiber/fiber/v2"
	"github.com/nicololuescher/flypast/database"
	"github.com/nicololuescher/flypast/models"
)

func GetActivities(c *fiber.Ctx) error {
	// Get all rides from the database
	var activities []models.Activity
	if err := database.DBConn.Find(&activities).Error; err != nil {
		return err
	}

	// Return the rides as JSON
	return c.JSON(activities)
}

func GetActivitiesByTicketID(c *fiber.Ctx) error {
	if availableActivitiesWhileWaitingArray, err := GetAvailableActivities(c.Params("id")); err != nil {
		return err
	} else {
		return c.JSON(availableActivitiesWhileWaitingArray)
	}
}

func GetAvailableActivities(ticketID string) ([]models.Activity, error) {
	fmt.Println("ticketID: ", ticketID)
	// Get all activities from the database
	var activities []models.Activity
	if err := database.DBConn.Find(&activities).Error; err != nil {
		return nil, err
	}

	var ticket models.Ticket
	if err := database.DBConn.Where("ID = ?", ticketID).First(&ticket).Error; err == nil {
		return nil, err
	}

	localDate := time.Now().Format("2006-01-02")
	var availableActivities []models.Activity

	fmt.Println("ValidAtDay: ", ticket.ValidAtDay)
	fmt.Println("localDate: ", localDate)
	if ticket.ValidAtDay != localDate {
		for _, activity := range activities {
			availableActivities = append(availableActivities, activity)
		}
	} else {
		fmt.Println("LocalDate == ValidAtDay")
		timeToNextRide := GetTimeToNextRide(int(ticket.ID))
		fmt.Println("timeToNextRide: ", timeToNextRide)

		for _, activity := range activities {
			if activity.Duration < timeToNextRide {
				availableActivities = append(availableActivities, activity)
			}
		}
	}
	return availableActivities, nil
}

func GetTimeToNextRide(ticketID int) int {
	var rides []models.Ride
	if err := database.DBConn.Where("ticket_id = ?", ticketID).Find(&rides).Error; err != nil {
		return -1
	}

	nextRide := 0
	for _, ride := range rides {
		var attraction models.Attraction
		if err := database.DBConn.First(&attraction, ride.AttractionID).Error; err != nil {
			return -1
		}
		if nextRide != 0 && ride.SlotNumber*attraction.Slotduration < nextRide {
			nextRide = ride.SlotNumber
		} else {
			nextRide = ride.SlotNumber * attraction.Slotduration
		}
	}

	return nextRide
}

func CreateActivity(c *fiber.Ctx) error {
	// Create a new activity
	var activity models.Activity
	if err := c.BodyParser(&activity); err != nil {
		return err
	}

	// Check if the activity already exists with name
	var existingActivity models.Activity
	if err := database.DBConn.Where("name = ?", activity.Name).First(&existingActivity).Error; err == nil {
		return c.Status(fiber.StatusConflict).JSON(fiber.Map{
			"message": "Activity already exists",
		})
	}
	if err := database.DBConn.Create(&activity).Error; err != nil {
		return err
	}

	// Return the activity as JSON
	return c.JSON(activity)
}

func UpdateActivity(c *fiber.Ctx) error {
	// Get the activity from the database
	var activity models.Activity
	if err := database.DBConn.First(&activity, c.Params("id")).Error; err != nil {
		return err
	}

	// Update the activity
	if err := c.BodyParser(&activity); err != nil {
		return err
	}
	if err := database.DBConn.Save(&activity).Error; err != nil {
		return err
	}

	// Return the activity as JSON
	return c.JSON(activity)
}

func DeleteActivity(c *fiber.Ctx) error {
	// Get the activity from the database
	var activity models.Activity
	if err := database.DBConn.First(&activity, c.Params("id")).Error; err != nil {
		return err
	}
	if err := database.DBConn.Delete(&activity).Error; err != nil {
		return err
	}

	// Return the attraction as JSON
	return c.JSON(activity)
}
