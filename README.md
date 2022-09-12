# DemoProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Production deployment steps AWS EC2


1.  ssh -i "dipenec2.pem" ec2-user@ec2-3-86-161-122.compute-1.amazonaws.com(Connect to AWS console)
2. scp -i Download/dipenec2.pem -r /Users/hirdhanj/Desktop/Projects/Angular_POC/dist/* ec2-user@ec2-3-86-161-122.compute-1.amazonaws.com (To copy files from local to Server) run this in separate console.
3. sudo yum install nginx (Instal Nginx package)
4. sudo systemctl start nginx
5. systemctl status nginx.service -l (To check connection status)
6. sudo vim /etc/nginx/nginx.conf ( Need to modify config file)
7. Replace “root” with below code:
location /{
        root /home/ec2-user/demo-project;  (demo-project is build project folder name)
        }

## Extra command useful to fix issues
sudo systemctl start nginx
sudo systemctl reload nginx
sudo systemctl restart nginx


netstat -ltnp | grep :80 // To check process running on perticular port
sudo kill -9 2910
