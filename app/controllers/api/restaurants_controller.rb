class Api::RestaurantsController < ApplicationController    
    def index
        restaurants = Restaurant.all

        if params[:price]
            restaurants = Restaurant.where('price_range IN (?)', params[:price])
        end
        if params[:cuisine]
            restaurants = restaurants.where('cuisine IN (?)', params[:cuisine])
        end
        if params[:neighborhood]
            restaurants = restaurants.where('neighborhood IN (?)', params[:neighborhood])
        end
        
        @restaurants = restaurants
        render :index 
    end

    def show
        @restaurant = Restaurant.find_by(id: params[:id]) 
        render :show 
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