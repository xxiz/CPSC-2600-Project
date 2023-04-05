#!/bin/bash

# install dependencies
cd backend
# setup .env file
rm .env
tee .env <<EOF
MONGO_URI=mongodb+srv://admin:9RQSdxqZaiC08aBT@salesscout.jjpvicz.mongodb.net/?retryWrites=true&w=majority
CORS_ORIGIN= http://localhost:8080
PORT=3541
EOF
# install dependencies
npm install
# setup tmux session
tmux new-session -d -s backend_cpsc2600 'npm run prod'

# setup frontend
cd ../frontend
# install dependencies
npm install
# setup tmux session
tmux new-session -d -s frontend_cpsc2600 'npm run prod'