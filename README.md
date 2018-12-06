# SASS & TinyPNG WEBSITE FRAMEWORK



## Getting Started

This is a simple website framework, that is run using: 
* NPM 
* GULP
* SASS
* TinyPNG


It has the following folder structure once setup:

* SRC folder: for pre-processed files 
  - styles
    - build
    - Vendors 
  - js
    - build
    - Vendors
  - img 

* TMP folder: for the local development server 
  - styles
    - build
    - Vendors 
  - js
    - build
    - Vendors
  - img 

* DIST folder: for processed and minified files


### Prerequisites

What things you need to install the software and how to install them

```
npn gulp 3.9.1
```

```
npn gulp-inject 5.0.0
```

```
npn gulp-webserver 0.9.1
```

```
npn gulp-htmlclean 2.7.22
```

```
npn gulp-clean-css 3.10.0
```

```
npn gulp-concat 2.6.1
```

```
npn gulp-uglify 3.0.1
```

```
npn gulp-sass 4.0.2
```

```
npn gulp-tinify 1.0.2
```

```
npn delete
```


### Installing

Clone or download the repo

```
https://github.com/joshwb82/non-sass-website-framework
```

Install Gulp

```
npm install gulp --save-dev
```

Install Gulp inject

```
npm install gulp-inject --save-dev
```

Install Gulp web server

```
npm install gulp-webserver --save-dev
```

Install Gulp html clean

```
npm install gulp-htmlclean --save-dev
```

Install Gulp clean css

```
npm install gulp-clean-css --save-dev
```

Install Gulp concat

```
npm install gulp-concat --save-dev
```

Install Gulp uglify

```
npm install gulp-uglify --save-dev
```

Install gulp delete

```
npm install del --save-dev
```

Install gulp TinyPNG

```
npm install gulp-tinify --save-dev


Install gulp sass

```
npm i gulp-sass --save-dev



## Running the tests

To check that it has all been setup correctly. 

Type **npm install** which will install all your NPM moduales

Once you have installed all the dependencies type **gulp** into the terminal.

This will run all the required dependencies.

Go to http://localhost:3000/ in your browser, you will now be able to see any changes you make to the files inside src folder.

The gulp command will also create the **tmp** file which will create the development version of the contents of **src** folder.

NOTE
**ctrl c** will stop the watch and server

If you are uploading the new site to a new repo and you want to remove the **tmp** and **dist** folders from the project you just need to type **gulp clean**  


## Deployment

To deploy the site run **gulp build** in terminal and it will create a **dist** folder inside the root folder where it will save all the production ready code. all the files will be minified, and images will be run through TinyPNG.


## Versioning

**Version 1**
First stable version of code


## Authors

**Joshua Winterbottom** - https://github.com/joshwb82


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details


## Acknowledgments

This template was built in part by using the following sites:
* https://hackernoon.com/how-to-automate-all-the-things-with-gulp-b21a3fc96885
* https://css-tricks.com/gulp-for-beginners/  

