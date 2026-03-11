const backToTopButton = document.querySelector(".back-to-top");
const toc = document.querySelector(".toc");
const tocLinks = document.querySelectorAll(".toc a");
const sections = document.querySelectorAll(".docs-content section[id]");

function updateScrollProgress() {
  if (!backToTopButton) return;

  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = (scrollTop / docHeight) * 100;

  backToTopButton.style.setProperty("--scroll-progress", progress + "%");

  if (scrollTop > 400) {
    backToTopButton.style.opacity = "1";
    backToTopButton.style.pointerEvents = "auto";
  } else {
    backToTopButton.style.opacity = "0";
    backToTopButton.style.pointerEvents = "none";
  }
}

function scrollTocToActiveLink(activeLink) {
  if (!toc || !activeLink) return;

  const tocRect = toc.getBoundingClientRect();
  const linkRect = activeLink.getBoundingClientRect();

  const isAbove = linkRect.top < tocRect.top + 20;
  const isBelow = linkRect.bottom > tocRect.bottom - 20;

  if (isAbove || isBelow) {
    activeLink.scrollIntoView({
      block: "nearest",
      behavior: "smooth"
    });
  }
}

function updateActiveTocLink() {
  if (!tocLinks.length || !sections.length) return;

  let currentSectionId = "";

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();

    if (rect.top <= 140 && rect.bottom > 140) {
      currentSectionId = section.id;
    }
  });

  let activeLink = null;

  tocLinks.forEach((link) => {
    link.classList.remove("is-active");

    if (link.getAttribute("href") === `#${currentSectionId}`) {
      link.classList.add("is-active");
      activeLink = link;
    }
  });

  if (activeLink) {
    scrollTocToActiveLink(activeLink);
  }
}

window.addEventListener("scroll", () => {
  updateScrollProgress();
  updateActiveTocLink();
});

window.addEventListener("load", () => {
  updateScrollProgress();
  updateActiveTocLink();
});

if (backToTopButton) {
  backToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}