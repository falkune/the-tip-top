#!/bin/sh
cd "app/frontend/prod" || exit
docker compose down
docker rmi registry.dsp-archiwebo21-ct-df-an-cd.fr/stable/frontend
docker compose up --build -d  