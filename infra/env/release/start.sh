#!/bin/sh
cd "app/frontend/release" || exit
docker compose down --rmi all
docker compose up --build -d  