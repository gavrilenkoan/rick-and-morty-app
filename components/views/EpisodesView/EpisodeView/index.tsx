"use client";

import { useEffect, useState } from "react";
import { Character } from "@/types/character";
import styles from "../../CharactersView/CharacterView/CharacterPage.module.scss";
import CharacterCard from "@/components/common/cards/CharacterCard";

interface Episode {
    id: number;
    name: string;
    air_date: string;
    episode: string;
    characters: string[];
    url: string;
    created: string;
}

const EpisodePage = ({ id }: { id: string }) => {
    const [episode, setEpisode] = useState<Episode | null>(null);
    const [characters, setCharacters] = useState<Character[]>([]);

    useEffect(() => {
        async function fetchEpisodeAndCharacters() {
            const res = await fetch(`https://rickandmortyapi.com/api/episode/${id}`);
            const episodeData: Episode = await res.json();
            setEpisode(episodeData);

            const characterIds = episodeData.characters.map(url => url.split("/").pop()).filter(Boolean);

            if (characterIds.length === 0) return;

            const charactersRes = await fetch(`https://rickandmortyapi.com/api/character/${characterIds.join(",")}`);
            let charactersData: Character[] = await charactersRes.json();

            if (!Array.isArray(charactersData)) {
                charactersData = [charactersData];
            }

            setCharacters(charactersData);
        }

        fetchEpisodeAndCharacters();
    }, [id]);

    if (!episode) {
        return <div>Loading...</div>;
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>{episode.name}</h1>
            </div>

            <div className={styles.info}>
                <div><strong>Air Date:</strong> {episode.air_date}</div>
                <div><strong>Episode:</strong> {episode.episode}</div>
            </div>

            <div className={styles.array}>
                <h2>Characters</h2>
                <div className={styles.grid}>
                    {characters.map(ch => (
                        <CharacterCard key={ch.id} char={ch} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EpisodePage;