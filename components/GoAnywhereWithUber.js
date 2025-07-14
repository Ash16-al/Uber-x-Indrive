class Figure extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
            <figure class="flex justify-evenly  bg-[url('./images/Bg-InDrive.webp')] h-180">
                <div class = "w-125 mt-38 -ml-170">


                <!-- Form -->

                    <p class = "text-5xl font-bold text-white">
                    Go <span class="text-black bg-[#99CC00] px-2 py-1  -skew-y-3 rounded-lg inline-block">anywhere</span> with Uber
                    </p>

                    <!-- Inputs -->

                    <div class="flex flex-col mt-8">
                        <input placeholder="Pickup location"  class="p-2 pl-6 placeholder-black-1000 bg-gray-200 rounded-lg w-93 h-10" type="text">
                        <input placeholder="Dropoff location"  class="mt-5 p-2 pl-6 placeholder-black-1000 bg-gray-200 rounded-lg w-93 h-10" type="text">
                        <button class="-mt-23 ml-84" type="button"><a href="#"><img src="./images/Arrow.png" alt=""></a></button>
                        <div class="bg-black w-2 h-2 rounded-full -mt-4 ml-3"></div>
                        <div class="bg-black w-2 h-2 mt-13 ml-3"></div>
                        <div class="bg-black vertical-line w-0.25 h-11 -mt-14 ml-4"></div>
                    </div>

                    <!-- Date & Time -->

                    <div class="flex justify-start mt-10">
                        <div>
                            <p>Date</p>
                            <input class="p-2 pl-6 placeholder-black-1000 bg-gray-200 rounded-lg w-42 h-10" type="date" name="" id="">
                        </div>
                        <div class="ml-10">
                            <p>Time</p>
                            <input class="p-2 pl-6 placeholder-black-1000 bg-gray-200 rounded-lg w-42 h-10" type="time" name="" id="">
                        </div>
                    </div>

                    <!-- Lower Buttons -->

                    <div class="mt-5">
                        <button style=" background-color: #99CC00" class="bg-black w-27 h-13 rounded-lg font-semibold ">See prices</button>
                        <a href="#" class="ml-8 hover:underline font-semibold text-gray-200">Log in to see your recent activity</a>
                        <hr class="w-66 h-6 text-gray-200 -mt-2 ml-32">
                    </div>
                </div>
            </figure>
        `
    }
}


customElements.define('go-any-where-with-uber', Figure);