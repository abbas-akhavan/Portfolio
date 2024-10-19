export const deActiveAll = () => {
  const navLiTags = document.querySelectorAll("#navbar li");
  navLiTags.forEach((li) => {
    li.classList.remove("isActive");
  });
};
export const active = (query) => {
  document.querySelector(`[data-scrolltoid='${query}']`).classList.add("isActive");
};
export const deActive = (query) => {
  document.querySelector(`[data-scrolltoid='${query}']`).classList.remove("isActive");
};
