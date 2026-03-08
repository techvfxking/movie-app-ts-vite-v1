import AboutComponent from "../components/about.component";
import FavouriteComponent from "../components/favourite.component";
import HomeComponent from "../components/home.component";
import type { TNavName } from "../types/navbar.type";

const ComponentMap: Record<TNavName, () => string> = {
    Home: HomeComponent,
    Favourite: FavouriteComponent,
    About: AboutComponent
};

export default ComponentMap;