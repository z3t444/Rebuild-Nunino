import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Instagram from './assets/Instagram.svg'
import Email from './assets/Email.svg'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="Poppins p-3 md:p-5 lg:p-10 hidden md:hidden lg:block xl:block xl:p-14 xl:pt-8 ">
      <App />
    </div>
    <div className="block md:block">
      <div className="block md:block lg:block xl:hidden">
        <section class="flex items-center h-screen p-16 dark:bg-black dark:text-gray-100">
          <div class="container flex flex-col items-center justify-center px-5 mx-auto my-8">
            <div class="max-w-lg text-center">
              <h2 class="mb-8 font-extrabold text-8xl dark:text-gray-600">
                <span class="sr-only">Error</span>404 cannot Access
              </h2>
              <p class="text-2xl font-semibold md:text-3xl">This website is not yet available on tablet and mobile. please be patient, we are working on it.</p>
              <p class="mt-4 mb-8 dark:text-gray-400">Don't worry, we will provide this website service soon. Greetings from Zeeta Developer.</p>
              <div class="mt-10">
                <a rel="noopener noreferrer" href="#" class="px-8 py-3 font-semibold rounded-md border">
                  Back to homepage
                </a>
              </div>
            </div>
            <div class="social-media mt-10 flex gap-5">
              <a href="https://www.instagram.com/zzz_3t44" target="_blank">
               <img src={Instagram} alt="" width={30} />
              </a>
              <a href="ebdtv4@gmail.com">
               <img src={Email} alt="" width={34} />
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  </React.StrictMode>
);
