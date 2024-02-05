import PropTypes from "prop-types"
const Card = ({ id, title, imageUrl }) => {
  return (
    <div key={id} className="card">
      <img className="card-image" src={imageUrl} alt={title} />
      <h3 className="card-title">{title}</h3>
    </div>
  );
};

Card.propTypes = {
  imageUrl: PropTypes.string,
  id: PropTypes.number,
  title: PropTypes.string
}

export default Card;
