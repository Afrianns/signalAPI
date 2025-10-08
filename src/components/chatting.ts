export default function chatting() {
  document.querySelector<HTMLDivElement>(
    "#chatting-illustration"
  )!.innerHTML = `
<div
class="bg-gray-dark border border-gray-light py-5 px-10 w-full max-w-[50rem] rounded-md space-y-5"
        >
          <h3 class="text-white opacity-50 mb-5">LinkedIn Outreach</h3>
          <p class="bg-yellow-light py-2 px-3 rounded-xl max-w-[250px]">
            Hi Sara - noticed you’re scaling the data team at Luma. We recently
            placed 2 engineers for a similar team. Would a quick intro call
            help?
          </p>
          <p
            class="ml-auto text-white bg-gray-light border border-gray-extra-light py-2 px-4 max-w-[250px] rounded-xl"
          >
            Available Tue 10:30 or Web 14:00. Which works?
          </p>
          <p class="bg-yellow-light py-2 px-3 rounded-xl max-w-[250px]">
            Let’s do Tue 10:30. Here’s my email for the invite.
          </p>
          <p
            class="ml-auto text-white bg-gray-light border border-gray-extra-light py-2 px-4 w-fit max-w-[250px] rounded-xl text-center"
          >
            Perfect !
          </p>
        </div>
`;
}
