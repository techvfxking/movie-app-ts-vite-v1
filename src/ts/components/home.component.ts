import HomeStore from "../store/home.store";
import type { TEventNames } from "../types/events.type";

const HomeComponent = (): string => {
    return `
        <div class="input-group input-group-lg">
            <input type="text" class="form-control" id="search-input" value="${HomeStore.searchInputValue}" placeholder="Search movies..." aria-label="Search movies" />
            <button class="btn btn-primary" type="button" id="search-btn" title="Search">
                <i class="bi bi-search"></i>
            </button>
            <button class="btn btn-danger d-none" type="button" id="clear-btn" title="Clear search">
                <i class="bi bi-x-circle"></i>
            </button>
        </div>

        <div id="search-alert" class="mt-3"></div>

        <div id="search-loader" class="mt-3 d-none">
          <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <span class="ms-2">Searching...</span>
        </div>
        
        <div id="home_info_text" class="mt-4">
            <div class="row g-4">
                <div class="col-12">
                    <div class="alert alert-light text-center py-5 border border-secondary" role="alert">
                      <h5><i class="bi bi-search"></i> Please type something in the search bar to see results</h5>
                      <p class="text-muted mb-0">Search for movies, TV series, and more...</p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

export const HomeComponentEvents = (): void => {
    StoreNativeHTMLElements();
    HomeStore.searchInputEvents.forEach((event) => {
        HomeStore.searchInput?.addEventListener(event, (e: InputEvent | KeyboardEvent) => {
            if (e.type as TEventNames === "input") HandleSearchInputTyping(e as InputEvent);
            else if (e.type as TEventNames === "keypress") HandleKeyPressEvent(e as KeyboardEvent);
        });
    });
    HomeStore.searchBtn?.addEventListener("click", HandleSearch);
    HomeStore.clearBtn?.addEventListener("click", HandleClear);
};

const StoreNativeHTMLElements = (): void => {
    HomeStore.searchInput = document.querySelector<HTMLInputElement>("#search-input");
    HomeStore.searchBtn = document.querySelector<HTMLButtonElement>("#search-btn");
    HomeStore.clearBtn = document.querySelector<HTMLButtonElement>("#clear-btn");
    HomeStore.searchAlert = document.querySelector<HTMLDivElement>("#search-alert");
    HomeStore.searchLoader = document.querySelector<HTMLDivElement>("#search-loader");
}

const ShowLoader = (status: boolean): void => {
    const loader = HomeStore.searchLoader;
    const loaderClassListRemove: Array<string> = ["d-none"]
    const loaderClassListAdd: Array<string> = ["d-flex", "justify-content-center", "align-items-center", "fs-4"];
    if (!loader) return;
    if (status) {
        loader.classList.remove(...loaderClassListRemove);
        loader.classList.add(...loaderClassListAdd);
    } else {
        loader.classList.add(...loaderClassListRemove);
        loader.classList.remove(...loaderClassListAdd);
    }
}

const HandleSearch = async () => {

}

const HandleClear = () => {

}

const HandleSearchInputTyping = (e: InputEvent) => {

}

const HandleKeyPressEvent = (e: KeyboardEvent) => {

}

export default HomeComponent;