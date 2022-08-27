package models

import "gorm.io/gorm"

type User struct {
	gorm.Model
	Username   string `json:"username"`
	Name       string `json:"name"`
	Password   string `json:"password"`
	Avatar_URL string `json:"avatar_url"`
}
