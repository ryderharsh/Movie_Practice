## Node - Wookie Movies

### Description

Create APIs for a Movie listing app.

### Tasks

- 	Import movie_db.json file to MongoDB
-   Create a GET API to list movie to fetch data
-   API should have authentication with Bearer token : FSMovies2021
-   Format data by Grouping Movies by Genres
-   Return in below format
	[
		{
			"genres":"Action",
			"movies":[
				{
				   "director": "Christopher Nolan",
		           "imdb_rating": 9.0,
		           "length": "2h 32min",
		           "poster": "https://wookie.codesubmit.io/static/posters/d6822b7b-48bb-4b78-ad5e-9ba04c517ec8.jpg",
		           "title": "The Dark Knight"
				},
				{
				   "director": "Christopher Nolan",
		           "imdb_rating": 9.0,
		           "length": "2h 32min",
		           "poster": "https://wookie.codesubmit.io/static/posters/d6822b7b-48bb-4b78-ad5e-9ba04c517ec8.jpg",
		           "title": "The Dark Knight"
				},
				... //And so on
			]
		},
		{
			"category":"Drama",
			"movies":[
				{
				   "director": "Christopher Nolan",
		           "imdb_rating": 9.0,
		           "length": "2h 32min",
		           "poster": "https://wookie.codesubmit.io/static/posters/d6822b7b-48bb-4b78-ad5e-9ba04c517ec8.jpg",
		           "title": "The Dark Knight"
				},
				... //And so on
			]
		},
		... //And so on
	]

### Evaluation Criteria
-	Create API - Movies fetched, grouped by genres.

## Bonus
-	ES6 standards
-	Lint free code
-	Proper folder structures

### Useful Links

[NodeJs Docs](https://nodejs.org/en/docs/)

### Fortunesoft

You can refer any documentations if required.

All the best and happy coding,

The Fortunesoft Team
