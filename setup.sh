# clone this repo
git clone git@github.com:xxiz/CPSC-2600-Project.git
# change directory to the repo
cd CPSC-2600-Project
# install dependencies
cd backend
npm install
tmux new-session -d -s backend_cpsc2600 'npm run prod'
cd ../frontend
npm install
tmux new-session -d -s frontend_cpsc2600 'npm run dev'