import HomeStore from "../store/home.store";

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
    const input = document.querySelector<HTMLInputElement>("#search-input");
    input?.addEventListener("input", () => {
        HomeStore.searchInputValue = input.value;
    });
};

export default HomeComponent;