Live Link: https://traveler-planning-app.herokuapp.com/

Purpose: Traveler was created to provide users with a platform for creating and planning trip itineraries with friends. Once created, an itinerary deploys two types of tables: the planning table where a group can input and gage interest in a specific activity, and the scheduling table, which renders for each trip date and allows users to sequence their activities. 

Technologies: React, React-Router-Dom, Redux-Thunk, Styled-Components, Ruby on Rails, PostgreSQL, Bcrypt, Axios

Backend Overview: The app’s back-end was created with Ruby on Rails, and employs PostgreSQL for its database. Given that an itinerary can be shared between multiple users, these backend models are formatted for many to many relationships. Furthermore, there exists one to many relationships between an itinerary and its planning/scheduling rows. Finally, through an authentication controller Bcrypt is used to validate a client’s JWT. 

Frontend Overview: Traveler is exemplary of an advanced React application, as in addition to Create-React-App, it employs React-Router-Dom, Redux-Thunk, and Styled Components to build a dynamic and maintainable frontend. In total, the app comprises of 32 actions, 11 reducers, and 12 components. To best explain the interaction between these elements, each component will be summarized below. 

App: when mounted dispatches userSetup – an action which checks JWT authentication, and populates the Redux Store if validated. Also contains a Switch route matcher with a conditional that prevents the Index and Show pages from rendering for unauthenticated clients.  

Button: a reusable button component that deploys various onClick functions within a user’s tool container. 

Dropdown: a conditionally rendered dropdown menu that allows a user to signup, login, return to itineraries, or log out depending on whether the client is authenticated. Rather than having to re-click the hamburger icon, the app is configured to close the dropdown on any off focus click. 

Form: a massive reusable component for all existing application forms. On the home page, it renders as either a login or signup form, dispatching the logIn and signUp actions. On the index page, it renders as either a create or edit form for itineraries. Dispatched from these forms are the postItinerary and putItinerary actions, which utilize Date objects, regex, and various conditionals to populate an array of itinerary dates based on a user’s departure date and return date inputs. Finally, on the show page it renders as either a share or remove form, dispatching the postLookup and deleteItinerary actions; postLookup essentially creates a new data row within the PostgreSQL Lookup Table that joins the itinerary with the added user, while deleteItinerary either removes a relationship from the Lookup Table, or entirely deletes an itinerary if no other users are attached. Like the dropdown menu, the app is configured to close the form on any off focus click.  

Home: a dynamically laid out and layered component visible only to unauthenticated clients; contains buttons to render the signup and login forms. 

Index: essentially an index page that renders all existing itineraries associated with a given user.  This component also has an empty state which alerts a user when no itineraries have been created.

Itinerary: renders within the index component and represents an existing itinerary. Allows the user to see an itinerary’s location, start date, end date, and whether it is shared with other users. Furthermore, houses the edit button should the user want to change the location or dates. On click, this component initiates the show page by passing the current user’s ID and itinerary ID as URL parameters, and dispatches the selectItinerary action.

Nav: visible to all clients and houses the Dropdown component. When the show page is accessed, the site title will change to ‘Loading’ until the data is fully rendered. Once complete, the title will change to the itinerary’s location. 

Row: a conditionally rendered component that renders planning and scheduling rows on the show page. When rendered as a planning row, it contains an interest button that allows a user to record their interest in an activity (place’s their user id into an array), and a scheduling button that allows it to be placed on a scheduling table from the planning table. As a scheduling row, there exists a cancellation button that removes it from the scheduling table. Finally, the Row component is coded to dispatch a put request and re-render whenever modified, so that all data is retained should the user toggle tables or return to the index page. 

Search: exists within the tools component as another conditionally rendered element. When on the index page, appears as a search bar that filters itineraries based on the query input. On the show page, appears as a dropdown input to toggle between the planning and scheduling tables. 

Show: serves as a show page which renders all rows associated with an itinerary. On mount, it checks to see if the URL parameter matches the accessing user’s ID to prevent unauthorized access. Furthermore, it filters rows depending on the current table selected within the Redux Store and sorts them by creation (planning table) or time (scheduling table). Like the index page, it contains an empty state that alerts a user if a scheduling table has no activities scheduled. There also exists a create row button should the user run out of space on the planning table, or want to manually add an activity to a scheduling table. 

Tools: conditionally renders depending on whether the index or show page is accessed. On the index page displays a search bar and an itinerary create button, while on the show page it deploys a return to index page button, a toggle table dropdown, a share itinerary button, and a remove itinerary button. 
