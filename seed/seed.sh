#!/bin/bash

# This script will seed the database with test data.
# It will create all attractions and some test tickets.

echo "Seeding the database..."

for file in seed/attractions/*.json; do
    echo "Seeding $file"
    curl -X POST -H "Content-Type: application/json" -d @$file http://localhost:8000/api/v1/attractions
done

for file in seed/tickets/*/*.json; do
    echo "Seeding $file"
    curl -X POST -H "Content-Type: application/json" -d @$file http://localhost:8000/api/v1/tickets
done

echo "Database seeded."
