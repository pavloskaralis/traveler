class ItinerariesChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    stream_from 'itineraries'
  end
end
