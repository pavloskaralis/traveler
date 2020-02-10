export default function removeItinerary(id) {
    console.log('inside remove itinerary', id)
    return { type: 'REMOVE_ITINERARY', id }
}