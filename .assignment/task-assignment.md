# Coding Assignment

The goal of this assignment is to build a small React application that lets you search and display information from the Star Wars movies (no knowledge of SW is required). The data needed will be queried from [SWAPI (Star Wars API)](https://swapi.dev/) which is an open testing API.

## Overview

The app should consist of a front page with a centered search box where you can type a search string and get matching results. Clicking on a result should route to a new page with the search box on top and details about the query underneath.

### Searching

The search box will be used to query information about people, planets, starships and vehicles. Beneath the search box there should be five radio buttons:

- All (default)
- People
- Planets
- Starships
- Vehicles

You should use the existing `/search` endpoints for each category (see: <https://swapi.dev/documentation#search>).

The default behavior (All) should be to query all four search endpoints and display all results.

### Search results

The search result page should have the whole search form at the top and the list with results beneath it (much like any other search engine, like google or duckduckgo).

Combined results (`All` selected) should be ordered by category with the category with most results appearing at the top.

Each result entry should be listed with it's `name` property taken from the result plus a list of the films in which it appears (provided in the result).
So a result for a search with `query=luke` should look something like:

```text
Luke Skywalker (appears in: 4, 5, 6, 3)
```

Where (4, 5, 6, 3) are the `episode_id`s of the films the character appears in. (Don't worry if the results are not up to date as of 2020)

Generally the useful information from the search response for a single entry is as follows:

```json
{
  "count": 1,
    ...
  "results": [
    {
      "name": "Luke Skywalker",
        ...
      "films": [
        "http://swapi.dev/api/films/1/",
        "http://swapi.dev/api/films/2/",
        "http://swapi.dev/api/films/3/",
        "http://swapi.dev/api/films/6/"
      ],
        ...
      "url": "http://swapi.dev/api/people/1/"
    }
  ]
}
```

Note: Pagination is not required, but feel free to add more details into the search result entry at your discretion, making anything better will give you bonus points.

### Detailed view

Each search result entry should be a link routing to a page having the search form at the top and details about the entry beneath it. The url should correspond to the search result entry, so that the the page can be accessed separately. For example if the search result entry url is `http://swapi.dev/api/people/1/` our url should also be `people/1`.

The details displayed should be simple key value pairs displayed as a table (or similar) plus the films in which the thing or person appears in e.g.:

- **Name:** Luke Skywalker
- **Height:** 172
- **Hair color:** blond
- **Skin color:** fair
- **Eye color:** blue
- **Gender:** male
- **Movies:** A New Hope, The Empire Strikes Back, Return of the Jedi

It is not required to include all fields from the result, just a reasonable amount. You get bonus points for displaying information requiring to poll other endpoints (like `Movies` in the example above)

**Extra Bonus**: Incorporate the detailed view to the side of the search results page implementing a master-detail pattern while also keeping the route to the detail view page.

## Technical details

### Requirements

The only strict requirements we pose are that the app is written in **typescript** using the latest version of React. We recommend the use of react patterns wherever meaningful of course, and be prepared to show and explain them when presenting the solution.

### Project Setup

Please setup the application in a way that we can start it by simply running `npm start`.

### SWAPI

The [SWAPI](https://swapi.dev/) API is a free service and has a 10,000 requests per day rate limiting. Please make sure you don't abuse it.

Note that in some of the results the URLs returned start with `http` which is wrong and should be modified to `https` for them to work, make sure you handle this correctly.

### External Libraries

We don't mind if you use whatever external libraries you like.

### Estimation

We don't set any hard deadlines.
