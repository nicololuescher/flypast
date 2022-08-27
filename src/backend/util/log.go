package util

import (
	"log"
	"os"
)

var (
	WarningLogger *log.Logger
	InfoLogger    *log.Logger
	ErrorLogger   *log.Logger
	Status        HealthStatus
	MAX_REQUESTS  int
	Red           = "\033[31m"
	Orange        = "\033[33m"
	Green         = "\033[32m"
	White         = "\033[37m"
)

type HealthStatus string

const (
	OK   HealthStatus = "OK"
	WARN HealthStatus = "WARN"
	ERR  HealthStatus = "ERR"
)

// InitLoggers initializes the loggers
func InitLoggers() {
	// Convenience logger for warning, info and error messages with color
	InfoLogger = log.New(os.Stdout, Green+"[INFO]  ", log.Ldate|log.Ltime|log.Lshortfile)
	WarningLogger = log.New(os.Stdout, Orange+"[WARN]  ", log.Ldate|log.Ltime|log.Lshortfile)
	ErrorLogger = log.New(os.Stderr, Red+"[ERROR] ", log.Ldate|log.Ltime|log.Lshortfile)
}

// GetStatus returns the status of the application startup
func GetStatus() HealthStatus {
	return Status
}
