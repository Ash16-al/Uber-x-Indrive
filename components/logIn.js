class logIn extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
        <div class="flex items-center justify-center p-8 max-w-7x1 mx-auto">
            <div class="w-1/2 space-y-8 pl-13">
                <h1 class=" font-bold text-4xl">
                    Log in to see your recent <br> activity
                </h1>
                <p class="text-gray-600">
                    view past trips, tailored suggestions, support resources, <br> and more
                </p>
                <button class="bg-[#99CC00] text-black font-semibold px-6 py-3 rounded hover:bg-black hover:text-lime-500">
                    Log in to your account
                </button>
                <div>
                    <p class=" inline-block border-b border-gray-300 pb-1">
                        Don't have an Uber account?
                        <a class="text-blue-600 hover:underline" href="">Sing Up</a>
                    </p>
                </div>
            </div>
            <div class="w-1/2">
                <img src="images/login.webp" alt="" class="rounded-lg shadow-lg">
            </div>
        </div>
        `


    }


}

customElements.define('en-ter', logIn);