# MusicTeamsAppServer

#### Auth Routes

  Base URL /auth


| HTTP Method | URI path     | Description                |
| :-------- | :------- | :------------------------- |
| POST | /signup | Signup user|
|POST | /login  |  Login user|
| GET| /verify |  Verify Auth token|


#### User Routes
  Base URL /user


| HTTP Method | URI path     | Description                |
| :-------- | :------- | :------------------------- |
| GET| /getAllUsers | All Users list|
| POST | /newUser | Create new user |
| GET| /:id | Matching ID user details |
| PUT| /:id/edit | Matching ID user edition |
| DELETE| /:id/delete | Matching ID user deletion |



#### Venue Routes
  Base URL /venue


| HTTP Method | URI path     | Description                |
| :-------- | :------- | :------------------------- |
| GET| /getAllVenues | All Venues list|
| POST | /newVenue | Create new venue |
| GET| /:id | Matching ID venue details |
| PUT| /:id/edit | Matching ID venue edition |
| DELETE| /:id/delete | Matching ID venue deletion |


#### Event Routes
  Base URL /event


| HTTP Method | URI path     | Description                |
| :-------- | :------- | :------------------------- |
| GET| /getOpenEvents | Open Events list|
| GET| /getClosedEvents | Closed Events list|
| GET| /getAllEvents | All Events list|
| POST | /newEvent | Create new event |
| GET| /:id | Matching ID event details |
| PUT| /:id/edit | Matching ID event edition |
| DELETE| /:id/delete | Matching ID event deletion |




#### Calendar Routes
  Base URL /calendar



| HTTP Method | URI path     | Description                |
| :-------- | :------- | :------------------------- |
| GET | /getAllDates | Get all dates list|