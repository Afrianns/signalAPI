export default function jobList() {
  document.querySelector<HTMLDivElement>(
    "#job-listing-illustration"
  )!.innerHTML = `
  <div class="relative">
          <section class="absolute left-14 -top-5 z-10">
            <div
              class="bg-gray-dark border border-gray-light w-[300px] h-full rounded-md relative"
            >
              <span
                class="absolute left-6 top-0 bottom-0 border border-l-red-black border-r-gray-light"
              ></span>
              <div class="space-y-3 w-[200px] mx-auto my-5">
                <h3 class="text-gray-extra-light-xl flex items-center gap-x-2">
                  Real-time Monitoring
                  <img src="assets/icons/icon-three-dots.svg" alt="" />
                </h3>
                <div
                  class="bg-gray-light border border-gray-extra-light py-3 px-2 text-[10px] rounded-md"
                >
                  <p class="text-white">Luma ‣ Senior Backend Engineer</p>
                  <span class="text-gray-extra-light-xl"
                    >New job post ‣ London</span
                  >
                </div>
                <div
                  class="bg-gray-light border border-gray-extra-light py-3 px-2 text-[10px] rounded-md"
                >
                  <p class="text-white">TechCo ‣ Head of Communication</p>
                  <span class="text-gray-extra-light-xl"
                    >New job post ‣ Manchester</span
                  >
                </div>
                <div
                  class="bg-gray-light border border-gray-extra-light py-3 px-2 text-[10px] rounded-md"
                >
                  <p class="text-white">Finova ‣ Product Designer</p>
                  <span class="text-gray-extra-light-xl"
                    >Team expansion ‣ Remote</span
                  >
                </div>
                <div
                  class="bg-gray-light border border-gray-extra-light py-3 px-2 text-[10px] rounded-md"
                >
                  <p class="text-white">Acme ‣ Head of Data</p>
                  <span class="text-gray-extra-light-xl"
                    >Series B funding ‣ Hiring now</span
                  >
                </div>
                <div
                  class="bg-gray-light border border-gray-extra-light py-3 px-2 text-[10px] rounded-md"
                >
                  <p class="text-white">Paulax ‣ SEO Specialist</p>
                  <span class="text-gray-extra-light-xl"
                    >Team expansion ‣ Hiring now</span
                  >
                </div>
              </div>
              <span
                class="absolute right-6 top-0 bottom-0 border border-l-red-black border-r-gray-light"
              ></span>
            </div>
          </section>
          <div
            class="bg-gray-dark border border-gray-light w-[410px] h-full rounded-md relative"
          >
            <span
              class="absolute left-6 top-0 bottom-0 border border-l-red-black border-r-gray-light"
            ></span>
            <div class="space-y-3 w-[310px] mx-auto my-5">
              <h3 class="text-gray-extra-light-xl flex items-center gap-x-2">
                Real-time Monitoring
                <img src="assets/icons/icon-three-dots.svg" alt="" />
              </h3>
              <div
                class="bg-gray-light border border-gray-extra-light py-3 px-2 text-[7.5px] rounded-md"
              >
                <p class="text-white">Luma ‣ Senior Backend Engineer</p>
                <span class="text-gray-extra-light-xl"
                  >New job post ‣ London</span
                >
              </div>
              <div
                class="bg-gray-light border border-gray-extra-light py-3 px-2 text-[7.5px] rounded-md"
              >
                <p class="text-white">TechCo ‣ Head of Communication</p>
                <span class="text-gray-extra-light-xl"
                  >New job post ‣ Manchester</span
                >
              </div>
              <div
                class="bg-gray-light border border-gray-extra-light py-3 px-2 text-[7.5px] rounded-md"
              >
                <p class="text-white">Finova ‣ Product Designer</p>
                <span class="text-gray-extra-light-xl"
                  >Team expansion ‣ Remote</span
                >
              </div>
              <div
                class="bg-gray-light border border-gray-extra-light py-3 px-2 text-[7.5px] rounded-md"
              >
                <p class="text-white">Acme ‣ Head of Data</p>
                <span class="text-gray-extra-light-xl"
                  >Series B funding ‣ Hiring now</span
                >
              </div>
              <div
                class="bg-gray-light border border-gray-extra-light py-3 px-2 text-[7.5px] rounded-md"
              >
                <p class="text-white">Paulax ‣ SEO Specialist</p>
                <span class="text-gray-extra-light-xl"
                  >Team expansion ‣ Hiring now</span
                >
              </div>
            </div>
            <span
              class="absolute right-6 top-0 bottom-0 border border-l-red-black border-r-gray-light"
            ></span>
          </div>
        </div>
        `;
}
