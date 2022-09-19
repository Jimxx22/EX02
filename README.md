# EX02

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.1.

## DEPLOY

https://master.d27wdk1wh7hae.amplifyapp.com/

This application is a search engine for movies and series. We can see that by clicking on the top menu in the Movies section, we will see a list of the most popular movies of the moment:  

To list the most popular movies we have used this endpoint:
* https://api.themoviedb.org/3/movie/popular/[api-key]&language=es

![movies-list-image](https://github.com/Jimxx22/EX02/blob/master/img/1.png)

Also if we click on the Series section in the header, we will see the most popular series:

To list the most popular series we have used this endpoint:
* https://api.themoviedb.org/3/tv/popular/[api-key]&language=es

![series-list-image](https://github.com/Jimxx22/EX02/blob/master/img/2.png)

In the list of movies or series we will see that each component has a 'See more' button, if we click on it we will enter to see the details of the movie or series.

To see the details of a movie or serie we used this endpoint:
* https://api.themoviedb.org/3/movie/[id_movie]/[api-key]&language=es

![component-of-list](https://github.com/Jimxx22/EX02/blob/master/img/3.png)
![component-details](https://github.com/Jimxx22/EX02/blob/master/img/4.png)

We can also see in the two sections that there is a search engine, here we can write the title of the movie or serie and it will filter us among all the movies or series.

For the movie and series search engine we have used these endpoints respectively
* https://api.themoviedb.org/3/search/movie/[api-key]&language=es&query=[term]
* https://api.themoviedb.org/3/search/tv/[api-key]&language=es&query=[term]

![search-list-movies](https://github.com/Jimxx22/EX02/blob/master/img/5.png)
![search-list-series](https://github.com/Jimxx22/EX02/blob/master/img/6.png)
