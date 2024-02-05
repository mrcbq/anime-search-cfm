import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Card from './Card';
import RecommendationMessage from './RecommendationMessage';

const AnimeSlider = () => {
  const data = useSelector((state) => state.search.searchResult.data);
  const dataLoaded = useSelector((state) => state.search.dataLoaded);

  useEffect(() => {}, [dataLoaded]);

  if (dataLoaded) {
    return (
      <div className="cards-container">
        {data.map((anime) => (
          <div key={anime.mal_id}>
            <Card
              title={anime.title}
              imageUrl={anime.images.webp.image_url}
            ></Card>
            <RecommendationMessage
              key={anime.mal_id}
              score={anime.score}
            ></RecommendationMessage>
          </div>
        ))}
      </div>
    );
  } else {
    return <div>Please search some anime!</div>;
  }
};

export default AnimeSlider;
