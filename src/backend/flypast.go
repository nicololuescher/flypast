package main

import (
	"os"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/fiber/v2/middleware/logger"
	"github.com/nicololuescher/flypast/database"
	"github.com/nicololuescher/flypast/routes"
	"github.com/nicololuescher/flypast/util"
)

func init() {
	util.InitLoggers()
	util.Status = util.OK

	if err := util.LoadDatabaseEnv(); err != nil {
		util.ErrorLogger.Println(err)
		os.Exit(1)
	}

	if err := database.InitDB(); err != nil {
		util.ErrorLogger.Println(err)
		os.Exit(1)
	}

	if err := util.LoadEnv(); err != nil {
		util.ErrorLogger.Println(err)
		os.Exit(1)
	}
}

func main() {
	app := fiber.New(fiber.Config{})

	app.Use(cors.New(cors.Config{
		AllowMethods:     "GET,POST,PUT,DELETE,OPTIONS",
		AllowCredentials: true,
		AllowOrigins:     util.CORS,
	}))

	app.Use(logger.New(logger.Config{
		TimeFormat: "2006/01/02 - 15:04:05",
		TimeZone:   "Europe/Zurich",
	}))

	routes.Setup(app)

	util.InfoLogger.Println("Starting KubeTrial REST Backend...")

	if err := app.Listen(":8000"); err != nil {
		util.ErrorLogger.Println("Error starting server:", err)
		util.Status = "ERROR"
		os.Exit(1)
	}
}
