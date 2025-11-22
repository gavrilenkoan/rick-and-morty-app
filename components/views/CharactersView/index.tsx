import { Pagination, TextField } from "@mui/material";
import CharacterCard from "./components/CharacterCard/CharacterCard";
import { useEffect, useState } from "react";
import { Character } from "@/types/character";

async function getCharacters(page: number) {
    const res = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`, {
        cache: "no-store",
    });

    if (!res.ok) throw new Error("Failed to fetch characters");

    return res.json();
}

const CharactersPage = () => {
    const [page, setPage] = useState(1);
    const [characters, setCharacters] = useState<Character[]>([]);

    useEffect(() => {
    const fetchCharacters = async () => {
        try {
            const data = await getCharacters(page);
            setCharacters(data.results);
        } catch (error) {
            console.error("Error fetching characters:", error);
        }
    };

        fetchCharacters();
    }, [page]);

    return (
        <div style={{ padding: "20px" }}>
            <h1 style={{ fontSize: "32px", marginBottom: "20px" }}>Characters</h1>
            <TextField fullWidth id="outlined-basic" label="Enter a character name" variant="outlined" />

            {/* CHARACTERS GRID */}
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
                    gap: "20px",
                }}
            >
                {characters.map((char: Character) => (
                    <CharacterCard key={char.id} char={char}/>
                ))}
            </div>

            <Pagination
                count={42}
                page={page}
                onChange={(_, value) => setPage(value)}
            />
        </div>
    );
}

export default CharactersPage