class Api::ReviewsController < ApplicationController    
    before_action :require_logged_in

    def index
        @reviews = Review.all
    end

    def show
        @review = Review.find(params[:id])
    end

    def create
        @review = Review.new(review_params)

        if @review.save!
            render :show
        else
            render json: @review.errors.full_messages, status: 422 
        end
    end

    def update
        @review = Review.find(params[:id])

        if @review.update(review_params)
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end 
    end

    def destroy
        @review = Review.find(params[:id])

        if @review.destroy
            
        else
            render json: ["Invalid"]
        end
    end

    private

    def reservation_params
        params.require(:review).permit(
            :user_id,
            :restaurant_id,
            :rating_overall,
            :rating_food,
            :rating_service,
            :rating_ambience,
            :rating_value,
            :noise_level,
            :body
        )
    end
end