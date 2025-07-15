class figure extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
            <body class="bg-white font-sans">
  <div class="min-h-screen flex items-center justify-center px-4">
    <div class="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      
    
      <div>
        <h1 class="text-4xl font-bold text-gray-900 mb-4">
          Log in to see your recent activity
        </h1>
        <p class="text-gray-700 mb-6">
          View past trips, tailored suggestions, support resources, and more.
        </p>
        <button class="bg-black text-white px-6 py-3 rounded-md font-medium mb-4">
          Log in to your account
        </button>
        <p class="text-sm text-gray-600">
          Don’t have an Uber account?
          <a href="#" class="text-black underline">Sign up</a>
        </p>
      </div>
            <div>
        <img src="images/login.webp" alt="Airport scene" class="rounded-lg shadow-lg w-full h-auto" />
      </div>
    </div>
  </div>
</body>
</html>
        `
    }
}




customElements.define('drive-make', figure);




