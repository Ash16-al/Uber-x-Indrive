class uggestion extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <section class="max-w-6xl mx-auto mt-10 px-4">
            <h2 class="text-4xl font-extrabold text-center text-black mb-10">Suggestions</h2>
            <div class="grid md:grid-cols-3 gap-6">
                ${this.card("Ride", "Go anywhere with Uber. Request a ride, hop in, and go.", "./images/auto.png")}
                ${this.card("Reserve", "Reserve your ride in advance so you can relax on the day of your trip.", "./images/reloj.png")}
                ${this.card("Flash", "Uber makes same-day item delivery easier than ever.", "./images/caja.png")}
                ${this.card("Moto", "Get affordable motorbike rides in minutes at your doorstep.", "./images/moto.png")}
                ${this.card("Food", "Order delivery from local restaurants with Uber Eats.", "./images/sopa.png")}
            </div>
        </section>
        `;
    }

    card(title, description, imageUrl) {
        return `
            <div class="bg-white border border-[#A6FF00] rounded-2xl overflow-hidden shadow hover:shadow-lg transition duration-300 flex flex-col">
                <img src="${imageUrl}" alt="${title}" class="w-50 h-50 object-cover">
                <div class="p-4 flex flex-col flex-grow">
                    <h3 class="text-xl font-bold text-black mb-2">${title}</h3>
                    <p class="text-gray-700 mb-4">${description}</p>
                    <button class="mt-auto bg-[#A6FF00] text-black font-semibold px-4 py-2 rounded hover:bg-black hover:text-[#A6FF00] transition">
                        Details
                    </button>
                </div>
            </div>
        `;
    }
}

customElements.define('ca-mion', suggestion) 