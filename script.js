document.documentElement.classList.add("js-enabled");

const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const objects = [
  "To acquire, purchase, lease, or otherwise obtain any movable or immovable property, assets, licenses, or rights required for the business.",
  "To hire, employ, train, or engage consultants, professionals, and staff necessary for carrying out the business activities.",
  "To enter into agreements, contracts, collaborations, or partnerships with individuals, companies, or organizations in India or abroad.",
  "To open, operate, and maintain bank accounts and to borrow or raise funds as required for business purposes.",
  "To market, promote, license, or sell software products and services.",
  "To do all such other lawful acts as may be necessary or incidental to the attainment of the above objects.",
  "To design, develop, test, deploy, maintain, and upgrade software applications, including mobile and web-based applications.",
  "To create and manage social networking platforms, digital content sharing systems, and online communities.",
  "To develop and maintain backend infrastructure, cloud-based systems, databases, and server-side applications.",
  "To provide IT consulting, technical advisory, and technology strategy services to clients.",
  "To develop, implement, and provide blockchain-based solutions, smart contracts, and decentralized applications (DApps).",
  "To offer software-as-a-service (SaaS), platform-as-a-service (PaaS), and other digital service models.",
  "To integrate third-party APIs, payment gateways, and external systems into applications and platforms.",
  "To undertake research and development in software technologies, blockchain, and emerging digital solutions.",
  "To acquire, hold, and manage intellectual property rights including copyrights, patents, trademarks, and proprietary software.",
  "To license, sell, distribute, or otherwise commercialize software products, platforms, and technology solutions.",
  "To enter into contracts, agreements, collaborations, joint ventures, or partnerships with individuals or entities in India or abroad.",
  "To hire, employ, train, and retain developers, engineers, designers, consultants, and other professionals.",
  "To establish offices, development centers, and branches in India or outside India.",
  "To procure, lease, or otherwise acquire hardware, software tools, cloud services, and other infrastructure required for operations.",
  "To ensure cybersecurity, data protection, encryption, and secure storage of digital information.",
  "To provide maintenance, technical support, troubleshooting, and upgrade services for software and platforms.",
  "To market, promote, advertise, and brand the company's products and services through digital and other channels.",
  "To open, operate, and maintain bank accounts and payment systems for business transactions.",
  "To raise or borrow funds through loans, investments, venture capital, or other financial instruments.",
  "To invest surplus funds in such manner as may be deemed appropriate by the company.",
  "To outsource or subcontract any part of the development, operations, or services of the company.",
  "To comply with all applicable laws, regulations, and standards including IT, data protection, and blockchain-related laws.",
  "To undertake training programs, workshops, and educational initiatives related to software and technology.",
  "To insure the assets, employees, and operations of the company against risks.",
  "To do all such other lawful acts, deeds, and things as are incidental or conducive to the attainment of the above objects.",
];

function fillList(targetId, start, end) {
  const target = document.getElementById(targetId);
  if (!target) return;

  const fragment = document.createDocumentFragment();
  objects.slice(start, end).forEach((text, index) => {
    const li = document.createElement("li");
    li.textContent = text;
    fragment.appendChild(li);
  });

  target.appendChild(fragment);
}

fillList("objects-list-1", 0, 7);
fillList("objects-list-2", 7, 20);
fillList("objects-list-3", 20, 31);

const revealTargets = [
  ...document.querySelectorAll(".section"),
  document.querySelector(".contact-section"),
].filter(Boolean);

revealTargets.forEach((target) => target.classList.add("reveal"));

document
  .querySelectorAll(".about-grid .info-card, .service-card, .details-card, .objects-shell details, .contact-card")
  .forEach((item, index) => {
    item.classList.add("reveal");
    item.style.setProperty("--reveal-delay", `${Math.min(index * 70, 280)}ms`);
    if (item.matches(".contact-card")) {
      item.classList.add("reveal-slow");
    }
  });

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
  );

  document.querySelectorAll(".reveal").forEach((item) => observer.observe(item));
} else {
  document.querySelectorAll(".reveal").forEach((item) => item.classList.add("is-visible"));
}
