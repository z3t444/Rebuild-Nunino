import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

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
                <svg width="35px" height="40px" viewBox="0 0 50 50" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <path d="M50 0L50 0L50 50L0 50L0 0L50 0Z" id="path_1" />
                    <clipPath id="clip_1">
                      <use xlink:href="#path_1" clip-rule="evenodd" fill-rule="evenodd" />
                    </clipPath>
                  </defs>
                  <g id="Instagram">
                    <path d="M50 0L50 0L50 50L0 50L0 0L50 0Z" id="Instagram" fill="none" stroke="none" />
                    <path
                      d="M16 3C8.83249 3 3 8.83249 3 16L3 34C3 41.1675 8.83249 47 16 47L34 47C41.1675 47 47 41.1675 47 34L47 16C47 8.83249 41.1675 3 34 3L16 3L16 3ZM16 5L34 5C40.0865 5 45 9.91352 45 16L45 34C45 40.0865 40.0865 45 34 45L16 45C9.91352 45 5 40.0865 5 34L5 16C5 9.91352 9.91352 5 16 5L16 5ZM37 11C35.8954 11 35 11.8954 35 13C35 14.1046 35.8954 15 37 15C38.1046 15 39 14.1046 39 13C39 11.8954 38.1046 11 37 11L37 11ZM25 14C18.9367 14 14 18.9367 14 25C14 31.0633 18.9367 36 25 36C31.0633 36 36 31.0633 36 25C36 18.9367 31.0633 14 25 14L25 14ZM25 16C29.9824 16 34 20.0176 34 25C34 29.9824 29.9824 34 25 34C20.0176 34 16 29.9824 16 25C16 20.0176 20.0176 16 25 16L25 16Z"
                      id="Shape"
                      fill="#FFFFFF"
                      fill-rule="evenodd"
                      stroke="none"
                      clip-path="url(#clip_1)"
                    />
                  </g>
                </svg>
              </a>
              <a href="ebdtv4@gmail.com">
                <svg width="40px" height="40px" viewBox="0 0 100 100" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <image
                      width="128"
                      height="128"
                      xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAABHNCSVQICAgIfAhkiAAABIBJREFUeJzt3eFR2zAYxnGl1wEyQkZghIzACNmg3QA2KBvABnQDugFsABvABv9+sMK51NYrx7Jl+31+d/3Su1hvoieW4NWZEEREREREREREREREREREREREZDt2ALWLkHq+1S5A6lIAnFMAnFMAnPve9Z+73W43dyEyva4Nv+4AzikAzikAzikAzikAznUGALiauxCZVu+c0u80b4kyFeDUN8mpAADc1y5exgHuUxNsBQDgGdjXfiMyDLCPc5eUEwCAd7QvWA3gGOfMlBuAsx+135ykAT+GTOjQAECzpmhJWBiaW/790MnsC0DvrjF6Bg6137Q0gAPp9f6jb047AxAvegW8JS76Dhwrv3f3sNf7N+L+bVAA4gv2wJ/ExQFu6r1934AbY27+0FquBweg9cI7Y6BHtC+YDc0X89GYk7uO110WgPjiE81a0ucZ/ag4OZql2Vrvr3tee3kAWoO/JAZ/7xtcxgOuSa/3L6kv4egAxIvsgd+JIkD7guKAX8Zn/htjGS4SgNbFbo2CnqyCxEbzhXsyPuvbzGuVC0C84DXpfcEr2hdcjGbJfU18vr3rfc/1ygYgXvSAvS84DX73ztFsuq31/jDwmuUDEC+8Bx4SxQL8Gnpdr7DX+wcuWF4nC0BrgJ9G4WotJ5DXwv054vrTBiAOciS9L1BruQPNep+65X8w8lfvswQgDmTtC0D7gk/YzbcXCtw5ZwtAa0BrX+D6yBl5LdyHguPNG4A4qFrLHbBbuFD4LlklAHHgK+x9wbH0uEuF3cL9YIJ9UrUAxMFzWsubP3KGfWTrnxZu4bHrBaBVhNVavp/qA6iJvPX+vxZu4RrqByAW4qq1TF4L9zRDHcsIQCwm58jZ6lvL2C3czyNbM9SynADEgjZ95Az7yJbZwi1cz7IC0CrMai2v6sgZeUe2bivUtcwAxOKs1vIq9gUUbuEWrm25AYgF5hw5O9Wqz0JeC7daiBcfgFhkzpGzxbWWKXBka4Yalx+AM+zW8lPtDzTWmXNk6+IWbkmrCkAIWa3lV+reUnPW+2Ot+r5aXQBCWG5rmbwW7mHuulJWGYAQso+czdZaJqOFywKWp69WG4Az8lrLk33w5B3ZOk01/lirD0AI2a3lKVqpVVq4JW0iACF8fhOtfUGx1jJ2C7fIka2pbSYAZ2TsC8ZMDAto4Za0uQCEkN1aPlxwXevI1iwt3JI2GYAQyj/NhAFP3ViTzQYghHKtZQY+dWNNNh2AMy58mgkXPnVjTVwEIIThrWVGPHVjTdwEIIT8p5kw8qkba+IqACFkt5ZTqrdwS3IXgDPsI2ddbmvXXZrbAISQtS84W1QLtyTXAQghq7W8uBZuSe4DEEKytbzIFm5JCkALza+QX+K/U+165tA117uuCdefjt2mrrnWn41zTgFwTgFwTgFwTgFwTgFwTgFwTgFwTgFwTgFwTgFwTgFwTgFwTgFwTgFwTgFwTgFwTgFwTgFwTgFwTgFwTgFwrvNYuPihO4BzCoBzCoBzCoCIiIiIiIiIiIiIiIiIiIiIiMhm/AWC4gy4MVrSyQAAAABJRU5ErkJggg=="
                      id="img_1"
                    />
                    <pattern patternUnits="objectBoundingBox" y="-0%" height="100%" width="100%" id="pattern_1">
                      <use xlink:href="#img_1" transform="matrix(0.78125 0 0 0.78125 0 0)" />
                    </pattern>
                  </defs>
                  <path d="M0 0L100 0L100 100L0 100L0 0Z" id="Email" fill="url(#pattern_1)" fill-rule="evenodd" stroke="none" />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  </React.StrictMode>
);
