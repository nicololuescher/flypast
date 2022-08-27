package routes

import (
	"github.com/gofiber/fiber/v2"
	"github.com/nicololuescher/flypast/controllers"
)

// Routes - Define all routes
func Setup(app *fiber.App) {

	api := app.Group("/api")
	v1 := api.Group("/v1")

	// Auth
	v1.Post("/auth", controllers.Login)
	v1.Get("/auth", controllers.CheckLogin)

	// Ticket
	v1.Get("/tickets", controllers.GetTickets)
	v1.Get("/tickets/:id", controllers.GetTicket)
	v1.Post("/tickets", controllers.CreateTicket)
	v1.Put("/tickets/:id", controllers.UpdateTicket)
	v1.Delete("/tickets/:id", controllers.DeleteTicket)

}
