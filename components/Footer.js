class footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer class="bg-neutral-700 text-white py-8 font-sans">
            <div class="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
                
                <div class="flex flex-col items-center md:items-start space-y-6">
                    <div class="text-2xl font-bold">
                        Uber
                    </div>

                    <div class="text-base md:text-lg">
                        Visit Help Center
                    </div>
                </div>

                <!-- Navegación -->
                <nav class="flex flex-col md:flex-row items-center md:space-x-6 space-y-2 md:space-y-0 text-sm md:text-base">
                    <a href="#" class="hover:underline">Company</a>
                    <a href="#" class="hover:underline">Products</a>
                    <a href="#" class="hover:underline">Global citizenship</a>
                    <a href="#" class="hover:underline">Global travel</a>
                </nav>
            </div>
        </footer>
        `
    }
}
customElements.define('o-sito', footer);
