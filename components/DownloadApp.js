class DownloadApp extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
        
    <h1 class="text-2xl font-bold mb-6 ml-25">It's easier in the apps</h1>
    <div class="flex flex-col md:flex-row gap-6">
    
    <div class="bg-white p-6 rounded-lg shadow-md  ml-25 flex items-center space-x-4 w-full md:w-1/2">
        <img src="images/QR1.webp" alt="Uber QR" class="w-24 h-24">
        <div>
        <p class="font-semibold text-lg">Download the Uber app</p>
        <p class="text-sm text-gray-500">Scan to download</p>
        </div>
    </div>


    <div class="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4 w-full md:w-1/2">
        <img src="images/QR2.webp" alt="Driver QR" class="w-24 h-24">
    <div>
        <p class="font-semibold text-lg">Download the Driver app</p>
        <p class="text-sm text-gray-500">Scan to download</p>
    </div>
    </div>
    </div>


        
        
`


    }
}
customElements.define('do-wnload', DownloadApp)