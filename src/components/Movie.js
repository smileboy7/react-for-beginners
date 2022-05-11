import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Movie({ id, coverImg, title_long, title, summary, genres }) {
  return (
    <div>
      <h4>
        <Link to={`/movie/${id}`}>{title_long}</Link>
      </h4>
      <img src={coverImg} alt={title} />
      <h5>
        {genres.map((genre, index) => (
          <li key={index}>{genre}</li>
        ))}
      </h5>
      <h5>{summary}</h5>
      <hr />
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title_long: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
