# Night Owl (phase-3 final-project)

## Introduction

My name is Mordechai Wein. This App has a frontend written in React and a backend written in Ruby. The app contains two database tables. These tables have a has many relationship. The backend of this project utilizes classes and instances as well as ActiveRecord and Sinatra for complete CRUD capability.

## Description 

People awake all night need an app to tell them where open stores are. So I decided to make an app to serve this purpose. So now, nocturnal individuals can run out and satisfy those late-night cravings.

My app has a store and an item model. Each refers to a database table I created. The stores and items tables have a has many relationship. For the store database, there are both read and get Sinatra routes. Also, there are full CRUD routes for the items endpoint.

On the frontend, the app has a friendly home page and a store page. There is a form to post a new store to the store's table on the store page. Each store is listed below this form. Clicking on any store will dynamically render the store's information as well as all of the store's items.

With the help of some CSS, each item is represented on an individual card. The card presents the item's name, image, and price. Below the price is an out-of-stock button. Clicking this button will erase the item from the page and the database. Each card also contains an edit form to edit the item price. Typing a new price will patch the data and update the price. Finally, on the top of the page, there is a form to add an item to the webpage.

When the new item is posted to the items endpoint, it will automatically be associated with the correct store and be added to the page as one of the store's items.

Here is a link to the frontend of my project:
https://github.com/MordechaiWein/My-Sinatra-React-Front-end

## Credit 

Much of the CSS in my project was adapted from Flatiron School labs. This includes the styling of my form, listing cards, and NavLinks. For this, I would like to give credit to Flatiron School.
