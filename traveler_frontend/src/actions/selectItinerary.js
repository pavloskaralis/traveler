export default function selectItinerary(itinerary) {
    console.log(itinerary)
    return { type: 'SELECT_ITINERARY', itinerary}
}