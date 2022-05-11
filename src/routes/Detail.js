import { useCallback, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Movie from '../components/Movie';
import Lists from './Lists';

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const getMovie = useCallback(async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  }, [id]);
  useEffect(() => {
    getMovie();
  }, [getMovie]);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <Lists />
          <Movie
            key={movie.id}
            id={movie.id}
            coverImg={movie.medium_cover_image}
            title_long={movie.title_long}
            title={movie.title}
            summary={movie.description_full}
            genres={movie.genres}
          />
        </>
      )}
    </div>
  );
}

export default Detail;
