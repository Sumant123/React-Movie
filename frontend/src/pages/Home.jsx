import MovieCard from "../components/MovieCard"

function Home() {
    const movies = [
        {id: 1, title: "Inception", year: 2010},
        {id: 2, title: "The Matrix", year: 1999},   
        {id: 3, title: "Interstellar", year: 2014},
    ]

    const handleSearch = () => {

    }

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input
                    type="text"
                    placeholder="Search for a movie..."
                    className="search-input"
                />
                <button type="submit" className="search-button">
                    Search
                </button>
            </form>

            <div className="movie-grid">
                {movies.map((movie) => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        </div>
    );
}
export default Home;