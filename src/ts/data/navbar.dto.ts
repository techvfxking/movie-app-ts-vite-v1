import type { TNavbar } from "../types/navbar.type";

const NavbarComponentData: Array<TNavbar> = [
    {
        id: "btn_1",
        name: "Home",
        icon: "bi bi-house",
        isActive: false,
        isFillIcon: false
    },
    {
        id: "btn_2",
        name: "Favourite",
        icon: "bi bi-heart",
        isActive: false,
        isFillIcon: false
    },
    {
        id: "btn_3",
        name: "About",
        icon: "bi bi-info-circle",
        isActive: false,
        isFillIcon: false
    }
];

export default NavbarComponentData;