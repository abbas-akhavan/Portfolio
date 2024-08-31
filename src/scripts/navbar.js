export const deActiveAll = () => {
  const navLiTags = document.querySelectorAll("#navbar li");
  navLiTags.forEach((li) => {
    li.classList.remove("isActive");
  });
};
export const active = (query) => {
  document.querySelector(`[data-id='${query}']`).classList.add("isActive");
};
export const deActive = (query) => {
  document.querySelector(`[data-id='${query}']`).classList.remove("isActive");
};
const returnValidTargets = (targets) =>{
  let validTargets = undefined;
  if (!(typeof targets === "string" || targets instanceof Element || targets instanceof NodeList)) {
    return validTargets;
  }

  if (typeof targets === "string") {
    if (document.querySelectorAll(targets)) {
      validTargets = document.querySelectorAll(targets);
      return validTargets;
    }
    return validTargets;
  } else {
    validTargets = targets;
    return validTargets;
  }
};

export const observerElements =  (targets, callback) =>{
  let targetElements;
  if (returnValidTargets(targets)) {
    targetElements = returnValidTargets(targets);

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((enrty) => {
          if (enrty.isIntersecting) {
            callback(enrty.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (targetElements instanceof NodeList) {
      targetElements.forEach((element) => {
        observer.observe(element);
      });
    } else {
      observer.observe(targetElements);
    }
  } else {
    console.log("invalid target");
  }
};