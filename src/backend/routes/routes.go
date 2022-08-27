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

	// TODO: authorization by ticketnumber in body

	// Ticket
	v1.Get("/tickets", controllers.GetTickets)
	v1.Get("/tickets/:id", controllers.GetTicket)
	v1.Post("/tickets", controllers.CreateTicket)
	v1.Put("/tickets/:id", controllers.UpdateTicket)
	v1.Delete("/tickets/:id", controllers.DeleteTicket)

	// Attraction
	v1.Get("/attractions", controllers.GetAttractions)
	v1.Get("/attractions/:id", controllers.GetAttraction)
	v1.Post("/attractions", controllers.CreateAttraction)
	v1.Put("/attractions/:id", controllers.UpdateAttraction)
	v1.Delete("/attractions/:id", controllers.DeleteAttraction)
	v1.Get("/attractions/:id/rides", controllers.GetAttractionRides)
	v1.Get("/attractions/:id/free_rides/tickets/:ticket_id", controllers.GetAttractionFreeRidesBySlotsByTicket)

	// Ride
	v1.Get("/rides", controllers.GetRides)
	v1.Get("/rides/:id", controllers.GetRide)
	v1.Post("/rides", controllers.CreateRide)
	v1.Put("/rides/:id", controllers.UpdateRide)
	v1.Delete("/rides/:id", controllers.DeleteRide)
	// v1.Get("/rides/:ticket_id", controllers.GetRidesByTicketID)
}
