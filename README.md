# ObeyTime

![logo](https://user-images.githubusercontent.com/43161185/133803505-31206666-48d1-4694-b725-59756ed7be78.png)

## Explanation

ObeyTime, an OpenTable clone, is an online restaurant-reservation application that allows users to search for restaurants and make reservations based on their preferences.

[Live Site](https://obeytime.herokuapp.com "ObeyTime")

![Capture](https://user-images.githubusercontent.com/43161185/133803601-7959e955-c412-40a5-9aff-fdcc62f5fd47.PNG)

## Features

### User authentication

![screenshot-1](/app/assets/screenshot-1.PNG)

### Find a restaurant

![screenshot-2](/app/assets/screenshot-1.PNG)

### Make a reservation

![screenshot-3](/app/assets/screenshot-1.PNG)

### Save a restaurant

![screenshot-4](/app/assets/screenshot-1.PNG)

### Write a review

![screenshot-5](/app/assets/screenshot-1.PNG)

### User profile

![screenshot-6](/app/assets/screenshot-1.PNG)

![screenshot-7](/app/assets/screenshot-1.PNG)


## Technologies

* Frontend
  * React
  * Redux
  * Amazon Web Services
* Backend
  * Ruby on Rails
  * PostgreSQL

## Code Snippet

###

```ruby
  def index
    if params[:search]
      restaurants = Restaurant.where('lower(cuisine) like ? OR lower(neighborhood) like ? OR lower(name) like ?',
        "%#{params[:search].downcase}%",
        "%#{params[:search].downcase}%",
        "%#{params[:search].downcase}%"
        )
    else
      restaurants = Restaurant.all
    end
        
    restaurants = restaurants.where('price_range IN (?)', params[:price]) if params[:price]
    restaurants = restaurants.where('cuisine IN (?)', params[:cuisine]) if params[:cuisine]
    restaurants = restaurants.where('neighborhood IN (?)', params[:neighborhood]) if params[:neighborhood]
        
    @restaurants = restaurants
  end
```