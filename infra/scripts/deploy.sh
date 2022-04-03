#!/bin/sh
 # The environment where we want to deploy (release or prod)
 envr="$1"

 if [ -d ~/.ssh ]; then
     echo "already exists"
 else
   mkdir ~/.ssh && chmod 0700 ~/.ssh 
   ssh-keyscan -t rsa -H 45.155.170.65 >> ~/.ssh/known_hosts
 fi    
  
 scp -r infra/env/"${envr}" donald@45.155.170.65:~/app/frontend
                              
 ssh -o StrictHostKeyChecking=no -l donald 45.155.170.65 "chmod +x ./app/frontend/""${envr}""/start.sh"
                               
 ssh -o StrictHostKeyChecking=no -l donald 45.155.170.65 "./app/frontend/""${envr}""/start.sh" 