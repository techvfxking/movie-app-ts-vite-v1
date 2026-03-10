import type { THomeStore } from "../types/home.component.type";

const HomeStore: THomeStore = {
    searchInputValue: "",
    searchInputEvents: ["input","keypress"],
    searchInput: null,
    searchBtn: null,
    clearBtn: null,
    searchAlert: null,
    searchLoader: null
};

export default HomeStore;