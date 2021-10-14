# ObeyTime

![logo](https://user-images.githubusercontent.com/43161185/133803505-31206666-48d1-4694-b725-59756ed7be78.png)

## Explanation

ObeyTime, an OpenTable clone, is an online restaurant-reservation application that allows users to search for restaurants and make reservations based on their preferences.

[Live Site](https://obeytime.herokuapp.com "ObeyTime")

![Capture](https://user-images.githubusercontent.com/43161185/133803601-7959e955-c412-40a5-9aff-fdcc62f5fd47.PNG)

## Features

### User authentication

![screenshot-1](/app/assets/images/screenshot-1.PNG)

### Find a restaurant

![screenshot-2](/app/assets/images/screenshot-2.PNG)

### Make a reservation

![screenshot-3](/app/assets/images/screenshot-3.PNG)

### Save a restaurant

![screenshot-4](/app/assets/images/screenshot-4.PNG)

### Write a review

![screenshot-5](/app/assets/images/screenshot-5.PNG)

### User profile

![screenshot-6](/app/assets/images/screenshot-6.PNG)

![screenshot-7](/app/assets/images/screenshot-7.PNG)


## Technologies

* Frontend
  * React
  * Redux
  * Amazon Web Services
* Backend
  * Ruby on Rails
  * PostgreSQL

## Code Snippet

### Backend Search and Filter

Using Active Record, it performs queries on PostgreSQL. This search is very easy to use. Let's say you were to look up 'Harvest On Hudson,' you do not need to type everything out. Simply look up the restaurant by the word 'hudson,' and it will appear. Also, you can add multiple filters to your search result. For example, if you want to look up an inexpensive grill place in SoHo, all you have to do is just search for 'grill' and apply '$' and 'SoHo' filters. 

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

### Review Stars

This function converts an integer, which is the average of overall reviews, to stars. If the average is 3.5, the stars will be in three full-filled, one half-filled, and one unfilled.

```javascript
createElements(n) {
        let elements = [];
        if ( n > 0) {
            for(let i =1; i <= n; i++){
                elements.push(<span key={i}><FontAwesomeIcon className="stars-filled" icon={fasStar} /></span>);
            }
            if (n % 1 != 0) {
                elements.push(<span key={0.5}><FontAwesomeIcon className="stars-half" icon={fasStarHalfAlt} /></span>);
            }
            for(let i = n; i <= 4; i++){
                elements.push(<span key={10+i}><FontAwesomeIcon className="stars-unfilled" icon={farStar} /></span>);
            }
        } else {
            for(let i = 0; i < 5; i++){
                elements.push(<span key={10+i}><FontAwesomeIcon className="stars-unfilled" icon={farStar} /></span>);
            }
        }
        return elements;
    }
```

### Reservations List and Sort

Instead of making two separate backend requests to get the reservations, this function can work with only one request. It separates the reservations by today's date and reverses the order so the most recent ones will stay on the top.

```javascript
const UserReservationIndex = ({ reservations, restaurants, reviews, currentUser }) => {
    const today = new Date().toISOString().slice(0, 10);

    if (!(restaurants.length && reservations.length)) return null;
    return (
        <div className="reservations">
            <div className="upcoming-reservations">
                <h2>Upcoming Reservations</h2>
                <hr />
                {reservations.slice().reverse().map(reservation => 
                    { if (reservation.user_id === currentUser.id && reservation.date >= today) 
                        return (
                            <UserReservationIndexItem
                                reservation={reservation}
                                restaurants={restaurants}
                                currentUser={currentUser}
                                key={reservation.id}
                            />  
                        )
                    } 
                )}
            </div>
            <div className="past-reservations">
                <h2>Past Reservations</h2>
                <hr />
                {reservations.slice().reverse().map(reservation => 
                    { if (reservation.user_id === currentUser.id && reservation.date < today) 
                        return (
                            <UserReservationIndexItem
                                reservation={reservation}
                                restaurants={restaurants}
                                reviews={reviews}
                                currentUser={currentUser}
                                key={reservation.id}
                            />  
                        )
                    } 
                )}
            </div>
        </div>
    )
}
```