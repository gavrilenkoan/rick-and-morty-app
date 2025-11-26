import CharacterCard from "./components/CharacterCard/CharacterCard";
import { useEffect, useState } from "react";
import { Character } from "@/types/character";
import styles from "./CharactersPage.module.scss";
import StyledTextField from "./components/StyledTextField/StyledTextField";
import StyledPagination from "./components/StyledPagination/StyledPagination";

const CharactersPage = () => {
    const [page, setPage] = useState(1);
    const [characters, setCharacters] = useState<Character[]>([]);

    async function load() {
        const res = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
        const data = await res.json();
        setCharacters(data.results);
    }

    useEffect(() => { load(); }, [page]);

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <h1>Characters</h1>
            </div>

            <div className={styles.search}>
                <StyledTextField
                    fullWidth
                    label="Search characters"
                    variant="outlined"
                />
            </div>

            <div className={styles.grid}>
                {characters.map(char => (
                    <CharacterCard key={char.id} char={char} />
                ))}
            </div>

            <div className={styles.pagination}>
                <StyledPagination
                    count={42}
                    page={page}
                    onChange={(_, v) => setPage(v)}
                />
            </div>
        </div>
    );
};

export default CharactersPage;