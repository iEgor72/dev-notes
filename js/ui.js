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

  let currentSection = null;
  let currentSectionId = "";
  let currentProgress = 0;

  const scrollBottom =
    window.innerHeight + window.scrollY >=
    document.documentElement.scrollHeight - 5;

  if (scrollBottom) {
    currentSection = sections[sections.length - 1];
    currentSectionId = currentSection.id;
    currentProgress = 1;
  } else {
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();

      if (rect.top <= 140 && rect.bottom > 140) {
        currentSection = section;
        currentSectionId = section.id;

        const sectionHeight = rect.height;
        const passed = 140 - rect.top;
        const progress = Math.max(0, Math.min(1, passed / sectionHeight));

        currentProgress = progress;
      }
    });
  }

  let activeLink = null;

  tocLinks.forEach((link) => {
    link.classList.remove("is-active");
    link.style.setProperty("--toc-progress", 0);

    if (link.getAttribute("href") === `#${currentSectionId}`) {
      link.classList.add("is-active");
      link.style.setProperty("--toc-progress", currentProgress);
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

function detectCodeLanguage(block) {
  const section = block.closest("section");
  const titleText = section?.querySelector(".section-title")?.textContent?.toLowerCase() || "";

  if (titleText.includes("html")) return "HTML";
  if (titleText.includes("css")) return "CSS";
  if (titleText.includes("javascript")) return "JS";
  if (titleText.includes("typescript")) return "TS";
  if (titleText.includes("git")) return "Git";

  const codeText = block.querySelector("code")?.innerText?.trim() || "";

  if (codeText.includes("</") || codeText.includes("<div") || codeText.includes("<section")) return "HTML";
  if (codeText.includes("const ") || codeText.includes("let ") || codeText.includes("=>")) return "JS";
  if (codeText.includes("{") && codeText.includes(":") && codeText.includes(";")) return "CSS";
  if (codeText.startsWith("git ")) return "Git";

  return "Code";
}

function initCopyButtons() {
  const codeBlocks = document.querySelectorAll(".code");

  codeBlocks.forEach((block) => {
    if (block.querySelector(".code-header")) return;

    const header = document.createElement("div");
    header.className = "code-header";

    const language = document.createElement("span");
    language.className = "code-language";
    language.textContent = detectCodeLanguage(block);

    const button = document.createElement("button");
    button.className = "copy-button";
    button.type = "button";
    button.setAttribute("aria-label", "Скопировать код");
    button.innerHTML = "⧉ <span>Copy</span>";

    header.appendChild(language);
    header.appendChild(button);
    block.appendChild(header);

    button.addEventListener("click", async () => {
      const code = block.querySelector("code")?.innerText || "";

      try {
        await navigator.clipboard.writeText(code);
        button.classList.add("copied");
        button.innerHTML = "✓ <span>Copied</span>";

        setTimeout(() => {
          button.classList.remove("copied");
          button.innerHTML = "⧉ <span>Copy</span>";
        }, 1400);
      } catch (error) {
        console.error("Copy failed:", error);
      }
    });
  });
}

window.addEventListener("load", initCopyButtons);