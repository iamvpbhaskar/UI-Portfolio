const skills = [
  {
    title: "Frontend and UI Development",
    description:
      "Responsive UI, frontend builds, and website revamps across modern web stacks.",
    tags: ["HTML", "CSS", "JavaScript", "React", "Tailwind"],
    icon: "code"
  },
  {
    title: "Platform and API Work",
    description:
      "API workflows, AI integrations, content systems, and product-facing platform work.",
    tags: ["REST APIs", "AI Integration", "Python", "Flask", "Postman"],
    icon: "spark"
  },
  {
    title: "Tools and Workflow",
    description:
      "Delivery-focused workflow using GitHub, AWS, Figma, automation, and AI tools.",
    tags: ["GitHub", "AWS", "n8n", "Figma", "Automation"],
    icon: "layers"
  }
];

const experience = [
  {
    period: "Nov 2024 - Present",
    role: "Frontend Developer / UI Engineer",
    company: "PingBix",
    location: "Bangalore, IN",
    highlights: [
      "Designed and built the Pingbix Sandbox, a self-serve SMS and WhatsApp API testing platform with a secure Flask backend and Tailwind UI, boosting client onboarding conversion by 80%+.",
      "Developed AI-powered WhatsApp bots for UpGrad, BharatLoan, and Narayana Health using Python, REST APIs, and Postman-driven workflows.",
      "Led the complete Pingbix website UI and UX overhaul and built a dynamic Next.js plus Strapi blog system.",
      "Currently contributing to the Voice AI CPaaS platform UI at agent.pingbix.ai."
    ]
  },
  {
    period: "Jul 2024 - Oct 2024",
    role: "Associate System Engineer (Frontend)",
    company: "CGI",
    location: "Bangalore, IN",
    highlights: [
      "Trained in Intune, M365, and cloud service models including IaaS, PaaS, and SaaS.",
      "Proactively transitioned into frontend work and learned React and Next.js to improve UI performance.",
      "Contributed to a banking platform frontend with responsive UI and UX improvements."
    ]
  },
  {
    period: "Aug 2023 - Oct 2023",
    role: "Tech Support  - Operations",
    company: "Aptcoder",
    location: "Remote / Uttar Pradesh, IN",
    highlights: [
      "Handled client onboarding, resolved UI issues, and supported day-to-day operations.",
      "Delivered internal training and maintained workflow documentation."
    ]
  }
];

const projects = [
  {
    title: "Voice AI CPaaS Platform",
    description:
      "Currently leading UI development for the Pingbix Voice AI CPaaS platform, building responsive product interfaces and frontend flows for AI-led communication workflows.",
    stack: ["UI Development", "CPaaS", "AI Workflows", "Responsive Frontend"],
    imageSrc: "assets/voice-ai-platform.png",
    imageScale: 1.18,
    imagePosition: "center top",
    link: "https://agent.pingbix.ai",
    ctaLabel: "View Live",
    external: true,
    tone: "linear-gradient(135deg, rgba(88, 173, 255, 0.24), rgba(97, 242, 194, 0.16), rgba(255, 147, 109, 0.24))",
    status: "Live at agent.pingbix.ai"
  },
  {
    title: "Blog Platform - Pingbix",
    description:
      "Built a production-ready Next.js and Strapi blog with native SEO, sitemap integration, filterable categories, and role-based content management for ongoing publishing.",
    stack: ["Next.js", "Strapi", "SEO", "Content Management"],
    imageSrc: "assets/pingbix-nextjs-blog.png",
    imageScale: 1.08,
    imagePosition: "center center",
    link: "https://blog.pingbix.com",
    ctaLabel: "View Live",
    external: true,
    tone: "linear-gradient(135deg, rgba(255, 147, 109, 0.22), rgba(255, 214, 153, 0.18), rgba(88, 173, 255, 0.14))",
    status: "Next.js and Strapi production blog"
  },
  {
    title: "Pingbix Website",
    description:
      "Led the end-to-end website UI and UX overhaul using HTML, CSS, JavaScript, Tailwind, Alpine.js, and D3.js, while also migrating Bootstrap 4 to 5 and deploying the revamp on AWS.",
    stack: ["HTML", "CSS", "JavaScript", "Alpine.js", "D3.js"],
    imageSrc: "assets/pingbix-website.png",
    imageScale: 1.05,
    imagePosition: "center top",
    link: "https://pingbix.com",
    ctaLabel: "View Live",
    external: true,
    tone: "linear-gradient(135deg, rgba(88, 173, 255, 0.28), rgba(14, 25, 36, 0.4), rgba(97, 242, 194, 0.16))",
    status: "Bootstrap migration and AWS deployment"
  },
  {
    title: "Pingbix Sandbox",
    description:
      "Designed and built the Pingbix Sandbox, a self-serve SMS and WhatsApp API testing platform with a secure Python Flask backend, JWT authentication, OTP verification, rate limiting, Redis, and a modern Tailwind-based frontend with real-time phone previews.",
    stack: ["Python", "Flask", "Tailwind", "Redis", "JWT"],
    imageSrc: "assets/sandbox=testing .png",
    imageScale: 1.06,
    imagePosition: "center top",
    link: "#",
    tone: "linear-gradient(135deg, rgba(97, 242, 194, 0.24), rgba(88, 173, 255, 0.28), rgba(255, 147, 109, 0.18))",
    status: "Boosted onboarding conversion by 80%+"
  }
];

const education = [
  {
    period: "2019 - 2023",
    title: "B.Tech in Computer Science and Engineering",
    description:
      "Siliguri Institute of Tech.",
    details: "CGPA: 9.1 / 10.0"
  },
  {
    period: "2018",
    title: "12th Standard",
    description:
      "B.S.S High School, Piro.",
    details: "Score: 66 percent"
  }
];

const iconMap = {
  code: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m8 16-4-4 4-4"></path>
      <path d="m16 8 4 4-4 4"></path>
      <path d="m14 4-4 16"></path>
    </svg>
  `,
  spark: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3 9.8 9.8 3 12l6.8 2.2L12 21l2.2-6.8L21 12l-6.8-2.2z"></path>
    </svg>
  `,
  layers: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m12 4 8 4-8 4-8-4 8-4Z"></path>
      <path d="m4 12 8 4 8-4"></path>
      <path d="m4 16 8 4 8-4"></path>
    </svg>
  `
};

function renderSkills() {
  const skillsGrid = document.getElementById("skills-grid");

  skillsGrid.innerHTML = skills
    .map(
      (skill) => `
        <article class="skill-card" data-reveal>
          <div class="skill-icon">${iconMap[skill.icon]}</div>
          <h3>${skill.title}</h3>
          <p>${skill.description}</p>
          <div class="skill-meta">
            ${skill.tags.map((tag) => `<span class="chip">${tag}</span>`).join("")}
          </div>
        </article>
      `
    )
    .join("");
}

function renderExperience() {
  const timeline = document.getElementById("timeline");

  timeline.innerHTML = experience
    .map(
      (item, index) => `
        <article class="timeline-item ${index % 2 === 0 ? "left" : "right"}" data-reveal>
          <div class="timeline-card">
            <span>${item.period}</span>
            <h3>${item.role}</h3>
            <div class="timeline-meta">
              <span class="chip">${item.company}</span>
              <span class="chip">${item.location}</span>
            </div>
            <ul class="timeline-highlights">
              ${item.highlights.map((point) => `<li>${point}</li>`).join("")}
            </ul>
          </div>
        </article>
      `
    )
    .join("");
}

function renderProjects() {
  const projectsGrid = document.getElementById("projects-grid");

  projectsGrid.innerHTML = projects
    .map((project) => {
      const imageStyle = [
        project.imageScale ? `--image-scale:${project.imageScale}` : "",
        project.imagePosition ? `--image-position:${project.imagePosition}` : ""
      ]
        .filter(Boolean)
        .join(";");

      const previewInner = `
        <div class="project-preview ${project.imageSrc ? "project-preview-has-image" : ""}" style="--card-bg: ${project.tone};">
          ${
            project.imageSrc
              ? `<img class="project-image" src="${project.imageSrc}" alt="${project.title} preview" ${imageStyle ? `style="${imageStyle}"` : ""}>`
              : `
                <div class="project-window">
                  <div class="window-bar">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <div class="window-layout">
                    <div class="window-sidebar">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <div class="window-main">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
              `
          }
          ${project.imageSrc ? '<span class="project-preview-badge">Tap to view</span>' : ""}
        </div>
      `;

      return `
        <article class="project-card" data-reveal>
          ${
            project.imageSrc
              ? `<button class="project-preview-button" type="button" data-preview-src="${project.imageSrc}" data-preview-title="${project.title}" aria-label="View ${project.title} image">${previewInner}</button>`
              : previewInner
          }
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <div class="project-meta">
            ${project.stack.map((tag) => `<span class="chip">${tag}</span>`).join("")}
          </div>
          <div class="project-footer">
            <span>${project.status}</span>
            <a href="${project.link}" ${project.external ? 'target="_blank" rel="noreferrer"' : ""}>${project.ctaLabel || "Discuss Project"}</a>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderEducation() {
  const educationGrid = document.getElementById("education-grid");

  educationGrid.innerHTML = education
    .map(
      (item) => `
        <article class="education-card" data-reveal>
          <span class="year">${item.period}</span>
          <div class="details">
            <h3>${item.title}</h3>
            <p>${item.description}</p>
            <p class="education-note">${item.details}</p>
          </div>
        </article>
      `
    )
    .join("");
}

function setupRevealObserver() {
  const revealItems = document.querySelectorAll("[data-reveal]");

  if (!("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.16,
      rootMargin: "0px 0px -40px 0px"
    }
  );

  revealItems.forEach((item) => observer.observe(item));
}

function setupNav() {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelectorAll(".site-nav a");

  toggle.addEventListener("click", () => {
    const isOpen = header.classList.toggle("nav-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      header.classList.remove("nav-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

function setupParallax() {
  const heroVisual = document.querySelector(".hero-visual");
  const glow = document.querySelector(".hero-glow");

  if (!heroVisual || !glow || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  let frame = null;

  heroVisual.addEventListener("pointermove", (event) => {
    const bounds = heroVisual.getBoundingClientRect();
    const offsetX = (event.clientX - bounds.left) / bounds.width - 0.5;
    const offsetY = (event.clientY - bounds.top) / bounds.height - 0.5;

    if (frame) {
      cancelAnimationFrame(frame);
    }

    frame = requestAnimationFrame(() => {
      glow.style.transform = `translate3d(${offsetX * 36}px, ${offsetY * 24}px, 0)`;
    });
  });

  heroVisual.addEventListener("pointerleave", () => {
    glow.style.transform = "";
  });
}

function setupProjectPreviewLightbox() {
  const previewButtons = document.querySelectorAll(".project-preview-button");
  const lightbox = document.getElementById("project-lightbox");
  const lightboxImage = document.getElementById("project-lightbox-image");
  const lightboxTitle = document.getElementById("project-lightbox-title");
  const closeButton = document.getElementById("project-lightbox-close");

  if (!previewButtons.length || !lightbox || !lightboxImage || !lightboxTitle || !closeButton) {
    return;
  }

  const openLightbox = (src, title) => {
    lightboxImage.src = src;
    lightboxImage.alt = `${title} preview`;
    lightboxTitle.textContent = title;
    lightbox.hidden = false;
    document.body.classList.add("lightbox-open");
  };

  const closeLightbox = () => {
    lightbox.hidden = true;
    lightboxImage.src = "";
    lightboxImage.alt = "";
    document.body.classList.remove("lightbox-open");
  };

  previewButtons.forEach((button) => {
    button.addEventListener("click", () => {
      openLightbox(button.dataset.previewSrc, button.dataset.previewTitle || "Project preview");
    });
  });

  closeButton.addEventListener("click", closeLightbox);

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !lightbox.hidden) {
      closeLightbox();
    }
  });
}

function setupBackToTop() {
  const button = document.getElementById("back-to-top");

  if (!button) {
    return;
  }

  const toggleVisibility = () => {
    const shouldShow = window.scrollY > Math.max(420, window.innerHeight * 0.55);
    button.classList.toggle("is-visible", shouldShow);
  };

  button.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth"
    });
  });

  window.addEventListener("scroll", toggleVisibility, { passive: true });
  toggleVisibility();
}

function setupContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) {
    return;
  }

  const note = document.getElementById("form-note");
  const submitBtn = form.querySelector('button[type="submit"]');

  if (!submitBtn) {
    return;
  }

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    formData.append("access_key", "2295bab9-902e-4698-ab5a-ad8a3244f16e");
    formData.append("subject", "Portfolio enquiry from vedprakashbhaskar.com");

    const originalText = submitBtn.textContent;

    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;
    if (note) {
      note.textContent = "Sending your enquiry...";
      note.className = "form-note full-width";
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (response.ok) {
        if (note) {
          note.textContent = "Success! Your message has been sent.";
          note.className = "form-note form-note-success full-width";
        }
        form.reset();
      } else {
        if (note) {
          note.textContent = `Error: ${data.message}`;
          note.className = "form-note form-note-error full-width";
        }
      }
    } catch (error) {
      if (note) {
        note.textContent = "Something went wrong. Please try again.";
        note.className = "form-note form-note-error full-width";
      }
    } finally {
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }
  });
}

function setYear() {
  document.getElementById("current-year").textContent = new Date().getFullYear();
}

renderSkills();
renderExperience();
renderProjects();
renderEducation();
setupRevealObserver();
setupNav();
setupParallax();
setupProjectPreviewLightbox();
setupBackToTop();
setupContactForm();
setYear();
