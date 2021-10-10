class Api::FavoritesController < ApplicationController    
    before_action :require_logged_in

    def index
        @favorites = Favorite.all
    end

    def create
        @favorite = Favorite.new(favorite_params)

        if @favorite.save!
            render :show
        else
            render json: @favorite.errors.full_messages, status: 422 
        end
    end

    def destroy
        @favorite = Favorite.find(params[:id])

        if !@favorite.destroy
            render json: ["Invalid"]
        end
    end

    private

    def favorite_params
        params.require(:favorite).permit(
            :user_id,
            :restaurant_id,
        )
    end
end