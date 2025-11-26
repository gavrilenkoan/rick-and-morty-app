"use client";

import { useEffect, useState } from "react";

const CharacterPage = ({ id } : { id: string }) => {

    const [character, setCharacter] = useState();

    useEffect(() => {
        async function fetchCharacter() {
            const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
            setCharacter(await res.json());
        }

        fetchCharacter();
    }, []);


    return (
        <div>
            <h1>{JSON.stringify(character)}</h1>
        </div>
    );
}

export default CharacterPage;