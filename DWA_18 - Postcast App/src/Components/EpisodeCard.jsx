// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import AudioPlayer from './Audio'

const EpisodesList = () => {
    const { state } = useLocation();
    const [episodes, setEpisodes] = useState([]);
    const [currentEpisode, setCurrentEpisode] = useState(null);

    useEffect(() => {
        if (state && state.seasonEpisodes) {
            setEpisodes(state.seasonEpisodes);
        }
    }, [state]);

    const handlePlay = (episode) => {
        if (currentEpisode === episode) {
            setCurrentEpisode(null);
        } else {
            setCurrentEpisode(episode);
        }
    };

    return (
        <div className="episode-list-container overflow-y-auto h-80vh">
            {episodes.map((episode) => (
                <div key={episode.id} className="episode-card border-2 border-white p-4 cursor-pointer" onClick={() => handlePlay(episode)}>
                    <div className="flex items-center">
                        <div className="ml-4">
                            <h2 className="text-xl font-semibold">{episode.title}</h2>
                        </div>
                    </div>
                </div>
            ))}
            {currentEpisode && <AudioPlayer currentEpisode={currentEpisode} className="h-20vh" />}
        </div>
    );
};

export default EpisodesList;
