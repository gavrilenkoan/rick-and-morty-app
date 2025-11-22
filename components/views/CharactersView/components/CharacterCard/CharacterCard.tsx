import { Character } from "@/types/character";
import { CardActionArea } from "@mui/material";
import Image from "next/image";

const CharacterCard = ({ char }: { char: Character }) => {

    return(<CardActionArea
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
            </CardActionArea>
        );
}

export default CharacterCard;