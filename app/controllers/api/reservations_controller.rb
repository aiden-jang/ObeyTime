class Api::ReservationsController < ApplicationController    
    before_action :require_logged_in

    def index
        @reservations = Reservation.all
    end

    def show
        @reservation = Reservation.find(params[:id])
    end

    def create
        @reservation = Reservation.new(reservation_params)

        if @reservation.save!
            render :show
        else
            render json: @reservation.errors.full_messages, status: 422 
        end
    end

    def update
        @reservation = Reservation.find(params[:id])

        if @reservation.update(reservation_params)
            render :show
        else
            render json: @reservation.errors.full_messages, status: 422
        end 
    end

    def destroy
        @reservation = Reservation.find(params[:id])

        if @reservation.destroy
            
        else
            render json: ["Invalid"]
        end
    end

    private

    def reservation_params
        params.require(:reservation).permit(
            :user_id,
            :restaurant_id,
            :phone_number,
            :email,
            :party_size,
            :date,
            :time,
            :special_request
        )
    end
end