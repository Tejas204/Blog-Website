# Blog website

![](src/Images/UI.png)
![](src/Images/blog-website-laptop.png)
![](src/Images/Blogs-page.png)

This is a simple blog website where users can post their blogs in various categories. This website is designed using ReactJS, React Router Dom for
navigation, Firebase for authentication and Tailwind CSS for styling. 

## Features

1. Create a new blog
2. Add comments
3. Sort the blogs according in ascending & descinding order, date of creation and reading time
4. Filter the blogs based on category.

## How to run?

1. Clone the repository
2. ```npm i``` -- Running this command on the command line will install all the requisite dependencies which include:
      - React Router DOM
      - Tailwind CSS
      - React icons
3. ```num run start``` -- Command to start the project

## Details

In this project, you will run into:

### `React JS`

React is a free and open-source front-end JavaScript library for building user interfaces based on components.

### `useState Hook`

useState is a Hook that lets you add React state to function components. This react hook is used for a lot of different purposes in this project. Some of them are:
1. Passing values between components
2. Sorting the blogs
3. Responsive design

### `useEffect Hook`

The useEffect hook is used to pass data when certain variables are updated. For example, when a new blog is created, the useEffect hook will triggers to get the length of the array of blogs to render.

### `React Router DOM`

This package is utilized for creating routes so that user can navigate to the login page, blogs page, create blog page, etc. The ```Navlink``` tag proves to be useful not only for navigating to the desired page but also to transfer data from one page to another.

### `Tailwind CSS`

This web app uses tailwind css for styling.

### `HTML`

Well, you cannot get anywhere without the basics.
