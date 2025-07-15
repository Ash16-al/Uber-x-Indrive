class figure extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
            <figure >
                <div class="flex flex-col md:flex-row items-start justify-center min-h-screen px-6 pt-12 gap-12">
    
                    <div class="w-full max-w-md">
                        <img src="e58f195f-54f9-428c-984e-dc98d1874005.png" alt="Driver illustration" class="rounded-xl shadow-lg">
                    </div>

                    <div class="max-w-md text-center md:text-left">
                        <h1 class="text-3xl font-bold mb-4">
                        Drive when you want, make what you need
                        </h1>
                        <p class="text-gray-700 mb-6">
                        Make money on your schedule with deliveries or rides—or both. You can use your own car or choose a rental through Uber.
                        </p>
                    <div class="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                        <a href="#" class="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition">
                        Get started
                        </a>
                        <a href="#" class="text-sm text-gray-700 hover:underline">
                        Already have an account? <span class="text-black font-medium">Sign in</span>
                        </a>
                    </div>
                    </div>
                </div>
            </figure>
        `
    }
}


customElements.define('drive-make', figure);