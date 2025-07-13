class Figure extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
            <figure class="flex justify-evenly mt-20">
                <div class = "w-125">
                    <p class = "text-5xl font-bold">
                    Go anywhere with Uber
                    </p>
                    <div class="flex flex-col mt-8">
                        <input placeholder="Pickup location"  class="p-2 pl-6 placeholder-black-1000 bg-gray-200 rounded-lg w-93 h-10" type="text">
                        <input placeholder="Dropoff location"  class="mt-5 p-2 pl-6 placeholder-black-1000 bg-gray-200 rounded-lg w-93 h-10" type="text">
                        <button class="-mt-23 ml-84" type="button"><img src="./images/Arrow.png" alt=""></button>
                        <div class="bg-black w-2 h-2 rounded-full -mt-4 ml-3"></div>
                        <div class="bg-black w-2 h-2 mt-13 ml-3"></div>
                        <div class="bg-black vertical-line w-0.25 h-11 -mt-14 ml-4"></div>
                    </div>
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
                    <div class="mt-5">
                        <button style="color: white;" class="bg-black w-27 h-13 rounded-lg font-bold ">See prices</button>
                        <a class="ml-8 href="">Log in to see your recent activity</a>
                        <hr class="w-58 ml-35.5 -mt-2">
                    </div>
                </div>
                <div>
                    <img width="550px" src="./images/cualquierlugar.webp" alt="">
                </div>
            </figure>
        `
    }
}


customElements.define('go-any-where-with-uber', Figure);