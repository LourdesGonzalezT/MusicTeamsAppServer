# MusicTeamsAppServer

#### Auth Routes

  Base URL /auth


| HTTP Method | URI path | Description        |
| :---------- | :------- | :----------------- |
| POST        | /signup  |  Signup user       |
| POST        | /login   |  Login user        |
| GET         | /verify  |  Verify Auth token |


#### User Routes
  Base URL /users


| HTTP Method | URI path                             | Description                |
| :---------- | :----------------------------------- | :------------------------- |
| GET         | /getAllUsers                         | All Users list             |
| POST        | /newUser                             | Create new user            |
| GET         | /:user_id                            | Matching ID user details   |
| PUT         | /:user_id/edit                       | Matching ID user edition   |
| PUT         | /:user_id/addVenueFavorite/:venue_id | Add favorite Venue         |
| PUT         | /:user_id/addFriend/:friend_id       | Add Friend to your Profile |
| PUT         | /:user_id/assitEvent/:event_id       | Assit Event                |
| DELETE      | /:user_id/changeRole                 | Change Role                |



#### Venue Routes
  Base URL /venues


| HTTP Method | URI path           | Description                |
| :---------- | :----------------- | :------------------------- |
| GET         | /getAllVenues      | All Venues list            | 
| POST        | /newVenue          | Create new venue           |
| GET         | /:venue_id         | Matching ID venue details  |
| PUT         | /:venue_id/edit    | Matching ID venue edition  |
| DELETE      | /:venue_id/delete  | Matching ID venue deletion |


#### Event Routes
  Base URL /events


| HTTP Method | URI path                    | Description                |
| :---------- | :-------------------------- | :------------------------- |
| GET         | /getOpenEvents              | Open Events list           |
| GET         | /getClosedEvents            | Closed Events list         |
| GET         | /getAllEvents               | All Events list            |
| POST        | /newEvent                   | Create new event           |
| GET         | /:event_id                  | Matching ID event details  |
| PUT         | /:event_id/edit             | Matching ID event edition  |
| PUT         | /:event_id/edit/:user_id'   | Matching ID user  edition  |
| DELETE      | /:event_id/delete           | Matching ID event deletion |
