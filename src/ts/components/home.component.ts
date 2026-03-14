import HomeStore from "../store/home.store";
import type { TAlerts } from "../types/alert.type";
import type { TEventNames } from "../types/events.type";
import { SearchMovies } from "../utilities/api.service";

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

export const HomeComponentEvents = () => {
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
    if (!loader) return;
    if (status) {
        loader.classList.remove("d-none");
        loader.classList.add("d-flex", "justify-content-center", "align-items-center", "fs-4");
    } else {
        loader.classList.remove("d-flex", "justify-content-center", "align-items-center", "fs-4");
        loader.classList.add("d-none");
    }
};

const ShowAlert = (message: string, type: TAlerts): void => {
    ClearAlert();
    const alertElement = document.createElement("div");
    alertElement.className = `alert alert-${type} alert-dismissible fade show`;
    alertElement.setAttribute("role", "alert");
    alertElement.innerHTML = `
        <div>${message}</div>
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;
    HomeStore.searchAlert?.appendChild(alertElement);
};

const ClearAlert = (): void => {
    HomeStore.searchAlert!.innerHTML = ``;
}

const HandleSearch = async () => {
    ClearAlert();
    const infoText = document.querySelector<HTMLDivElement>("#home_info_text");
    const query = HomeStore.searchInputValue.trim();
    HomeStore.searchInput!.value = query;

    if (!infoText?.classList.contains("d-none"))
        infoText?.classList.add("d-none");

    ShowLoader(true);

    if (query === undefined || query === null || query === "") {
        ShowAlert("Please enter a valid input", "warning");
        const timeoutTask = setTimeout(() => {
            if (infoText?.classList.contains("d-none")) {
                infoText?.classList.remove("d-none");
            }
            ShowLoader(false);
            clearTimeout(timeoutTask);
        }, 500);
        return;
    }

    try {
        const data = await SearchMovies(query);
        console.log(data);
    } catch (e) {
        const error = e as Error;
        ShowAlert(error.message, "danger");
        if (infoText?.classList.contains("d-none")) {
            infoText?.classList.remove("d-none");
        }
    }
    ShowLoader(false);
}

const HandleClear = () => {
    HomeStore.searchInput!.value = "";
    DispatchInputEvent();
}

const DispatchInputEvent = () => {
    HomeStore.searchInput!.dispatchEvent(new Event("input", { bubbles: true }));
}

const HandleSearchInputTyping = (e: InputEvent) => {
    const input = e.target as HTMLInputElement;
    HomeStore.searchInputValue = input.value;
    HomeStore.clearBtn?.classList.toggle("d-none", HomeStore.searchInputValue.length === 0);
};

const HandleKeyPressEvent = (e: KeyboardEvent) => {
    if (e.key.toLowerCase() === "enter") {
        e.preventDefault();
        HandleSearch();
    }
}

export default HomeComponent;