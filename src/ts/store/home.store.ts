import type { THomeStore } from "../types/home.component.type";

const HomeStore: THomeStore = {
    searchInputValue: "",
    searchInputEvents: ["input","keypress"],
    clearBtn: null,
    searchAlert: null,
    searchInput: null,
    searchLoader: null,
    searchBtn: null,
};

export default HomeStore;