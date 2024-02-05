import PropTypes from 'prop-types';

const RecommendationMessage = ({ score }) => {
  let message;
  let imageUrl;

  if (score >= 1 && score <= 4) {
    message = 'I do not recommend it.';
    imageUrl = 'https://pbs.twimg.com/profile_images/1339049805390229506/MCiToE0B_400x400.jpg';
  } else if (score >= 5 && score <= 8) {
    message = 'You may have fun.';
    imageUrl = 'https://img.freepik.com/vector-gratis/mensaje-tipografia-texto-divertido-verde_53876-116969.jpg?w=1380&t=st=1707118779~exp=1707119379~hmac=aaf9749ef6e6b2674675589021fe4f83ed19e755493d9279b4f9ce2624b2ffde';
  } else if (score > 8) {
    message = 'Great, this is one of the best anime.';
    imageUrl = 'https://www.axwellforum.com/images/forum_img/itsgreat.png';
  }

  return (
    <div className="recommendation-message">
      <img className="recommendation-image" src={imageUrl} alt={message} />
      <span>{message}</span>
    </div>
  );
};

RecommendationMessage.propTypes = {
  score: PropTypes.number,
};

export default RecommendationMessage;
