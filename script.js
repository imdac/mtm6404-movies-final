const movies = [
  {
    index: 1,
    title: 'Dredd',
    year: 2013,
    selected: true
  },
  {
    index: 2,
    title: 'Dark City',
    year: 1998
  },
  {
    index: 3,
    title: 'Elysium',
    year: 2013
  },
  {
    index: 4,
    title: 'Fifth Element',
    year: 2007
  },
  {
    index: 5,
    title: 'Aliens',
    year: 1986
  },
  {
    index: 6,
    title: 'Terminator 2: Judgment Day',
    year: 1991
  },
  {
    index: 7,
    title: 'Terminator, The',
    year: 1984
  },
  {
    index: 8,
    title: 'Dawn of the Planet of the Apes',
    year: 2014
  },
  {
    index: 9,
    title: 'Chappie',
    year: 2015
  },
  {
    index: 10,
    title: 'Matrix',
    year: 1999
  },
  {
    index: 11,
    title: 'Interstellar',
    year: 2015
  },
  {
    index: 12,
    title: 'Cloud Atlas',
    year: 2013
  },
  {
    index: 13,
    title: 'Children of Men',
    year: 2007
  },
  {
    index: 14,
    title: 'Total Recall',
    year: 1990
  },
  {
    index: 15,
    title: 'Rise of the Planet of the Apes',
    year: 2011
  },
  {
    index: 16,
    title: 'Robocop',
    year: 1987
  },
  {
    index: 17,
    title: 'Avatar',
    year: 2009
  },
  {
    index: 18,
    title: 'Akira',
    year: 1987
  },
  {
    index: 19,
    title: 'Alien',
    year: 1979
  },
  {
    index: 20,
    title: 'Starship Troopers',
    year: 1997
  },
  {
    index: 21,
    title: 'District 9',
    year: 2009
  },
  {
    index: 22,
    title: 'Blade Runner',
    year: 1992
  },
  {
    index: 23,
    title: 'Minority Report',
    year: 2002
  },
  {
    index: 24,
    title: 'Watchmen',
    year: 2009
  },
  {
    index: 25,
    title: 'War of the Worlds',
    year: 2005
  },
  {
    index: 26,
    title: 'Jurassic Park',
    year: 2014
  },
  {
    index: 27,
    title: 'Looper',
    year: 2012
  }
]

const app = Vue.createApp({
  data: function () {
    return {
      movies: movies,
      query: '',
      sort: 'index'
    }
  },
  methods: {
    filterMovies: function () {
      return this.movies.filter(movie =>
        movie.title.toLowerCase().includes(this.query.toLowerCase()))
    },
    sortMovies: function () {
      return this.filterMovies().sort((a, b) => {
        if (a[this.sort] < b[this.sort]) {
          return -1
        } else if (a[this.sort] > b[this.sort]) {
          return 1
        } else {
          return 0
        }
      })
    },
    getMovies: function () {
      return this.sortMovies()
    }
  }
})

const vm = app.mount('#app')
