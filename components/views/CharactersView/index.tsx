import ItemsPage from "@/components/common/ItemsPage/ItemsPage";
import { ItemsType } from "@/types/itemsType";

const CharactersPage = () => <ItemsPage itemsType={ItemsType.Characters} pagesAmount={42} />

export default CharactersPage;