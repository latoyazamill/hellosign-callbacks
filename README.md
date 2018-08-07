# HelloSign Callbacks App with Node.js
An app created for callbacks with NGROK.

## Getting Started

The app uses a simple file structure for an Express web app server that renders views using EJS templates.

```sh
public/               # static assets
src/
  models/            # database actions
    db/                 # database schema, queries, and connections
  server/            # server actions (e.g. data CRUD)
    routes/             # express routes
  views/              # html templates
```

### Installing your dependencies

Run the following command in the terminal:
`$ npm install`

### Starting your development server

Run the following command in the terminal:
`$ npm start`
