# Dojo React - Product cart

This dojo is the perfect opportunity to practice listing, state management, forms, and events!

To start, clone this repository and set your current directory inside the correspondent folder.

## Launch the application

```sh
$ npm install && npm start
```

## Objective

The overall goal is to create a small React application to manage a basket of products.

![Final Application Screenshot](https://i.imgur.com/TRUaDKk.png)

Take a look at 'App.css' to use **only** existing classes to style the  application,

Tip: *As usual*, keep your console open during development, so you don’t miss any warning or error:)

## Dojo Instructions

### Step

In App.js you have a few examples of products in the initialProductList constant.

You must display these 3 products in a table that will have the columns:
- 'Product' (`name')
- 'Unit price' (`price')
- 'Quantity' (`quantity')
- 'Total price' ('price * quantity)

#### Step 2: Change the quantity of a product in the list

In the table, the 'Quantity' column should contain only `input>' (think of the right type of input, with consistent constraints such as quantity):
- These inputs must be **controlled by React**.
- Product data will need to be managed in the state.
- The total price of the item should update automatically

## To deepen (bonus steps)

#### Step 3: View Order Total

Below the table, display the total amount of the basket, which is calculated by summing the total prices (price * quantity) of the items in the basket.

Tip: You can use [reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce).

### Step 4: Remove a product from the list

As soon as a quantity of 0 is entered, a 'window.confirm' pop-up appears asking the user "Are you sure you want to remove this product from the list?":
- If he confirms, we do (no kidding!).
- Otherwise, its quantity entry (0) is canceled (nothing happens, the quantity is not updated).

#### Step 5: Adding a product to the list

Create a form to add a product:
- This will contain two fields: 'Name' and 'Price', and an 'Add' button.
- As soon as you want to add a product, you must ensure that the name is present and that the quantity has a consistent value (think of the HTML5 input constraints!).
- By default, a new product in the list will have a quantity of 1.
- A new product must have a randomly generated identifier ('id') at the time of creation.# dojo-react-product-cart
# dojo-react-product-cart
