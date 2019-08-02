# Install
Visual Studio Code 
Node
npm install -g yarn (restart)

PATH Environmental variables C:\Users\p1e\AppData\Local\Yarn\bin\

yarn global add live-server
yarn global add react
yarn global add babel-cli@6.24.1
yarn init
yarn add babel-preset-react@6.24.1 babel-preset-env@1.5.2

# Create node-dependecy
yarn install

# EXECUTION
c:
cd C:\Users\p1e\Documents\React\indecision-app
live-server public

c:
cd C:\Users\p1e\Documents\React\indecision-app
babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

cd C:\Users\p1e\Documents\React\indecision-app
yarn install
yarn run dev-server