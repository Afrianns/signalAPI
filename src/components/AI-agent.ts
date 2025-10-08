export default function AIAgent() {
  document.querySelector<HTMLDivElement>("#AI-agent")!.innerHTML = `
  <div class="bg-white drop-shadow-sb p-7 mt-10 w-fit rounded-lg">
          <h4
            class="flex items-center justify-center gap-x-3 font-bold text-xl lg:text-5xl"
          >
            Your AI Agent <img src="assets/croissant-laptop.svg" alt="" />
          </h4>
          <ul class="mt-10 space-y-10">
            <li class="flex items-center gap-x-10">
              <img src="assets/icons/icon-checklist-black.svg" alt="" />
              <img src="assets/icons/icon-247h.svg" alt="" />
              <p class="text-2xl font-bold font-satoshi">
                AI agent works from day one 24/7
              </p>
            </li>
            <li class="flex items-center gap-x-10">
              <img src="assets/icons/icon-checklist-black.svg" alt="" />
              <img src="assets/icons/icon-bulb.svg" alt="" />
              <p class="text-2xl font-bold font-satoshi">
                AI gets smarter every interaction
              </p>
            </li>
            <li class="flex items-center gap-x-10">
              <img src="assets/icons/icon-checklist-black.svg" alt="" />
              <img src="assets/icons/icon-shield.svg" alt="" />
              <p class="text-2xl font-bold font-satoshi">
                <span class="bg-[#FFD116]">100% risk free</span>, we don’t bill
                until your AI agent is booking qualified meetings
              </p>
            </li>
            <li class="flex items-center gap-x-10">
              <img src="assets/icons/icon-checklist-black.svg" alt="" />
              <img src="assets/icons/icon-chart-up.svg" alt="" />
              <p class="text-2xl font-bold font-satoshi">
                Growth means more AI capacity
              </p>
            </li>
            <li class="flex items-center gap-x-10">
              <img src="assets/icons/icon-checklist-black.svg" alt="" />
              <img src="assets/icons/icon-snap-finger.svg" alt="" />
              <p class="text-2xl font-bold font-satoshi">
                £700/month, <span class="bg-[#FFD116]">zero managment</span>
              </p>
            </li>
            <li class="flex items-center gap-x-10">
              <img src="assets/icons/icon-checklist-black.svg" alt="" />
              <img src="assets/icons/icon-snap-finger.svg" alt="" />
              <p class="text-2xl font-bold font-satoshi">
                Predictable, measurable outcomes by targeting companies actively
                hiring
              </p>
            </li>
          </ul>
        </div>`;
}
