@restaurants.each do |restaurant|
    json.set! restaurant.id do 
        json.partial! "restaurant", restaurant: restaurant
        if restaurant.photo.attached?
            json.photourl url_for(restaurant.photo)
        else
            json.photourl ""
        end
    end
end