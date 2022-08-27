package controllers

import (
	"github.com/gofiber/fiber/v2"
	"github.com/nicololuescher/flypast/database"
	"github.com/nicololuescher/flypast/models"
)

func GetTickets(c *fiber.Ctx) error {
	// Get all tickets from the database
	var tickets []models.Ticket
	if err := database.DBConn.Find(&tickets).Error; err != nil {
		return err
	}

	// Return the tickets as JSON
	return c.JSON(tickets)
}

func GetTicket(c *fiber.Ctx) error {
	// Get the ticket from the database
	var ticket models.Ticket
	if err := database.DBConn.First(&ticket, c.Params("id")).Error; err != nil {
		return err
	}

	// Return the ticket as JSON
	return c.JSON(ticket)
}

func CreateTicket(c *fiber.Ctx) error {
	// Create a new ticket
	var ticket models.Ticket
	if err := c.BodyParser(&ticket); err != nil {
		return err
	}

	// Check if the ticket already exists with ticket_number
	var existingTicket models.Ticket
	if err := database.DBConn.Where("ticket_number = ?", ticket.TicketNumber).First(&existingTicket).Error; err == nil {
		return c.Status(fiber.StatusConflict).JSON(fiber.Map{
			"message": "Ticket already exists",
		})
	}

	if err := database.DBConn.Create(&ticket).Error; err != nil {
		return err
	}

	// Return the ticket as JSON
	return c.JSON(ticket)
}

func UpdateTicket(c *fiber.Ctx) error {
	// Get the ticket from the database
	var ticket models.Ticket
	if err := database.DBConn.First(&ticket, c.Params("id")).Error; err != nil {
		return err
	}

	// Update the ticket
	if err := c.BodyParser(&ticket); err != nil {
		return err
	}
	if err := database.DBConn.Save(&ticket).Error; err != nil {
		return err
	}

	// Return the ticket as JSON
	return c.JSON(ticket)
}

func DeleteTicket(c *fiber.Ctx) error {
	// Get the ticket from the database
	var ticket models.Ticket
	if err := database.DBConn.First(&ticket, c.Params("id")).Error; err != nil {
		return err
	}

	// Delete the ticket
	if err := database.DBConn.Delete(&ticket).Error; err != nil {
		return err
	}

	// Return the ticket as JSON
	return c.JSON(ticket)
}
