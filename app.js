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

// ==================== SVG Icon Paths ====================
const ICON_PATHS = {
  // 문제가 있는 아이콘들은 직접 SVG path 포함
  'disney': 'M20.5 11.8c-.3-.1-.6-.2-.7-.2h-.1c-.8 0-1.5.4-2.1.9-.3.3-.6.6-.8 1-.5.8-.8 1.7-.8 2.7 0 1 .3 1.9.8 2.7.5.8 1.3 1.4 2.1 1.4.1 0 .2 0 .3-.1.1 0 .2-.1.3-.1.5-.2.9-.6 1.2-1 .3-.4.5-.9.6-1.4.1-.5.1-1 .1-1.5 0-.9-.2-1.7-.6-2.5-.2-.4-.5-.7-.8-.9-.2-.1-.3-.1-.5 0zm-1 5.8c-.1.3-.2.5-.4.7-.1.1-.3.2-.4.2h-.1c-.3 0-.5-.2-.7-.5-.2-.3-.3-.7-.3-1.2 0-.4.1-.8.2-1.2.1-.3.2-.6.4-.8.2-.2.4-.3.6-.3h.1c.2 0 .4.1.5.3.2.2.3.5.4.8.1.4.1.7.1 1.1 0 .3 0 .6-.1.9h-.3zM12.5 7.3c-.1 0-.2 0-.3.1-.2.1-.3.2-.5.3-.3.3-.5.6-.7 1-.2.4-.3.8-.3 1.2s.1.9.3 1.2c.2.4.4.7.7 1 .1.1.3.2.5.3.1 0 .2.1.3.1s.2 0 .3-.1c.2-.1.3-.2.5-.3.3-.3.5-.6.7-1 .2-.4.3-.8.3-1.2s-.1-.9-.3-1.2c-.2-.4-.4-.7-.7-1-.1-.1-.3-.2-.5-.3-.1 0-.2-.1-.3-.1zm0 3.6c-.1.2-.2.3-.3.4-.1.1-.2.1-.3.1s-.2 0-.3-.1c-.1-.1-.2-.2-.3-.4-.1-.2-.1-.4-.1-.6s0-.4.1-.6c.1-.2.2-.3.3-.4.1-.1.2-.1.3-.1s.2 0 .3.1c.1.1.2.2.3.4.1.2.1.4.1.6s0 .4-.1.6zM7.1 14.8c-.1 0-.2 0-.2.1-.2.1-.3.2-.4.3-.2.2-.4.5-.5.8-.1.3-.2.6-.2 1 0 .3.1.7.2 1 .1.3.3.6.5.8.1.1.3.2.4.3.1 0 .2.1.2.1.1 0 .2 0 .2-.1.2-.1.3-.2.4-.3.2-.2.4-.5.5-.8.1-.3.2-.6.2-1 0-.3-.1-.7-.2-1-.1-.3-.3-.6-.5-.8-.1-.1-.3-.2-.4-.3-.1 0-.2-.1-.2-.1zm0 2.9c-.1.1-.1.2-.2.2s-.1.1-.2.1-.1 0-.2-.1c-.1-.1-.1-.1-.2-.2-.1-.1-.1-.3-.1-.4 0-.2 0-.3.1-.4.1-.1.1-.2.2-.2.1-.1.1-.1.2-.1s.1 0 .2.1c.1.1.1.1.2.2.1.1.1.3.1.4 0 .2 0 .3-.1.4z',
  'capcut': 'M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18L19.82 8 12 11.82 4.18 8 12 4.18zM4 9.48l7 3.5v6.84l-7-3.5V9.48zm16 0v6.84l-7 3.5v-6.84l7-3.5z',
  'gemini': 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z',
  'chatgpt': 'M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z'
};

// ==================== Product Data ====================
const PRODUCTS = [
  {
    name: "넷플릭스 (LIFETIME)",
    price: "₩500",
    desc: "로그인 보증 · 이메일/비번 제공 · 쿠키 지급 · 불량 시 구매 후 1시간 내 교환",
    tag: "HOT",
    iconSvg: "netflix",
    iconColor: "#E50914",
    category: "streaming"
  },
  {
    name: "디즈니+ (LIFETIME)",
    price: "₩500",
    desc: "랜덤계정 · 로그인 보증 · 불량 시 구매 후 5분 내 교환",
    tag: "NEW",
    iconSvg: "disney",
    iconColor: "#0063e5",
    category: "streaming"
  },
  {
    name: "크런치롤 (LIFETIME)",
    price: "₩400",
    desc: "무제한 · 로그인 보증 · 불량 시 구매 후 59분 내 교환",
    tag: "NEW",
    iconSvg: "crunchyroll",
    iconColor: "#F47521",
    category: "streaming"
  },
  {
    name: "듀오링고 (LIFETIME)",
    price: "₩300",
    desc: "로그인 보증 · 이메일/비번 제공 · 불량 시 구매 후 1일 내 교환",
    tag: "HOT",
    iconSvg: "duolingo",
    iconColor: "#58CC02",
    category: "education"
  },
  {
    name: "스팀 랜계",
    price: "₩50",
    desc: "랜덤계정 · 보증 2개당 1개",
    tag: "SALE",
    iconSvg: "steam",
    iconColor: "#00adee",
    category: "gaming"
  },
  {
    name: "노드VPN (LIFETIME)",
    price: "₩2,300",
    desc: "계정 지급 · 로그인 보증 · 불량 시 구매 후 1일 내 교환",
    tag: "SAFE",
    iconSvg: "nordvpn",
    iconColor: "#4687FF",
    category: "security"
  },
  {
    name: "스포티파이",
    price: "₩3,000",
    desc: "프리미엄 개인계정 3개월 · 로그인 보증 · 불량 시 구매 후 30일 내 교환",
    tag: "BEST",
    iconSvg: "spotify",
    iconColor: "#1DB954",
    category: "music"
  },
  {
    name: "유튜브 프리미엄",
    price: "₩4,000",
    desc: "계정 1개월 · 2주 보증 · 개인계정에 적용",
    tag: "BEST",
    iconSvg: "youtube",
    iconColor: "#FF0000",
    category: "streaming"
  },
  {
    name: "로블록스 계정",
    price: "₩40",
    desc: "계정번호/아이디/비밀번호/쿠키 · 로그인 보증 · 구매 후 1일 내 교환",
    tag: "NEW",
    iconSvg: "roblox",
    iconColor: "#0057FF",
    category: "gaming"
  },
  {
    name: "캡컷 프로 (WEB)",
    price: "₩1,200",
    desc: "계정 아이디/비번 지급 · 로그인 보증 · 구매 후 3일 내 교환",
    tag: "NEW",
    iconSvg: "capcut",
    iconColor: "#000000",
    category: "creative"
  },
  {
    name: "카카오톡 자동 메시지 전송 툴",
    price: "₩100/일 · ₩3,000/30일 · ₩10,000/영구",
    desc: "Windows PC 전용 · GUI 기반 자동 메시지 전송 매크로",
    tag: "TOOL",
    iconSvg: "kakaotalk",
    iconColor: "#FFE812",
    category: "tools"
  },
  {
    name: "Gemini PRO",
    price: "₩4,900",
    desc: "계정 지급 · 로그인 보증 + 프로 적용 보증 · 3일 보증",
    tag: "NEW",
    iconSvg: "gemini",
    iconColor: "#4285F4",
    category: "ai"
  },
  {
    name: "ChatGPT Plus (1개월)",
    price: "₩3,900",
    desc: "계정 지급 · 로그인 보증 + Plus 적용 보증 · 구매 후 3일 보증",
    tag: "BEST",
    iconSvg: "chatgpt",
    iconColor: "#10a37f",
    category: "ai"
  },
  {
    name: "일회용 가상번호 (디스코드)",
    price: "₩500 ~ ₩700 / 1회",
    desc: "SMS 수신 전용 · 20분 사용 후 만료 · 불량 교환/환불 불가",
    tag: "INFO",
    iconSvg: "discord",
    iconColor: "#5865F2",
    category: "utility"
  },
  {
    name: "익스프레스VPN (LIFETIME)",
    price: "₩500",
    desc: "계정 지급 · 로그인 보증 · 불량 시 구매 후 1일 내 교환",
    tag: "SAFE",
    iconSvg: "expressvpn",
    iconColor: "#DA3940",
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
      icon: this.createBrandIcon(product.iconSvg, product.iconColor),
      title: this.createElement('h3', '', product.name),
      price: this.createElement('div', 'price', product.price),
      desc: this.createElement('p', 'desc', product.desc),
      button: this.createButton(product)
    };

    Object.values(elements).forEach(el => card.appendChild(el));
    return card;
  }

  createBrandIcon(iconName, iconColor) {
    const iconWrapper = document.createElement('div');
    iconWrapper.className = 'brand-icon-wrapper';
    
    const icon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    icon.classList.add('brand-icon-svg');
    icon.setAttribute('role', 'img');
    icon.setAttribute('viewBox', '0 0 24 24');
    icon.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    
    if (iconColor) {
      icon.style.fill = iconColor;
    }
    
    // 직접 정의된 path가 있으면 사용, 없으면 CDN에서 로드
    if (ICON_PATHS[iconName]) {
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', ICON_PATHS[iconName]);
      icon.appendChild(path);
    } else {
      // Simple Icons CDN에서 로드
      this.loadIconPath(icon, iconName);
    }
    
    iconWrapper.appendChild(icon);
    return iconWrapper;
  }

  async loadIconPath(svgElement, iconName) {
    try {
      const response = await fetch(`https://cdn.simpleicons.org/${iconName}`);
      const svgText = await response.text();
      
      // SVG 텍스트에서 path 추출
      const parser = new DOMParser();
      const svgDoc = parser.parseFromString(svgText, 'image/svg+xml');
      const path = svgDoc.querySelector('path');
      
      if (path) {
        const pathClone = path.cloneNode(true);
        svgElement.appendChild(pathClone);
      }
    } catch (error) {
      console.warn(`Failed to load icon: ${iconName}`, error);
      // 로드 실패 시 대체 아이콘 표시
      svgElement.innerHTML = '<circle cx="12" cy="12" r="10" opacity="0.3"/>';
    }
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
