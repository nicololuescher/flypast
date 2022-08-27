package controllers

import (
	"errors"
	"strings"
	"time"

	"github.com/gofiber/fiber/v2"
	"github.com/golang-jwt/jwt"
	"github.com/nicololuescher/flypast/models"
	"github.com/nicololuescher/flypast/util"
)

func Login(c *fiber.Ctx) error {

	var data struct {
		Username string `json:"username"`
		Password string `json:"password"`
	}

	if err := c.BodyParser(&data); err != nil {
		c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"message": "Invalid request",
		})
		return err
	}

	user, err := util.GetUserByUsername(data.Username)
	if err != nil {
		return err
	}

	if err := util.CheckPasswordOfUser(data.Password, user.ID); err != nil {
		return err
	}

	claims := jwt.MapClaims{
		"id":         user.ID,
		"username":   user.Username,
		"name":       user.Name,
		"avatar_url": user.Avatar_URL,
		"exp":        time.Now().Add(time.Hour * 24).Unix(),
	}
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	tokenString, err := token.SignedString([]byte(util.JWT_SECRET_KEY))
	if err != nil {
		return err
	}
	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"token": tokenString,
		"user":  user,
	})
}

func CheckLogin(c *fiber.Ctx) error {

	user, err := CheckAuth(c)
	if err != nil {
		return err
	}

	smallUser := models.User{
		Username:   user.Username,
		Name:       user.Name,
		Avatar_URL: user.Avatar_URL,
	}

	return c.Status(fiber.StatusOK).JSON(smallUser)
}

// CheckAuth checks if the token is valid and returns the User model
func CheckAuth(c *fiber.Ctx) (models.User, error) {
	var token *jwt.Token
	var tokenString string

	// get bearer token from header
	bearerToken := c.Get("Authorization")

	// split bearer token to get token
	bearerTokenSplit := strings.Split(bearerToken, " ")
	if len(bearerTokenSplit) == 2 {
		tokenString = bearerTokenSplit[1]
	} else {
		return models.User{}, errors.New("Invalid bearer token")
	}

	if tokenString == "" {
		// return unauthorized
		return models.User{}, errors.New("Invalid bearer token")
	}

	var err error
	// parse token with secret key
	token, err = jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
		return []byte(util.JWT_SECRET_KEY), nil
	})

	if err != nil {
		return models.User{}, err
	}

	if token == nil {
		return models.User{}, errors.New("Invalid bearer token")
	}

	// validate expiration
	if !token.Valid {
		return models.User{}, errors.New("Invalid bearer token")
	}

	// validate claims
	claims := token.Claims.(jwt.MapClaims)

	if claims["exp"] == nil {
		return models.User{}, errors.New("Invalid bearer token")
	} else {
		exp := claims["exp"]
		// convert exp to int64
		expInt64 := int64(exp.(float64))
		if expInt64 < time.Now().Unix() {
			return models.User{}, errors.New("Invalid bearer token")
		}
	}

	// check if user exists in database with ID
	user, err := util.GetUserByID(uint(claims["id"].(float64)))
	if err != nil {
		return models.User{}, err
	}

	return user, nil
}
