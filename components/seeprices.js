class div extends HTMLElement{
    connectedCallback(){
        this.innerHTML=`
        <button class="fixed bottom-4 right-4 bg-lime-400 text-black font-semibold rounded-lg shadow-lg  w-full border-8 -mr-4 -mb-4 border-black hover:bg-black hover:text-lime-400  hover:border-white h-15 transition">See Price</button>
        
        `
    }
}
customElements.define('se-e', div)