# ice in my veins

## Overview 
A database-like app using Vite, with data fetched from balldontlie API (https://www.balldontlie.io/).

The app functions as a simple kind of information database for the NBA - the teams, players and games played each season. Take a look here: iceinmyveins.vercel.app

## Structure
The structure for the app is as follows:

```
├── App.css
├── App.jsx
├── components
│   ├── Games.jsx
│   ├── GamesRow.jsx
│   ├── Home.jsx
│   ├── Navbar.jsx
│   ├── Players
│   │   ├── Players.jsx
│   │   ├── PlayersCard.jsx
│   │   ├── PlayersDetail.jsx
│   │   └── SeasonAvg.jsx
│   └── Teams
│       ├── TeamDetail.jsx
│       ├── Teams.jsx
│       └── TeamsCard.jsx
├── data
│   └── data.js
├── hooks
│   └── useTeams.js
├── index.css
└── main.jsx

```
### User Stories

Users will be able to do the following:

* See teams - city, division & conference
* See and search players- team, position, season averages (if possible)
* See games - teams vs team, scores, season

## Most difficult part of the project
The most difficult part of the project was working aroudnd with the API. The API is pretty limited in the data that it's able to retrieve so for some parts I had to retrieve the data from two separate links.

For example, the for the player's basic information such as name, position and team this was retrieved separately from their season averages.

Inside Players.jsx:
<img width="730" alt="image" src="https://user-images.githubusercontent.com/103879314/172081635-926cca9c-94c5-450a-b780-9d49e0243a9f.png">

Inside PlayersDetail.jsx:
<img width="709" alt="image" src="https://user-images.githubusercontent.com/103879314/172081704-eedd4dc1-4941-439f-92e3-d68c4cf0ee97.png">

many fetches

## Favourite part of the project
My favourite part of the project was retrieving the data from the games and doing up the css to make it show up neatly. 

<img width="865" alt="image" src="https://user-images.githubusercontent.com/103879314/172082481-3baa8211-a285-41e1-bb4f-49cc5b87e913.png">


<img width="815" alt="image" src="https://user-images.githubusercontent.com/103879314/172082249-3c3d6ccd-b5b5-4cc1-aead-2e3fe6f9d971.png">


## WIP 
- Working on a PVP search - potentially with charts: compare players stats for each season 
- Retrieve a highlights video for each player searched
- Create a team: a page just for funsies - users can click a button to make their ideal team

## Resources used for this project
- balldontlie.io API
- Reddit for ideas
- flaticon for logo
