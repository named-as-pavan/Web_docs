---
title: JavaScript Documentation
description: Comprehensive guide to JavaScript
slug: javascript
date: 25-09-2004
author: Pavan
image: js.svg
---

# Introduction to JavaScript

JavaScript is a programming language that adds interactivity to your website. It allows you to create dynamic content, control multimedia, animate images, and much more.
This chapter introduces JavaScript and discusses some of its fundamental concepts.

What you should already know
This guide assumes you have the following basic background:

A general understanding of the Internet and the World Wide Web (WWW).
Good working knowledge of HyperText Markup Language (HTML).
Some programming experience. If you are new to programming, try one of the tutorials linked on the main page about JavaScript.
Where to find JavaScript information
The JavaScript documentation on MDN includes the following:

Learn Web Development provides information for beginners and introduces basic concepts of programming and the Internet.
JavaScript Guide (this guide) provides an overview about the JavaScript language and its objects.
JavaScript Reference provides detailed reference material for JavaScript.
If you are new to JavaScript, start with the articles in the learning area and the JavaScript Guide. Once you have a firm grasp of the fundamentals, you can use the JavaScript Reference to get more details on individual objects and statements.

What is JavaScript?
JavaScript is a cross-platform, object-oriented scripting language used to make webpages interactive (e.g., having complex animations, clickable buttons, popup menus, etc.). There are also more advanced server side versions of JavaScript such as Node.js, which allow you to add more functionality to a website than downloading files (such as realtime collaboration between multiple computers). Inside a host environment (for example, a web browser), JavaScript can be connected to the objects of its environment to provide programmatic control over them.

JavaScript contains a standard library of objects, such as Array, Date, and Math, and a core set of language elements such as operators, control structures, and statements. Core JavaScript can be extended for a variety of purposes by supplementing it with additional objects; for example:

Client-side JavaScript extends the core language by supplying objects to control a browser and its Document Object Model (DOM). For example, client-side extensions allow an application to place elements on an HTML form and respond to user events such as mouse clicks, form input, and page navigation.
Server-side JavaScript extends the core language by supplying objects relevant to running JavaScript on a server. For example, server-side extensions allow an application to communicate with a database, provide continuity of information from one invocation to another of the application, or perform file manipulations on a server.
This means that in the browser, JavaScript can change the way the webpage (DOM) looks. And, likewise, Node.js JavaScript on the server can respond to custom requests sent by code executed in the browser.


## Table of Contents

1. [Basics]
2. [DOM Manipulation]
3. [Events]
4. [ES6 Features]
5. [Asynchronous JavaScript]
6. [APIs]
7. [Best Practices]
8. [Resources]

## Basics

JavaScript basics include variables, data types, and functions.

### Variables

Variables store data values. Example:

```js showLineNumbers {2}
let name = 'John';
const age = 30;
var isMarried = false; 
### Syntax
```

##  Javascript

```js showLineNumbers {3}
function greet(name) {
    return `Hello, ${name}!`;
}
```


```js
let element = document.getElementById('myElement');
```

```js
element.textContent = 'New Content';
element.style.color = 'blue';
```


```js
element.addEventListener('click', function() {
    alert('Element clicked!');
});
```


const add = (a, b) => a + b;



let greeting = `Hello, ${name}!`;




let [a, b] = [1, 2];
let {name, age} = {name: 'John', age: 30};



function fetchData(callback) {
    setTimeout(() => {
        callback('Data fetched');
    }, 1000);
}


let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Data fetched');
    }, 1000);
});



async function fetchData() {
    let data = await promise;
    console.log(data);
}



fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => console.log(data));


### Error Handling

try {
    // code that may throw an error
} catch (error) {
    console.error(error);
}
