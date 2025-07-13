class footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer class="bg-neutral-700 text-white py-8 font-sans">
            <div class="max-w-7xl mx-auto px-4 flex flex-col items-center md:items-start space-y-6">

                <!-- Título y enlace -->
                <div class="flex flex-col items-center md:items-start space-y-2">
                    <div class="text-2xl font-bold">Uber</div>
                    <div class="text-base md:text-lg">Visit Help Center</div>
                </div>

                <!-- Navegación debajo -->
                <nav class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full text-sm md:text-base">
                    <div class="space-y-2">
                        <h3 class="font-bold text-neutral-500">Company</h3>
                        <ul class="space-y-1">
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
                        <ul class="space-y-1">
                            <li><a href="#" class="hover:underline font-bold">Ride</a></li>
                            <li><a href="#" class="hover:underline font-bold">Drive</a></li>
                            <li><a href="#" class="hover:underline font-bold">Deliver</a></li>
                            <li><a href="#" class="hover:underline font-bold">Eat</a></li>
                            <li><a href="#" class="hover:underline font-bold">Uber for business</a></li>
                            <li><a href="#" class="hover:underline font-bold">Uber Freight</a></li>
                            <li><a href="#" class="hover:underline font-bold">Gift cards</a></li>
                            <li><a href="#" class="hover:underline font-bold">Uber Health</a></li>
                        </ul>
                    </div>

                    <div class="space-y-2">
                        <h3 class="font-bold text-neutral-500">Global citizenship</h3>
                        <ul class="space-y-1">
                            <li><a href="#" class="hover:underline font-bold">Safety</a></li>
                            <li><a href="#" class="hover:underline font-bold">Sustainability</a></li>
                        </ul>
                    </div>

                    <div class="space-y-2">
                        <h3 class="font-bold text-neutral-500">Travel</h3>
                        <ul class="space-y-1">
                            <li><a href="#" class="hover:underline font-bold">Reserve</a></li>
                            <li><a href="#" class="hover:underline font-bold">Airports</a></li>
                            <li><a href="#" class="hover:underline font-bold">Cities</a></li>
                        </ul>
                    </div>
                </nav>

                <!-- Íconos sociales y botones English/San Salvador juntos en línea -->
                <div class="flex items-center gap-165 mt-8">
                    <!-- Íconos circulares -->
                    <div class="flex gap-4">
                        <div class="w-10 h-10 bg-[#C1F11D] rounded-full flex items-center justify-center">
                            <img src="images/icons8-facebook-50 (1).png" alt="" class="w-4 h-4">
                        </div>
                        <div class="w-10 h-10 bg-[#C1F11D] rounded-full flex items-center justify-center">
                            <img src="images/icons8-twitterx-30.png" alt="" class="w-4 h-4">
                        </div>
                        <div class="w-10 h-10 bg-[#C1F11D] rounded-full flex items-center justify-center">
                            <img src="images/icons8-youtube-50.png" alt="" class="w-4 h-4">
                        </div>
                        <div class="w-10 h-10 bg-[#C1F11D] rounded-full flex items-center justify-center">
                            <img src="images/icons8-linkedin-24 (1).png" alt="" class="w-4 h-4">
                        </div>
                        <div class="w-10 h-10 bg-[#C1F11D] rounded-full flex items-center justify-center">
                            <img src="images/icons8-instagram-32.png" alt="" class="w-4 h-4">
                        </div>
                    </div>

                    <!-- Botones English y San Salvador -->
                    <div class="flex gap-4">
                        <div class="flex items-center gap-2 bg-[#C1F11D] rounded-md px-4 py-2 w-fit cursor-pointer">
                            <img src="images/icons8-geografía-48.png" alt="" class="w-4 h-4">
                            <h1 class="text-sm font-medium text-black">English</h1>
                        </div>
                        <div class="flex items-center gap-2 bg-[#C1F11D] rounded-md px-6 py-2 w-fit cursor-pointer">
                            <img src="images/icons8-visita-50.png" alt="" class="w-4 h-4">
                            <h1 class="text-sm font-medium text-black">San Salvador</h1>
                        </div>
                    </div>
                    
                </div>
                <div class="flex gap-4 mt-4">
                    <div>
                        <img src="images/google-play-badge.jpg" alt="" class="h-10">
                    </div>
                    <div>
                        <img src="images/app-store-badge.jpg" alt="" class="h-10">
                    </div>
                </div>
                <div class="flex flex-col md:flex-row items-center justify-between text-sm font-bold text-white-400 mt-8 space-y-2 md:space-y-0 gap-185"> 
                    <div>© 2025 Uber Technologies Inc.</div>
                    <div class="flex space-x-6">
                        <a href="#" class="hover:underline">Privacy</a>
                        <a href="#" class="hover:underline">Accessibility</a>
                        <a href="#" class="hover:underline">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
        `
    }
}

customElements.define('o-sito', footer);
