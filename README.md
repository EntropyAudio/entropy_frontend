# EntropyFrontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Firebase
RUN `firebase deploy`

## Deploying to GHP

export GH_TOKEN=...

ng build --configuration production --base-href /

npx angular-cli-ghpages --dir=dist/entropy-frontend/browser --no-silent
