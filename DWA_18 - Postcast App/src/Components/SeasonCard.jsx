// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { fetchSeasons } from '../Api/Api'; 
import LoadingPage from './Loading';

const Seasons = () => {
  const { state } = useLocation();
  const [seasons, setSeasons] = useState([]);
  const [seasonShow, setSeasonShow] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const seasonForShow = await fetchSeasons(state.showId); 
        setSeasonShow(seasonForShow.title); 
        setSeasons(seasonForShow.seasons);
        setLoading(false);
      } catch (error) {
        console.error(error); 
        setLoading(false);
      }
    };

    fetchData();
  }, [state.showId]);

  return (
    <>
      {loading ? (
        <LoadingPage />
      ) : (
        <div className="bg-black bg-opacity-50 p-4 min-h-screen">
          <h1 className="mt-4 mb-4 text-white">{seasonShow}</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {seasons.map((season) => (
              <div key={season.id} className="bg-black bg-opacity-50 rounded-lg p-4">
                <Link to="/episodes" state={{ seasonEpisodes: season.episodes }}>
                  <img
                    className="w-full h-64 object-cover rounded-lg mb-2"
                    src={season.image}
                    alt={season.title}
                  />
                  <div className="text-white">
                    <h2 className="text-xl font-semibold mb-1">{season.title}</h2>
                    <p>{"Episodes " + season.episodes.length}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Seasons;
