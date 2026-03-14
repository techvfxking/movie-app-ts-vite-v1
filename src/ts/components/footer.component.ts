const FooterComponent = (): HTMLElement => {
    const footer = document.createElement('footer');
    footer.className = 'bg-dark text-white text-center py-3 mt-5 fixed-bottom w-100';
    const currentYear = new Date().getFullYear();
    footer.innerHTML = `
        <div class="container-fluid">
          <p class="mb-0">
            <small>&copy; ${currentYear} Movie Info Hub. All rights reserved.</small>
          </p>
        </div>
    `;
    return footer;
}

export default FooterComponent;