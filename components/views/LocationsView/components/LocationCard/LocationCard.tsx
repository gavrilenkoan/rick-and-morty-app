import { Location } from "@/types/location";
import { CardActionArea } from "@mui/material";

const CharacterCard = ({ location }: { location: Location }) => {

    return(
        <CardActionArea href={`/locations/${location.id}`}>
            <h2 style={{ margin: "10px 0 5px", fontSize: "20px" }}>{location.name}</h2>

            <p><strong>Type:</strong> {location.type}</p>
            <p><strong>Dimension:</strong> {location.dimension}</p>
        </CardActionArea>
    );
}

export default CharacterCard;