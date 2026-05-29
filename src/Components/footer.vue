<template>
    <footer class="bg-green-800 text-white px-8 py-10 mt-57">

        
        <div class="flex flex-wrap justify-between gap-8">
            <!--This is about of footer -->
            <div>
                <h3 class="text-yellow-300 font-bold text-lg mb-3">TEMBERURWANDA</h3>
                    <p class="text-sm text-green-200">Discover the beauty of the land of a thousand hills</p>
            </div>
            <!--Quicklinks-->
         <div>
            <h3 class="text-yellow-300 font-bold text-lg mb-3  ">Quick Links</h3>
              <ul class="space-y-2  text-sm ">
              <li><router-link to="/" class="hover:text-yellow-300">Home</router-link></li>
          <li><router-link to="/about" class="hover:text-yellow-300">About Us</router-link></li>

         <li><router-link to="/services" class="hover:text-yellow-300">Services</router-link></li>
                    <li><router-link to="/contact" class="hover:text-yellow-300">Contact Us</router-link></li>
                             <li><router-link to="/" class="hover:text-yellow-300">Locations</router-link></li>


             </ul>
         </div>
         <!--Destinations-->
         <div>
<h3 class="text-yellow-300  font-bold text-lg mb-3">Destinations</h3>
<ul class="space-y-2 text-sm ">
    <li><router-link to="/north" class="hover:yellow-300">Northern Province</router-link></li>
    <li><router-link to="/south" class="hover:yellow-300">Southern  Province</router-link></li>
    <li><router-link to="/west" class="hover:yellow-300">Western Province</router-link></li>
    <li><router-link to="/east" class="hover:yellow-300">Eastern Province</router-link></li>
    <li><router-link to="/kigali" class="hover:yellow-300">Kigali City</router-link></li>
</ul>

         </div>

         <!--Contact info-->
         <div>
            <h3 class="text-yellow-300 font-bold text-lg mb-3">Contact Info</h3>
            <ul class="space-y-2 text-green-300">
                <li>temberaurwanda@gmail.com</li>
                <li>+250 7882347789</li>
                <li>kagugu kigali,Rwanda</li>

            </ul>
         

        </div>
        </div>
         <!-- place for Copyright-->
          <div class="border-t border-green-600 mt-8 pt-4 text-sm text-green">
            <p class="text-center"> ©2025 Visit Rwanda.All rights reserved </p>

          </div>
    </footer>
</template>