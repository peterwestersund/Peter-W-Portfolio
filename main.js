function reveal() {
    let reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      let windowHeight = window.innerHeight;
      let elementTop = reveals[i].getBoundingClientRect().top;
      let elementVisible = 1;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);


  
// Skills Animate On Scroll


  let elementHtml = document.querySelector('#elementHtml');
  let observerHtml = new IntersectionObserver(entries => {
  elementHtml.classList.toggle('animate', entries[0].isIntersecting
   );

  
  });
  
  observerHtml.observe( elementHtml );


  let elementCss = document.querySelector('#elementCss');
  let observerCss = new IntersectionObserver(entries => {
  elementCss.classList.toggle('animate', entries[0].isIntersecting
   );

  
  });
  
  observerCss.observe( elementCss );

  let elementJs = document.querySelector('#elementJs');
  let observerJs = new IntersectionObserver(entries => {
  elementJs.classList.toggle('animate', entries[0].isIntersecting
   );

  
  });
  
  observerJs.observe( elementJs );


  let elementFigma = document.querySelector('#elementFigma');
  let observerFigma = new IntersectionObserver(entries => {
  elementFigma.classList.toggle('animate', entries[0].isIntersecting
   );

  
  });
  
  observerFigma.observe( elementFigma );

