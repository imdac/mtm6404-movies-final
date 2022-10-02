const data = [
  {
    index: 1,
    title: 'Dredd',
    year: 2013
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


function Movie (props) {
  const {title, year} = props.movie
  const [selected, setSelected] = React.useState(false)

  function clickHandler () {
    setSelected(!selected)
  }

  return (
  <div className="movie" onClick={clickHandler}>
    {selected && <span>x</span>}  {title} ({year})
  </div>)
}

function Movies (props) {
  const movies = props.movies

  const moviesList = movies.map(movie => <Movie key={movie.index} movie={movie} />)

  return (
    <div className="movies">
      {moviesList}    
    </div>
  )
}

function App () {
  const [movies, setMovies] = React.useState(data)
  const [query, setQuery] = React.useState('')
  const [sortBy, setSortBy] = React.useState('index')

  React.useEffect(() => {
    setMovies(data.filter(movie => 
      movie.title.toLowerCase().includes(query.toLowerCase())
    ).sort((a, b) => {
      if (a[sortBy] < b[sortBy]) {
        return -1
      } else if (a[sortBy] > b[sortBy]) {
        return 1
      } else {
        return 0
      }
    }))
  }, [query, sortBy])

  function formHandler (e) {
    e.preventDefault();
  }

  function textHandler (e) {
    setQuery(e.target.value)
  }

  function selectHandler (e) {
    setSortBy(e.target.value)
  }

  return (
    <React.Fragment>
      <h1>Movies</h1>
      <form onSubmit={formHandler}>
        <input type="text" value={query} onChange={textHandler} />
        <select value={sortBy} onChange={selectHandler}>
          <option value="index">index</option>
          <option value="title">title</option>
          <option value="year">year</option>
        </select>
      </form>
      <Movies movies={movies} />
    </React.Fragment>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)