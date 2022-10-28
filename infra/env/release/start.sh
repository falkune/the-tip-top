#!/bin/sh
cd "app/frontend/release" || exit
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
docker compose up --build -d
=======
docker compose down
docker rmi registry.dsp-archiwebo21-ct-df-an-cd.fr/release/frontend
docker compose up --build -d  
>>>>>>> 34a778e (Set up infra as code)
=======
docker compose down --rmi all
docker compose up --build -d  
>>>>>>> 5fb08fb (Add COMPOSE_PROJECT ENV in release, remove YUP)
=======
docker compose up --build -d
>>>>>>> 0f90135 (Update deploy script)
=======
docker compose up --build -d
>>>>>>> a584e821a7aee8a69ef870781d3a7bb3e50d105c
