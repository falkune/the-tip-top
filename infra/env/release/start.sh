#!/bin/sh
cd "app/frontend/release" || exit
docker compose down
docker rmi registry.dsp-archiwebo21-ct-df-an-cd.fr/release/frontend
docker compose up --build -d  