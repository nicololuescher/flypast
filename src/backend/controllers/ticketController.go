package controllers

import (
	"net/http"

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

func GetTicketByTicketNumber(c *fiber.Ctx) error {
	// Get the ticket from the database
	var ticket models.Ticket
	if err := database.DBConn.Where("ticket_number = ?", c.Params("ticket_number")).First(&ticket).Error; err != nil {
		return err
	}

	if ticket.TicketNumber == "" {
		// create API GET request on https://c6eb12aa-83d9-4ddd-9cc7-cfdf9fbce453.mock.pstmn.io/mockapi/tickets/{ticket_number}
		resp, err := http.Get("https://c6eb12aa-83d9-4ddd-9cc7-cfdf9fbce453.mock.pstmn.io/mockapi/tickets/" + c.Params("ticket_number"))
		if err != nil {
			return err
		}
		defer resp.Body.Close()

		// Parse the response body into a ticket
		if err := c.BodyParser(&ticket); err != nil {
			return err
		}
		if err := database.DBConn.Create(&ticket).Error; err != nil {
			return err
		}

		// Return the ticket as JSON
		return c.JSON(ticket)
	}

	// Return the ticket as JSON
	return c.JSON(ticket)
}
