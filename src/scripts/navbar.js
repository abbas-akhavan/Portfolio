export const deActiveAll = () => {
  const navLitag = document.querySelectorAll("#navbar li");
  navLitag.forEach((li) => {
    li.classList.remove("isActive");
  });
};
export const active = (query) => {
  document.querySelector(`[data-id='${query}']`).classList.add("isActive");
};
export const deActive = (query) => {
  document.querySelector(`[data-id='${query}']`).classList.remove("isActive");
};
