import { Episode } from "@/types/episode";
import { CardActionArea } from "@mui/material";

const CharacterCard = ({ ep }: { ep: Episode }) => {

    return(
        <CardActionArea href={`/episodes/${ep.id}`}>
            <h2 style={{ margin: "10px 0 5px", fontSize: "20px" }}>{ep.name}</h2>

            <p><strong>Episode:</strong> {ep.episode}</p>
            <p><strong>Air Date:</strong> {ep.air_date}</p>
        </CardActionArea>
    );
}

export default CharacterCard;