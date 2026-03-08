import NavbarComponentData from "../data/navbar.dto";
import type { TNavbar } from "../types/navbar.type";
import RenderApp from "../main";

const NavbarComponent = (): string => {
    return `
    <ul class="navbar-nav ms-auto text-center mb-2 mb-lg-0">
        ${NavbarComponentData.map((item) => `
            <li class="nav-item mx-1 mb-2">
                <button id="${item.id}" class="btn btn-primary ${item.isActive ? "active" : ""}">
                    <i class="${item.icon}${item.isFillIcon ? "-fill" : ""}"></i>
                    <span class="nav-btn-text">${item.name}</span>
                </button>
            </li>
        `).join("")}
    </ul>
    `;
}

export const NavbarButtonEventRegistration = () => {
    NavbarComponentData.forEach((item: TNavbar) => {
        const btn = document.querySelector<HTMLButtonElement>(`#${item.id}`);
        btn?.addEventListener("click", () => {
            NavbarComponentData.forEach(nav => {
                nav.isActive = false;
                nav.isFillIcon = false;
            });
            item.isActive = true;
            item.isFillIcon = true;
            history.pushState({}, "", `/${item.name.toLowerCase()}`);
            RenderApp();
        });
    });
};

export default NavbarComponent;