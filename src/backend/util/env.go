package util

import (
	"os"

	"github.com/nicololuescher/flypast/database"
	"github.com/nicololuescher/flypast/models"
	"golang.org/x/crypto/bcrypt"
)

var (
	err            error
	CORS           string
	ADMIN_PASSWORD string
)

// LoadEnv loads OS environment variables
func LoadEnv() error {
	// Load environment variables
	if CORS = os.Getenv("CORS"); CORS == "" {
		InfoLogger.Println("CORS not set, defaulting to '*'")
		CORS = "*"
	}

	if ADMIN_PASSWORD = os.Getenv("ADMIN_PASSWORD"); ADMIN_PASSWORD == "" {
		InfoLogger.Println("ADMIN_PASSWORD not set, defaulting to 'admin'")
		ADMIN_PASSWORD = "admin"
	}

	adminUser := models.User{
		Username:   "admin",
		Password:   ADMIN_PASSWORD,
		Name:       "Admin",
		Avatar_URL: "https://www.gravatar.com/avatar/",
	}

	if err = CreateUser(adminUser); err != nil && err.Error() != "User already exists" {
		return err
	} else {
		// check if current password is ADMIN_PASSWORD
		var user models.User
		err = database.DBConn.Where("username = ?", adminUser.Username).First(&user).Error
		if err != nil {
			return err
		}
		// decrypt password
		err = bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(adminUser.Password))
		if err != nil {
			// update password
			UpdateUser(adminUser)
			InfoLogger.Println("Updated password for user: admin")
		}
	}

	if JWT_SECRET_KEY = os.Getenv("JWT_SECRET_KEY"); JWT_SECRET_KEY == "" {
		JWT_SECRET_KEY = RandomStringBytes(32)
		InfoLogger.Println("JWT_SECRET_KEY not set, defaulting to random string of length 32: " + JWT_SECRET_KEY)
	}

	return nil
}

func LoadDatabaseEnv() error {
	if database.DB_USERNAME = os.Getenv("DB_USERNAME"); database.DB_USERNAME == "" {
		InfoLogger.Println("DB_USERNAME not set, defaulting to 'postgres'")
		database.DB_USERNAME = "postgres"
	}

	if database.DB_PASSWORD = os.Getenv("DB_PASSWORD"); database.DB_PASSWORD == "" {
		InfoLogger.Println("DB_PASSWORD not set, defaulting to 'postgres'")
		database.DB_PASSWORD = "postgres"
	}

	if database.DB_HOST = os.Getenv("DB_HOST"); database.DB_HOST == "" {
		InfoLogger.Println("DB_HOST not set, defaulting to 'localhost'")
		database.DB_HOST = "localhost"
	}

	if database.DB_PORT = os.Getenv("DB_PORT"); database.DB_PORT == "" {
		InfoLogger.Println("DB_PORT not set, defaulting to '5432'")
		database.DB_PORT = "5432"
	}

	if database.DB_NAME = os.Getenv("DB_NAME"); database.DB_NAME == "" {
		InfoLogger.Println("DB_NAME not set, defaulting to 'postgres'")
		database.DB_NAME = "postgres"
	}
	return nil
}
