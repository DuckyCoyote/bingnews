import PropTypes from "prop-types";
import moment from "moment";
moment.locale("es");

import "./Card.styles.css";

const Card = ({ notice }) => {
  const { name, image, description, datePublished, url } = notice;

  const handleClick = (url) => {
    window.open(url, "_blank");
  };

  const date = moment(datePublished).format("dddd, MMM DD");

  return (
    <article className="noticeCard" onClick={() => handleClick(url)}>
      <div className="image-container">
        {image ? (
          <img
            src={`${image.thumbnail.contentUrl}&w=308&h=178&c=14&rs=2&qlt=90`}
            alt="Thumbnail"
            className="card-image"
          />
        ) : (
          <img
            src="https://media.istockphoto.com/id/1396814518/es/vector/imagen-pr%C3%B3ximamente-sin-foto-sin-imagen-en-miniatura-disponible-ilustraci%C3%B3n-vectorial.jpg?s=612x612&w=0&k=20&c=aA0kj2K7ir8xAey-SaPc44r5f-MATKGN0X0ybu_A774="
            width="308"
            height="178"
          />
        )}
      </div>
      <div className="info-container">
        <h4>{name}</h4>
        <p>{description}</p>
      </div>
      <span>{date}</span>
    </article>
  );
};

Card.propTypes = {
  notice: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.shape({
      thumbnail: PropTypes.shape({
        contentUrl: PropTypes.string.isRequired,
      }).isRequired,
    }),
    description: PropTypes.string.isRequired,
    datePublished: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }),
};

export default Card;
