#!/bin/bash

# This script will seed the database with test data.
# It will create all attractions and some test tickets.

echo "Seeding the database..."

for file in ./attractions/*.json; do
    echo "Seeding $file"
    curl -X POST -H "Content-Type: application/json" -d @$file http://localhost:8000/api/v1/attractions
done

for file in ./tickets/*/*.json; do
    echo "Seeding $file"
    curl -X POST -H "Content-Type: application/json" -d @$file http://localhost:8000/api/v1/tickets
done

for file in seed/activities/*/*.json; do
    echo "Seeding $file"
    curl -X POST -H "Content-Type: application/json" -d @$file http://localhost:8000/api/v1/activities
done

echo "Database seeded."
