class Api::RestaurantsController < ApplicationController    
    def index

        if params[:search]
            restaurants = Restaurant.where('lower(cuisine) like ?', "%#{params[:search].downcase}%")
            .or(Restaurant.where('lower(neighborhood) like ?', "%#{params[:search].downcase}%"))
            .or(Restaurant.where('lower(name) like ?', "%#{params[:search].downcase}%"))
        else
            restaurants = Restaurant.all
        end
        if params[:price]
            restaurants = restaurants.where('price_range IN (?)', params[:price])
        end
        if params[:cuisine]
            restaurants = restaurants.where('cuisine IN (?)', params[:cuisine])
        end
        if params[:neighborhood]
            restaurants = restaurants.where('neighborhood IN (?)', params[:neighborhood])
        end
        
        @restaurants = restaurants
    end

    def show
        @restaurant = Restaurant.find(params[:id]) 
    end

    private 

    def restaurant_params
        params.require(:restaurant).permit(
            :name,
            :address,
            :phone_number,
            :hours,
            :payment_option,
            :price_range,
            :cuisine,
            :neighborhood,
            :parking_details,
            :dining_style,
            :description
        )
    end
end