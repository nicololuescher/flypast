package database

import (
	"fmt"

	"github.com/nicololuescher/flypast/models"
	"gorm.io/driver/postgres"
	_ "gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var (
	DBConn      *gorm.DB
	DB_USERNAME string
	DB_PASSWORD string
	DB_HOST     string
	DB_PORT     string
	DB_NAME     string
)

func InitDB() error {
	var err error

	dbUri := fmt.Sprintf("host=%s port=%s user=%s dbname=%s password=%s sslmode=disable", DB_HOST, DB_PORT, DB_USERNAME, DB_NAME, DB_PASSWORD)
	if err != nil {
		return err
	}
	DBConn, err = gorm.Open(postgres.Open(dbUri), &gorm.Config{})
	if err != nil {
		return err
	}

	// migrate the schema
	DBConn.Debug().AutoMigrate(&models.User{})
	DBConn.Debug().AutoMigrate(&models.Ticket{})
	DBConn.Debug().AutoMigrate(&models.Attraction{})
	DBConn.Debug().AutoMigrate(&models.Ride{})
	DBConn.Debug().AutoMigrate(&models.Activity{})
	return nil
}
