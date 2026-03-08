import AboutComponent from "../components/about.component";
import FavouriteComponent from "../components/favourite.component";
import HomeComponent from "../components/home.component";
import type { TComponentMap } from "../types/component.type";

const ComponentMap: TComponentMap = {
    Home: HomeComponent,
    Favourite: FavouriteComponent,
    About: AboutComponent
};

export default ComponentMap;