/**
 * Nexi SHOP - Main Application Script
 * Premium Discord Community Platform
 */

// ==================== Configuration ====================
const CONFIG = {
  discord: {
    primary: "https://discord.gg/nexiott",
    secondary: "https://discord.gg/nexiott2",
    contact: "https://discord.com/users/REPLACE_ME"
  },
  animation: {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
    staggerDelay: 100
  }
};

// ==================== Product Data ====================
const PRODUCTS = [
  {
    name: "넷플릭스 (LIFETIME)",
    price: "₩500",
    desc: "로그인 보증 · 이메일/비번 제공 · 쿠키 지급 · 불량 시 구매 후 1시간 내 교환",
    tag: "HOT",
    icon: "🎬",
    category: "streaming"
  },
  {
    name: "디즈니+ (LIFETIME)",
    price: "₩500",
    desc: "랜덤계정 · 로그인 보증 · 불량 시 구매 후 5분 내 교환",
    tag: "NEW",
    icon: "🏰",
    category: "streaming"
  },
  {
    name: "크런치롤 (LIFETIME)",
    price: "₩400",
    desc: "무제한 · 로그인 보증 · 불량 시 구매 후 59분 내 교환",
    tag: "NEW",
    icon: "🍿",
    category: "streaming"
  },
  {
    name: "듀오링고 (LIFETIME)",
    price: "₩300",
    desc: "로그인 보증 · 이메일/비번 제공 · 불량 시 구매 후 1일 내 교환",
    tag: "HOT",
    icon: "🦉",
    category: "education"
  },
  {
    name: "스팀 랜계",
    price: "₩50",
    desc: "랜덤계정 · 보증 2개당 1개",
    tag: "SALE",
    icon: "🕹️",
    category: "gaming"
  },
  {
    name: "노드VPN (LIFETIME)",
    price: "₩2,300",
    desc: "계정 지급 · 로그인 보증 · 불량 시 구매 후 1일 내 교환",
    tag: "SAFE",
    icon: "🛡️",
    category: "security"
  },
  {
    name: "스포티파이",
    price: "₩3,000",
    desc: "프리미엄 개인계정 3개월 · 로그인 보증 · 불량 시 구매 후 30일 내 교환",
    tag: "BEST",
    icon: "🎵",
    category: "music"
  },
  {
    name: "유튜브 프리미엄",
    price: "₩4,000",
    desc: "계정 1개월 · 2주 보증 · 개인계정에 적용",
    tag: "BEST",
    icon: "📺",
    category: "streaming"
  },
  {
    name: "로블록스 계정",
    price: "₩40",
    desc: "계정번호/아이디/비밀번호/쿠키 · 로그인 보증 · 구매 후 1일 내 교환",
    tag: "NEW",
    icon: "🧱",
    category: "gaming"
  },
  {
    name: "캡컷 프로 (WEB)",
    price: "₩1,200",
    desc: "계정 아이디/비번 지급 · 로그인 보증 · 구매 후 3일 내 교환",
    tag: "NEW",
    icon: "🎞️",
    category: "creative"
  },
  {
    name: "카카오톡 자동 메시지 전송 툴",
    price: "₩100/일 · ₩3,000/30일 · ₩10,000/영구",
    desc: "Windows PC 전용 · GUI 기반 자동 메시지 전송 매크로",
    tag: "TOOL",
    icon: "💬",
    category: "tools"
  },
  {
    name: "Gemini PRO",
    price: "₩4,900",
    desc: "계정 지급 · 로그인 보증 + 프로 적용 보증 · 3일 보증",
    tag: "NEW",
    icon: "✨",
    category: "ai"
  },
  {
    name: "ChatGPT Plus (1개월)",
    price: "₩3,900",
    desc: "계정 지급 · 로그인 보증 + Plus 적용 보증 · 구매 후 3일 보증",
    tag: "BEST",
    icon: "🤖",
    category: "ai"
  },
  {
    name: "일회용 가상번호 (디스코드)",
    price: "₩500 ~ ₩700 / 1회",
    desc: "SMS 수신 전용 · 20분 사용 후 만료 · 불량 교환/환불 불가",
    tag: "INFO",
    icon: "📦",
    category: "utility"
  },
  {
    name: "익스프레스VPN (LIFETIME)",
    price: "₩500",
    desc: "계정 지급 · 로그인 보증 · 불량 시 구매 후 1일 내 교환",
    tag: "SAFE",
    icon: "🔒",
    category: "security"
  },
];

// ==================== DOM Elements ====================
class DOMElements {
  constructor() {
    this.productGrid = document.getElementById("product-grid");
    this.modal = document.getElementById("info-modal");
    this.modalDiscord = document.getElementById("modal-discord");
    this.modalDiscord2 = document.getElementById("modal-discord-2");
    this.modalTitle = document.getElementById("modal-title");
    this.modalDesc = document.getElementById("modal-desc");
    this.ctaDiscord = document.getElementById("cta-discord");
    this.ctaDiscord2 = document.getElementById("cta-discord-2");
    this.ctaContact = document.getElementById("cta-contact");
    this.footerCopy = document.getElementById("footer-copy");
  }
}

// ==================== Animation Manager ====================
class AnimationManager {
  constructor(config) {
    this.config = config;
    this.observer = null;
  }

  initialize() {
    this.observer = new IntersectionObserver(
      (entries) => this.handleIntersection(entries),
      {
        threshold: this.config.threshold,
        rootMargin: this.config.rootMargin
      }
    );
  }

  handleIntersection(entries) {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('animate-in');
        }, index * this.config.staggerDelay);
        this.observer.unobserve(entry.target);
      }
    });
  }

  observeElements(selector) {
    document.querySelectorAll(selector).forEach((element) => {
      element.classList.add('animate-ready');
      this.observer.observe(element);
    });
  }
}

// ==================== Product Manager ====================
class ProductManager {
  constructor(products, domElements) {
    this.products = products;
    this.dom = domElements;
  }

  createProductCard(product, index) {
    const card = document.createElement("div");
    card.className = "product-card";
    card.setAttribute('data-category', product.category || 'general');

    const elements = {
      tag: this.createElement('span', 'tag', product.tag || 'INFO'),
      icon: this.createElement('div', 'icon', product.icon),
      title: this.createElement('h3', '', product.name),
      price: this.createElement('div', 'price', product.price),
      desc: this.createElement('p', 'desc', product.desc),
      button: this.createButton(product)
    };

    Object.values(elements).forEach(el => card.appendChild(el));
    return card;
  }

  createElement(tag, className, textContent) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (textContent) element.textContent = textContent;
    return element;
  }

  createButton(product) {
    const button = document.createElement('button');
    button.className = 'btn ghost';
    button.type = 'button';
    button.textContent = '자세히 보기 →';
    button.addEventListener('click', () => this.openModal(product));
    return button;
  }

  render() {
    if (!this.dom.productGrid) return;

    const fragment = document.createDocumentFragment();
    this.products.forEach((product, index) => {
      fragment.appendChild(this.createProductCard(product, index));
    });

    this.dom.productGrid.appendChild(fragment);
  }

  openModal(product) {
    if (!this.dom.modal) return;

    if (this.dom.modalTitle) {
      this.dom.modalTitle.textContent = `💎 ${product.name}`;
    }

    if (this.dom.modalDesc) {
      this.dom.modalDesc.textContent = product.desc;
    }

    this.dom.modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  closeModal() {
    if (!this.dom.modal) return;
    this.dom.modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }
}

// ==================== Modal Manager ====================
class ModalManager {
  constructor(domElements, productManager) {
    this.dom = domElements;
    this.productManager = productManager;
  }

  initialize() {
    if (!this.dom.modal) return;

    // Click handler
    this.dom.modal.addEventListener("click", (event) => {
      if (event.target?.dataset?.close === "true") {
        this.productManager.closeModal();
      }
    });

    // Keyboard handler
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        this.productManager.closeModal();
      }
    });
  }
}

// ==================== Accordion Manager ====================
class AccordionManager {
  initialize() {
    const items = document.querySelectorAll(".accordion-item");
    items.forEach((item) => {
      item.addEventListener("click", () => this.toggleAccordion(item));
    });
  }

  toggleAccordion(item) {
    const expanded = item.getAttribute("aria-expanded") === "true";
    item.setAttribute("aria-expanded", String(!expanded));
    
    const panel = item.nextElementSibling;
    if (panel) {
      panel.hidden = expanded;
    }
  }
}

// ==================== Link Manager ====================
class LinkManager {
  constructor(config, domElements) {
    this.config = config;
    this.dom = domElements;
  }

  initialize() {
    this.wireDiscordLinks();
    this.initializeSmoothScroll();
  }

  wireDiscordLinks() {
    const links = {
      ctaDiscord: this.config.discord.primary,
      ctaDiscord2: this.config.discord.secondary,
      ctaContact: this.config.discord.contact,
      modalDiscord: this.config.discord.primary,
      modalDiscord2: this.config.discord.secondary
    };

    Object.entries(links).forEach(([key, url]) => {
      const element = this.dom[key];
      if (element) element.href = url;
    });
  }

  initializeSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }
}

// ==================== Footer Manager ====================
class FooterManager {
  constructor(domElements) {
    this.dom = domElements;
  }

  initialize() {
    if (this.dom.footerCopy) {
      const year = new Date().getFullYear();
      this.dom.footerCopy.textContent = `© ${year} Nexi SHOP. Premium Community Platform.`;
    }
  }
}

// ==================== Application ====================
class NexiShopApp {
  constructor() {
    this.dom = new DOMElements();
    this.animationManager = new AnimationManager(CONFIG.animation);
    this.productManager = new ProductManager(PRODUCTS, this.dom);
    this.modalManager = new ModalManager(this.dom, this.productManager);
    this.accordionManager = new AccordionManager();
    this.linkManager = new LinkManager(CONFIG, this.dom);
    this.footerManager = new FooterManager(this.dom);
  }

  initialize() {
    // Render products
    this.productManager.render();

    // Initialize managers
    this.modalManager.initialize();
    this.accordionManager.initialize();
    this.linkManager.initialize();
    this.footerManager.initialize();

    // Setup animations
    this.animationManager.initialize();
    setTimeout(() => {
      this.animationManager.observeElements('.product-card');
    }, 100);
  }
}

// ==================== Initialize Application ====================
document.addEventListener('DOMContentLoaded', () => {
  const app = new NexiShopApp();
  app.initialize();
});
