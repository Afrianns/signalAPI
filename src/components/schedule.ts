export default function schedule() {
  document.querySelector<HTMLDivElement>(
    "#schedule-illustration"
  )!.innerHTML = `
<div
          class="bg-gray-dark border border-gray-light py-5 px-10 w-full max-w-[60rem] rounded-md space-y-5"
        >
          <h3 class="text-white opacity-50 mb-5">Your Calendar</h3>
          <div
            class="flex bg-yellow-light opacity-60 border border-[#B89300] py-5 px-7 rounded-lg gap-5 text-sm"
          >
            <img src="assets/icons/icon-schedule.svg" alt="" />
            <div>
              <p class="font-bold">TechCorp - Sales Hiring</p>
              <span class="text-gray-500">Today 2:00 PM</span>
            </div>
          </div>
          <div
            class="flex bg-yellow-light opacity-60 border border-[#B89300] py-5 px-7 rounded-lg gap-5 text-sm"
          >
            <img src="assets/icons/icon-schedule.svg" alt="" />
            <div>
              <p class="font-bold">FinTech Solutions - Expansion</p>
              <span class="text-gray-500">Tomorrow 10:00 AM</span>
            </div>
          </div>
          <div class="flex bg-yellow-light py-5 px-7 rounded-lg gap-5 text-sm">
            <img src="assets/icons/icon-schedule.svg" alt="" />
            <div>
              <p class="font-bold">Luma - Backend Enginieer</p>
              <span class="text-gray-500">Tuesday 10:30 AM</span>
            </div>
          </div>
        </div>
`;
}
