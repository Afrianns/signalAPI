export default function traditionalApproach() {
  document.querySelector<HTMLDivElement>(
    "#traditional-approach"
  )!.innerHTML = `<div
          class="bg-black text-white drop-shadow-sb p-10 mt-10 w-fit rounded-lg"
        >
          <h4
            class="flex items-center justify-center gap-x-3 font-bold text-xl"
          >
            Traditional Approach
          </h4>
          <ul class="mt-10 space-y-6">
            <li class="flex items-center gap-x-10">
              <img src="assets/icons/icon-cross.svg" alt="" />
              <p class="text-md font-bold font-satoshi">
                Hire, train, manage junior BDRs
              </p>
            </li>
            <li class="flex items-center gap-x-10">
              <img src="assets/icons/icon-cross.svg" alt="" />
              <p class="text-md font-bold font-satoshi">
                Human limitations and turnover
              </p>
            </li>
            <li class="flex items-center gap-x-10">
              <img src="assets/icons/icon-cross.svg" alt="" />
              <p class="text-md font-bold font-satoshi">
                Business development
                <span class="bg-red-500">stops at 5pm</span>
              </p>
            </li>
            <li class="flex items-center gap-x-10">
              <img src="assets/icons/icon-cross.svg" alt="" />
              <p class="text-md font-bold font-satoshi">
                Growth means more headcount
              </p>
            </li>
            <li class="flex items-center gap-x-10">
              <img src="assets/icons/icon-cross.svg" alt="" />
              <p class="text-md font-bold font-satoshi">
                <span class="bg-red-500">£65K per hire</span> + management time
              </p>
            </li>
            <li class="flex items-center gap-x-10">
              <img src="assets/icons/icon-cross.svg" alt="" />
              <p class="text-md font-bold font-satoshi">
                Hit-or-miss results, random cold calling
              </p>
            </li>
          </ul>
        </div>`;
}
