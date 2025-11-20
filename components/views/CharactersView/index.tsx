// import export

import Image from "next/image";
import { useEffect, useState } from "react";

async function getCharacters(page: number) {
    const res = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`, {
        cache: "no-store",
    });

    if (!res.ok) throw new Error("Failed to fetch characters");

    return res.json();
}   

const CharactersPage = () => {
    const [page, setPage] = useState(1);
    const [characters, setCharacters] = useState([]); // add generic

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

            {/* CHARACTERS GRID */}
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
                    gap: "20px",
                }}
            >
                {characters.map((char: any) => (
                    <div
                        key={char.id}
                        style={{
                            border: "1px solid #ccc",
                            borderRadius: "10px",
                            padding: "10px",
                            background: "#fff",
                            boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                        }}
                    >
                        <Image
                            src={char.image}
                            alt={char.name}
                            width={300}
                            height={300}
                            style={{ width: "100%", height: "auto", borderRadius: "8px" }}
                        />

                        <h2 style={{ margin: "10px 0 5px", fontSize: "20px" }}>{char.name}</h2>

                        <p><strong>Status:</strong> {char.status}</p>
                        <p><strong>Species:</strong> {char.species}</p>
                        <p><strong>Location:</strong> {char.location.name}</p>
                    </div>
                ))}
            </div>

            {/* PAGINATION */}
            <div
                style={{
                    marginTop: "30px",
                    display: "flex",
                    justifyContent: "center",
                    gap: "15px",
                }}
            >
                    <button
                        style={{
                            padding: "10px 20px",
                            border: "1px solid #333",
                            borderRadius: "6px",
                        }}
                        onClick={() => setPage(p => --p)}
                    >
                        ◀ Prev
                    </button>

                    <button
                        style={{
                            padding: "10px 20px",
                            border: "1px solid #333",
                            borderRadius: "6px",
                        }}
                        onClick={() => setPage(p => ++p)}
                    >
                        Next ▶
                    </button>
            </div>
        </div>
    );
}

export default CharactersPage