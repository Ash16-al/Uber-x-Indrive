class navbar extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
        <header class="w-full bg-black text-white flex justify-between items-center px-6 py-3 fixed">
        <div class="flex items-center space-x-6">
            <span class="text-xl font-bold">Uber</span>
            <nav class="flex space-x-4 text-sm font-semibold">
                <a href="#" class="hover:underline text-blue-400">Ride</a>
                <a href="#" class="hover:underline">Drive</a>
                <a href="#" class="hover:underline">Business</a>
                <a href="#" class="hover:underline">Uber Eats</a>
                <a href="#" class="hover:underline flex items-center">About <span class="ml-1">▼</span></a>
            </nav>
        </div>
        <div class="flex items-center space-x-4 text-sm">
            <span class="flex items-center space-x-1"><span>🌐</span><span>EN</span></span>
            <a href="#" class="hover:underline text-blue-400">Help</a>
            <a href="#" class="hover:underline text-blue-400">Log in</a>
            <button class="bg-white text-black px-4 py-1 rounded-full font-semibold">Sign up</button>
        </div>
    </header>

`

    }
}
customElements.define('enca-bezado', navbar)