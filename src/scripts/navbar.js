export const deActiveAll = () => {
  const navLiTags = document.querySelectorAll("#navbar li");
  navLiTags.forEach((li) => {
    li.classList.remove("isActive");
  });
};
export const active = (query) => {
  document.querySelector(`[data-sectionid='${query}']`).classList.add("isActive");
};
export const deActive = (query) => {
  document.querySelector(`[data-sectionid='${query}']`).classList.remove("isActive");
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

export const observerElements =  (targets, inViewallback , outViewCallback) =>{
  let targetElements;
  if (returnValidTargets(targets)) {
    targetElements = returnValidTargets(targets);

    // const observer = new IntersectionObserver(
    //   (entries, observer) => {
    //     entries.forEach((enrty) => {
    //       if (enrty.isIntersecting) {
    //         callback(enrty.target);
    //       }
    //     });
    //   },
    //   { threshold: 0.5 }
    // );



    // if (targetElements instanceof NodeList) {
    //   targetElements.forEach((element) => {
    //     observer.observe(element);
    //   });
    // } else {
    //   observer.observe(targetElements);
    // }




    const seen = (element)=>{
      const scrollPosition = window.innerHeight + document.documentElement.scrollTop;
          const elementTop = element.getBoundingClientRect().top;
          if(elementTop < scrollPosition){
            return true;
          }

          else{
            return false;
          }
    }
    window.addEventListener('scroll' , function(){
      if (targetElements instanceof NodeList) {
        targetElements.forEach((element) => {
          if(seen(element)){
            inViewallback(element)
          }
          else{
            outViewCallback(element)
          }
        });
      } else {
        if(seen(targetElements)){
          inViewallback(targetElements)
        }
        else{
          outViewCallback(targetElements)
        }
      }
    })

    
  } else {
    console.log("invalid target");
  }
};


//scroll in to view code
export const activesectionAnchors = ()=>{
  const sectionAnchors = document.querySelectorAll('[data-sectionid]');
  if(sectionAnchors){
    sectionAnchors.forEach(anchor =>{
      anchor.addEventListener('click' , ()=>{
        const query = anchor.dataset.sectionid;
        const targetSection = document.querySelector(`#${query}`);
        targetSection.scrollIntoView();
      })
    })
  }
  
}
