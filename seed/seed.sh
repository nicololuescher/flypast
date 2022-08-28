#!/bin/bash

# This script will seed the database with test data.
# It will create all attractions and some test tickets.

echo "Seeding the database..."

# check if http://api:8000/ping is up
while ! curl -s http://api:8000/ping; do
    echo "Waiting for API to be up..."
    sleep 1
done

for file in ./attractions/*.json; do
    # color orange
    echo -e "\e[38;5;214m$file\e[0m"
    curl -X POST -H "Content-Type: application/json" -d @$file http://api:8000/api/v1/attractions
done

for file in ./tickets/*/*.json; do
    echo -e "\e[38;5;214m$file\e[0m"
    curl -X POST -H "Content-Type: application/json" -d @$file http://api:8000/api/v1/tickets
done

for file in ./activities/*.json; do
    echo -e "\e[38;5;214m$file\e[0m"
    curl -X POST -H "Content-Type: application/json" -d @$file http://api:8000/api/v1/activities
done

if [ $? -eq 0 ]; then
    # color green
    echo -e "\e[32mSeeding successful\e[0m"
else
    # color red
    echo -e "\e[31mSeeding failed\e[0m"
fi
