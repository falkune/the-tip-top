#!/bin/sh
cd "app/frontend/release" || exit
<<<<<<< HEAD
docker compose up --build -d
=======
docker compose down
docker rmi registry.dsp-archiwebo21-ct-df-an-cd.fr/release/frontend
docker compose up --build -d  
>>>>>>> 34a778e (Set up infra as code)
