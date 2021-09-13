json.partial! "restaurant", restaurant: @restaurant
if @restaurant.photo.attached? 
    json.photoUrl url_for(@restaurant.photo)
else
    json.photoUrl ""
end