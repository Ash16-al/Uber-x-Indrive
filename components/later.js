class div extends HTMLElement{

    connectedCallback(){
        this.innerHTML = `
        <div class="flex">
        <div style="background-color: #9bced6ff;" class="w-[747px]  h-[400px] rounded-xl ml-25 mt-20 mb-20 pr-100 ">
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

       <!-- benefits -->

        <div class="border border-gray-200 rounded-xl mt-19 mr-25 ml-5 h-100 hover:shadow-lg">
        <h1 class="ml-5 font-bold text-2xl block mt-3">Benefits</h1><br>
        <div class="flex items-center">
         <img src="/images/calendario.png" alt"Reloj blanco" class="inline-flex w-5 h-5 ml-13 mr-3">
        <p class=" inline flex-wrap text-[18px] pr-5" >Choose your exact pickup time up to 90 days in advance.</p>
        </div>
        <hr class="mt-3 w-60 ml-18 border border-gray-200">
         <div class="flex items-center mt-3">
         <img src="/images/reloj-de-pared.png" alt"Reloj blanco" class="inline-flex w-5 h-5 ml-13 mr-3">
        <p class=" inline flex-wrap text-[18px] pr-5" >Choose your exact pickup time up to 90 days in advance.</p>
        </div>
         <hr class="mt-3 w-60 ml-18 border border-gray-200">
          <div class="flex items-center mt-3">
         <img src="/images/tarjeta-de-credito.png" alt"Reloj blanco" class="inline-flex w-5 h-5 ml-13 mr-3">
        <p class=" inline flex-wrap text-[18px] pr-5" >Choose your exact pickup time up to 90 days in advance.</p>
        </div>
         <hr class="mt-3 w-60 ml-18 border border-gray-200">
         <br><br>
        <h1 class="ml-5 text-[18px] text-gray-500 underline decoration-dotted decoration-1 underline-offset-4 hover:text-lime-400 hover:font-bold">See terms</h1>
        </div>
        </div>
       
        `
    }
}

customElements.define('la-ter', div)