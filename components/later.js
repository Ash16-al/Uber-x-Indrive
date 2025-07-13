class div extends HTMLElement{

    connectedCallback(){
        this.innerHTML = `
        <div class="flex">
        <div style="background-color: #9bced6ff;" class="w-[747px]  h-[400px] rounded-xl ml-20 mt-20 mb-20 ">
       <h1 class="font-bold text-4xl pl-7 pt-20">Get your ride right</h1>
       <h1 class="font-bold text-4xl pl-7">with Uber reserve</h1>
       <h1 class="font-semibold text-[20px] pl-7 pt-7">Choose date and time</h1>
       <h1 class="inline pl-7 text-gray-500 ">Date</h1>
        <h1 class="inline pl-30 text-gray-500">Time</h1>
        <div>
         <button class="inline-flex ml-7 p-3 bg-white text-gray-500 pr-19 rounded-xl"><img src="/images/calendario.png"  class="w-4 inline h-4 mr-4" alt="">Date</button>
        <button class="inline-flex  p-3 bg-white text-gray-500 pr-19 rounded-xl "><img src="/images/reloj-de-pared-negro.png" alt="" class="w-4 inline h-4 mr-4">Time</button>
        </div><br>
       <button class="ml-7 pl-35 pr-35 pt-3 rounded-xl font-semibold hover:bg-black hover:text-lime-500 pb-3 bg-lime-400">Next</button>
       <img src="/images/image.png" alt="" class="ml-108  rounded-xl -mt-84.5">
       </div>
        <div class="border-gray-200 mt-19">
        <h1 class="ml-5 font-bold text-2xl block">Benefits</h1><br>
        <img src="/images/calendario.png" alt"Reloj blanco" class="inline-flex w-5 h-5 ml-13 mr-3"
        <h1> Choose your exact pickup time up to 90 days in advance.</h1>
        </div>
        </div>
       
        `
    }
}

customElements.define('la-ter', div)