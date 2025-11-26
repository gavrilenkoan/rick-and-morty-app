"use client";

import { useEffect, useState } from "react";

const EpisodePage = ({ id } : { id: string }) => {

    const [episode, setEpisode] = useState();

    useEffect(() => {
        async function fetchEpisode() {
            const res = await fetch(`https://rickandmortyapi.com/api/episode/${id}`);
            setEpisode(await res.json());
        }

        fetchEpisode();
    }, []);


    return (
        <div>
            <h1>{JSON.stringify(episode)}</h1>
        </div>
    );
}

export default EpisodePage;