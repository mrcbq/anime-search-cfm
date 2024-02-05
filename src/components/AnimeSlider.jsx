import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const AnimeSlider = () => {
 const data = useSelector((state) => state.search.searchResult.data);
 const dataLoaded = useSelector((state) => state.search.dataLoaded);

 useEffect(()=>{}, [dataLoaded])

 if (dataLoaded) {
    return (
      <div>
        {data.map((anime) => (
          <div key={anime.mal_id}>{anime.title}</div>
        ))}
      </div>
    );
 } else {
    return <div>Please search some anime!</div>;
 }
};

export default AnimeSlider;