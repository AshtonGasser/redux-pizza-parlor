
header - 
<text> Select your pizza <text>


components 

---NavBar---
Routes + links

-----Menu -----

X   get request from db to get menu
X ?   map over dbresponse and display a card for each menu item 

Tonight tucker ---conditional render add and remove, which either adds or removes from cart reducer?


next button ->  customer info

add menu items (objects w/ ID + Quant) to orderObject (.push to cartReducer.pizzas)

already returns line 46 in readme

----- customer ----
inputs name address city zip (match the Json on line 56 in readme)
radio for pick or delivery 

^^
**Post Data** should be an object that contains user information, *customer name*, *street address*, *city*, *zip*, *order_total* and an array of pizza id's as object. 


---checkout---
display customer info
order details, from cart reducer
total cost

post data should be named postData

post axios 

XX - Store -(
XX _reducers -
[] cartReducer (customer details) default state object {empty properties}
menuReducer - is the db response from the get (pageLoad)

)


standup -- cost component, form front, explain how items are passed into cart
customer info reducer?