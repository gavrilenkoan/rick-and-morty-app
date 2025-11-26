"use client";

import { useEffect, useState } from "react";
import EpisodeCard from "@/components/views/EpisodesView/components/EpisodeCard/EpisodeCard";
import { Episode } from "@/types/episode";
import styles from "./CharacterPage.module.scss";

interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: { name: string; url: string };
    location: { name: string; url: string };
    image: string;
    episode: string[];
    url: string;
    created: string;
}

const CharacterPage = ({ id }: { id: string }) => {
    const [character, setCharacter] = useState<Character | null>(null);
    const [episodes, setEpisodes] = useState<Episode[]>([]);

    useEffect(() => {
        async function fetchCharacterAndEpisodes() {
            const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
            const characterData: Character = await res.json();
            setCharacter(characterData);

            const episodeIds = characterData.episode.map(url => url.split("/").pop()).filter(Boolean);

            if (episodeIds.length === 0) return;

            const episodesRes = await fetch(`https://rickandmortyapi.com/api/episode/${episodeIds.join(",")}`);
            let episodesData: Episode[] = await episodesRes.json();

            if (!Array.isArray(episodesData)) {
                episodesData = [episodesData];
            }

            setEpisodes(episodesData);
        }

        fetchCharacterAndEpisodes();
    }, [id]);

    if (!character) {
        return <div>Loading...</div>;
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>{character.name}</h1>
                <img src={character.image} alt={character.name} />
            </div>

            <div className={styles.info}>
                <div><strong>Status:</strong> {character.status}</div>
                <div><strong>Species:</strong> {character.species}</div>
                {character.type && <div><strong>Type:</strong> {character.type}</div>}
                <div><strong>Gender:</strong> {character.gender}</div>
                <div><strong>Origin:</strong> {character.origin.name}</div>
                <div><strong>Location:</strong> {character.location.name}</div>
            </div>

            <div className={styles.episodes}>
                <h2>Episodes</h2>
                <div className={styles.grid}>
                    {episodes.map(ep => (
                        <EpisodeCard key={ep.id} ep={ep} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CharacterPage;