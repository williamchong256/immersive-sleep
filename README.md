# immersive-sleep

Repo for BMES Immersive Sleep Device Design Team!

## Instructions

### Note: Each step should be done in a separate terminal

Step 1: backend setup

```bash
cd backend
npm install
npm start
```

Step 2: frontend setup

```bash
cd frontend
npm install
npm install --global expo-cli
expo start
```

If the tab icons fail to load, try running expo with the Metro bundler cache cleared.

`expo start -c`

## Before Pushing Code

Step 1: ensure your code passes tests and style

`npm run test`

Step 2: if your code fails style, you can try to automatically fix it

`npx eslint '**/*.js' '**/*.jsx' --fix`
