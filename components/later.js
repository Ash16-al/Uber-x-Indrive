class div extends HTMLElement{

    connectedCallback(){
        this.innerHTML = `
       <div style="background-color: #9bced6ff;" class="w-[747px]  h-[400px] rounded-xl ml-20 mt-20 mb-20">
       <h1 class="font-bold text-4xl pl-7 pt-20">Get your ride right</h1>
       <h1 class="font-bold text-4xl pl-7">with Uber reserve</h1>
       <h1 class="font-semibold text-1xl pl-7 pt-7">Choose date and time</h1>
       <h1 class="inline pl-7 ">Date</h1>
        <h1 class="inline pl-30">Time</h1>
        <button class="block pl-7 bg-white">Date</button>
       <img src="/images/image.png" alt="" class="ml-108  rounded-xl -mt-59">
       </div>
        `
    }
}

customElements.define('sugg-estions', div)