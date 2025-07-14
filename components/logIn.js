class logIn extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
        <div>
            <div class="w-1/2 space-y-6">
                <h1 class="text-4x1 font-bold">Log in to see your recent activity</h1>
                <p class="text-gray-600">view past trips, tailored suggestions, support resources, and more</p>
                <button class="bg-[#99CC00] text-white px-6 py-3 rounded hover:bg-gray-800">Log in to your account</button>
                <p>
                    Don't have an Uber account?
                    <a class="text-blue-600 hover:underline" href="">Sing Up</a>
                </p>
            </div>
            <div class="w-1/2">
                <img src="login.webp" alt="" class="rounded-lg shadow-lg">
            </div>
        </div>
        `


    }


}

customElements.define('en-ter', logIn);