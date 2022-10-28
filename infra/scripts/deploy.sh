#!/bin/sh
 # The environment where we want to deploy (release or prod)
 envr="$1"

 if [ -d ~/.ssh ]; then
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
     echo ""
=======
     echo "already exists"
>>>>>>> 34a778e (Set up infra as code)
=======
     pass
>>>>>>> 933d5d6 (Update deploy script and remove volume code for front)
=======
     echo ""
>>>>>>> d403505 (Update deploy script and compose.yml for prod)
=======
     echo ""
>>>>>>> a584e821a7aee8a69ef870781d3a7bb3e50d105c
 else
   mkdir ~/.ssh && chmod 0700 ~/.ssh 
   ssh-keyscan -t rsa -H 45.155.170.65 >> ~/.ssh/known_hosts
 fi    
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

ssh -o StrictHostKeyChecking=no -l donald 45.155.170.65 "docker compose -f ./app/frontend/${envr}/compose.yml down --rmi all"
=======

<<<<<<< HEAD
if [ "$envr" = "release" ]; then
  ssh -o StrictHostKeyChecking=no -l donald 45.155.170.65 "docker compose -f ./app/frontend/release/compose.yml down --rmi all"
else
  ssh -o StrictHostKeyChecking=no -l donald 45.155.170.65 "docker compose -f ./app/frontend/prod/compose.yml down --rmi all"
fi
>>>>>>> 0f90135 (Update deploy script)
=======
ssh -o StrictHostKeyChecking=no -l donald 45.155.170.65 "docker compose -f ./app/frontend/${envr}/compose.yml down --rmi all"
>>>>>>> b597065 (Update the deploy script)
=======

ssh -o StrictHostKeyChecking=no -l donald 45.155.170.65 "docker compose -f ./app/frontend/${envr}/compose.yml down --rmi all"
>>>>>>> a584e821a7aee8a69ef870781d3a7bb3e50d105c

scp -r infra/env/"${envr}" donald@45.155.170.65:~/app/frontend

ssh -o StrictHostKeyChecking=no -l donald 45.155.170.65 "chmod +x ./app/frontend/""${envr}""/start.sh"  
<<<<<<< HEAD
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
=======
                                                             
ssh -o StrictHostKeyChecking=no -l donald 45.155.170.65 "./app/frontend/""${envr}""/start.sh" 
>>>>>>> a584e821a7aee8a69ef870781d3a7bb3e50d105c
