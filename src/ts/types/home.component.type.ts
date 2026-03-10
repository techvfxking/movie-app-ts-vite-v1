import type { TEventNames } from "./events.type";

export declare type THomeStore = {
    searchInputValue: string;
    searchInputEvents: Array<TEventNames>;
    searchInput: HTMLInputElement | null;
    searchBtn: HTMLButtonElement | null;
    clearBtn: HTMLButtonElement | null;
    searchAlert: HTMLDivElement | null;
    searchLoader: HTMLDivElement | null;
}