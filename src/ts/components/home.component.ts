import HomeStore from "../store/home.store";

const HomeComponent = (): string => {
    return `
        <div>
            <h1 class="title">Welcome Home</h1>
            <p>This is the Home Component.</p>
            <input id="homeInput" type="text" class="form-control" value="${HomeStore.homeInputValue}" placeholder="Type something..." />
        </div>
    `;
}

export const HomeComponentEvents = () => {
    const input = document.querySelector<HTMLInputElement>("#homeInput");
    input?.addEventListener("input", () => {
        HomeStore.homeInputValue = input.value;
    });
};

export default HomeComponent;