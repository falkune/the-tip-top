#!/bin/sh
<<<<<<< HEAD
<<<<<<< HEAD
cd "app/frontend/prod" || exit
docker compose up --build -d  
=======
ls
>>>>>>> 34a778e (Set up infra as code)
=======
cd "app/frontend/prod" || exit
docker compose down
docker rmi registry.dsp-archiwebo21-ct-df-an-cd.fr/stable/frontend
docker compose up --build -d  
>>>>>>> e955586 (Update infra folders)
