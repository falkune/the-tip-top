#!/bin/sh
 # The environment where we want to deploy (release or prod)
 envr="$1"

 if [ -d ~/.ssh ]; then
<<<<<<< HEAD
     echo ""
=======
     echo "already exists"
>>>>>>> 34a778e (Set up infra as code)
 else
   mkdir ~/.ssh && chmod 0700 ~/.ssh 
   ssh-keyscan -t rsa -H 45.155.170.65 >> ~/.ssh/known_hosts
 fi    
<<<<<<< HEAD
<<<<<<< HEAD

ssh -o StrictHostKeyChecking=no -l donald 45.155.170.65 "docker compose -f ./app/frontend/${envr}/compose.yml down --rmi all"
=======

if [ "$envr" = "release" ]; then
  ssh -o StrictHostKeyChecking=no -l donald 45.155.170.65 "docker compose -f ./app/frontend/release/compose.yml down --rmi all && rmi -r .app/frontend/release"
else
  ssh -o StrictHostKeyChecking=no -l donald 45.155.170.65 "docker compose -f ./app/frontend/prod/compose.yml down --rmi all && rmi -r .app/frontend/prod"
fi
>>>>>>> 0f90135 (Update deploy script)

scp -r infra/env/"${envr}" donald@45.155.170.65:~/app/frontend

ssh -o StrictHostKeyChecking=no -l donald 45.155.170.65 "chmod +x ./app/frontend/""${envr}""/start.sh"  
<<<<<<< HEAD
<<<<<<< HEAD
                                                             
ssh -o StrictHostKeyChecking=no -l donald 45.155.170.65 "./app/frontend/""${envr}""/start.sh" 
=======
  
 scp -r infra/env/"${envr}" donald@45.155.170.65:~/app/frontend
=======
>>>>>>> 0f90135 (Update deploy script)
                              
ssh -o StrictHostKeyChecking=no -l donald 45.155.170.65 "chmod +x ./app/frontend/""${envr}""/start.sh"
                               
<<<<<<< HEAD
 ssh -o StrictHostKeyChecking=no -l donald 45.155.170.65 "./app/frontend/""${envr}""/start.sh" 
>>>>>>> 34a778e (Set up infra as code)
=======
ssh -o StrictHostKeyChecking=no -l donald 45.155.170.65 "./app/frontend/""${envr}""/start.sh" 
>>>>>>> 0f90135 (Update deploy script)
=======
                                                             
ssh -o StrictHostKeyChecking=no -l donald 45.155.170.65 "./app/frontend/""${envr}""/start.sh" 
>>>>>>> a29405d (Update deploy script)
