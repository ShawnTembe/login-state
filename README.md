
# Login Credentials
username: test@test.com
password: 123456

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
login functionality at minimum the submit method
reducer, effect, and selectors
test your login form

# What to improve
Validation can be made more stronger by adding more validators on the password, exapmple carractors and numbers, Indicate password strength requirements. Email address can have a service that send an email to the user for verification/notification to confirm that they are the correct person when they register. We can aso add a feature of "Remember me" for user experience. Allow users to retrieve forgotten password and username by creating links and fuctionality that will allow them to do that. We can also dispay helpful error messages to help users navigate when they have accidentaly enter the wrong information. We can also allow social media login. Warn users of Cap Lock when its on. Indicate to yo users how many attempts they have before their account is locked. Add the option to show/hide password. Validate user information from server and on the client side. A few ideas to optimize the login page: 1. ChangeDetectionStrategy.OnPush, 2. Detaching the Change Detector, 3. Local Change Detection, 4. Run outside Angular, 5. Use pure pipes, 6. Use trackBy option for *ngFor directive, 7. Optimize template expressions, 8. Web Workers, 9. Lazy-Loading

# LoginPage

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.0-next.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.


## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
