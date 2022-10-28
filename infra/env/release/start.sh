#!/bin/sh
cd "app/frontend/release" || exit
docker compose up --build -d