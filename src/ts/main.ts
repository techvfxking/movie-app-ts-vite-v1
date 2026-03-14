import '../scss/style.scss';
import NavbarComponent, { NavbarButtonEventRegistration } from './components/navbar.component';
import FooterComponent from './components/footer.component';
import NavbarComponentData from './data/navbar.dto';
import ComponentMap from './data/components.dto';
import { HomeComponentEvents } from "./components/home.component";

const ResolveRouteFromURL = (): void => {
    const path = window.location.pathname.replace("/", "").toLowerCase();
    const route = NavbarComponentData.find(item => item.name.toLowerCase() === path);
    if (route) {
        route.isActive = true;
        route.isFillIcon = true;
    } else {
        NavbarComponentData[0].isActive = true;
        NavbarComponentData[0].isFillIcon = true;
        history.replaceState({}, "", "/home");
    }
};

const RenderApp = (): void => {
    const navbar = document.querySelector<HTMLDivElement>("#navbarSupportedContent");
    navbar!.innerHTML = NavbarComponent();
    NavbarButtonEventRegistration();
    const activeItem = NavbarComponentData.find(item => item.isActive);
    if (activeItem) {
        const app = document.querySelector<HTMLDivElement>("#app");
        app!.innerHTML = ComponentMap[activeItem.name]();
        switch (activeItem.name) {
            case 'Home':
                HomeComponentEvents();
                break;
            case 'Favourite':
                break;
            case 'About':
                break;
        }
    }
    document.body.appendChild(FooterComponent());
};

window.addEventListener("popstate", () => {
    ResolveRouteFromURL();
    RenderApp();
});

ResolveRouteFromURL();
RenderApp();

export default RenderApp;