class Api::RestaurantsController < ApplicationController    
    def index
        if params[:search].downcase == 'new york city' 
            restaurants = Restaurant.all
        elsif params[:search]
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