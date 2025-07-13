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
                    <div class="space-y-2">
                        <h3 class="font-bold text-neutral-500">Company</h3>
                        <ul class="space-y-1 text-white-300">
                            <li><a href="#" class="hover:underline font-bold">About us</a></li>
                            <li><a href="#" class="hover:underline font-bold">Our offerings</a></li>
                            <li><a href="#" class="hover:underline font-bold">Newsroom</a></li>
                            <li><a href="#" class="hover:underline font-bold">Investors</a></li>
                            <li><a href="#" class="hover:underline font-bold">Blog</a></li>
                            <li><a href="#" class="hover:underline font-bold">Careers</a></li>
                        </ul>
                    </div>
                    
                    <div class="space-y-2">
                        <h3 class="font-bold text-neutral-500">Products</h3>
                        <ul class="space-y-1 text-white-300">
                            <li><a href="#" class="hover:underline font-bold">Ride</a></li>
                            <li><a href="#" class="hover:underline font-bold">Drive</a></li>
                            <li><a href="#" class="hover:underline font-bold">Deliever</a></li>
                            <li><a href="#" class="hover:underline font-bold">Eat</a></li>
                            <li><a href="#" class="hover:underline font-bold">Uber for business</a></li>
                            <li><a href="#" class="hover:underline font-bold">Uber Freight</a></li>
                            <li><a href="#" class="hover:underline font-bold">Gift cards</a></li>
                            <li><a href="#" class="hover:underline font-bold">Uber Health</a></li>
                        </ul>
                    </div>

                    <div class="space-y-2">
                        <h3 class="font-bold text-neutral-500">Global citizenship</h3>
                        <ul class="space-y-1 text-white-300">
                            <li><a href="#" class="hover:underline font-bold">Safety</a></li>
                            <li><a href="#" class="hover:underline font-bold">Sustainability</a></li>
                        </ul>
                    </div>

                    <div class="space-y-2">
                        <h3 class="font-bold text-neutral-500">Travel</h3>
                        <ul class="space-y-1 text-white-300">
                            <li><a href="#" class="hover:underline font-bold">Reserve</a></li>
                            <li><a href="#" class="hover:underline font-bold">Airports</a></li>
                            <li><a href="#" class="hover:underline font-bold">Cities</a></li>
                        </ul>
                    </div>
                    
                </nav>
            </div>
        </footer>
        `
    }
}
customElements.define('o-sito', footer);

