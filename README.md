# 🎯 Nexi SHOP - Premium Discord Community

고급스럽고 전문적인 디스코드 커뮤니티 프로모션 웹사이트

## ✨ 주요 특징

### 🎨 디자인
- **프리미엄 다크/라이트 테마**: 자동 색상 모드 지원
- **글래스모피즘 효과**: 반투명 배경과 블러 효과
- **부드러운 애니메이션**: 스크롤 기반 페이드인 효과
- **반응형 디자인**: 모든 디바이스에서 완벽하게 작동

### 🏗️ 기술 스택
- **HTML5**: 시맨틱 마크업
- **CSS3**: 최신 CSS 기능 (CSS Variables, Grid, Flexbox)
- **Vanilla JavaScript**: 프레임워크 없는 순수 JS
- **객체지향 구조**: 클래스 기반 모듈화된 코드

### 🚀 성능 최적화
- **Intersection Observer API**: 효율적인 스크롤 애니메이션
- **이미지 최적화**: SVG 아이콘 사용
- **폰트 프리로드**: 빠른 폰트 로딩
- **CSS 변수**: 일관된 디자인 시스템

## 📁 프로젝트 구조

```
nexiott.shop/
├── index.html          # 메인 페이지
├── styles.css          # 스타일시트 (프리미엄 디자인 시스템)
├── app.js             # 애플리케이션 로직 (객체지향 구조)
├── tos/               # 이용약관 페이지
│   └── index.html
├── faq/               # FAQ 페이지
│   └── index.html
└── README.md          # 문서
```

## 🎨 디자인 시스템

### 색상 팔레트
- **Primary**: `#5d6dff` - 메인 액센트 컬러
- **Secondary**: `#8b97ff` - 보조 액센트 컬러
- **Background**: `#0a0e1a` - 다크 배경
- **Text**: `#f8f9ff` - 주 텍스트

### 타이포그래피
- **폰트 패밀리**: Inter (Google Fonts)
- **제목**: 800-900 weight
- **본문**: 400-600 weight

### 간격 시스템
- `--spacing-xs`: 8px
- `--spacing-sm`: 12px
- `--spacing-md`: 16px
- `--spacing-lg`: 24px
- `--spacing-xl`: 32px
- `--spacing-2xl`: 48px
- `--spacing-3xl`: 64px

## 🔧 커스터마이징

### 디스코드 링크 변경
`app.js` 파일의 CONFIG 객체를 수정:

```javascript
const CONFIG = {
  discord: {
    primary: "https://discord.gg/your-server",
    secondary: "https://discord.gg/your-server-2",
    contact: "https://discord.com/users/YOUR_USER_ID"
  }
};
```

### 상품 추가/수정
`app.js` 파일의 PRODUCTS 배열 수정:

```javascript
const PRODUCTS = [
  {
    name: "상품명",
    price: "₩가격",
    desc: "상품 설명",
    tag: "HOT|NEW|BEST|SALE|SAFE|INFO|TOOL",
    icon: "🎬",
    category: "streaming|gaming|security|etc"
  }
];
```

### 색상 변경
`styles.css` 파일의 `:root` 섹션에서 CSS 변수 수정:

```css
:root {
  --accent: #5d6dff;        /* 메인 컬러 */
  --accent-2: #8b97ff;      /* 보조 컬러 */
  --bg: #0a0e1a;            /* 배경색 */
  /* ... */
}
```

## 📱 반응형 브레이크포인트

- **Desktop**: 900px 이상
- **Tablet**: 700px - 899px
- **Mobile**: 700px 이하

## ♿ 접근성

- **ARIA 레이블**: 스크린 리더 지원
- **키보드 네비게이션**: Tab 키로 모든 요소 접근 가능
- **포커스 표시**: 명확한 포커스 아웃라인
- **색상 대비**: WCAG 2.1 AA 기준 준수
- **Reduced Motion**: 애니메이션 감소 설정 지원

## 🌐 브라우저 지원

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Opera 76+

## 🚀 배포

### GitHub Pages
1. GitHub 저장소 생성
2. 파일 업로드
3. Settings → Pages에서 활성화

### Cloudflare Pages
1. Cloudflare Pages 대시보드 접속
2. 프로젝트 생성
3. Git 연동 또는 파일 직접 업로드

### Vercel
1. Vercel 계정 로그인
2. Import Project
3. 저장소 연동

## 📝 코드 구조

### JavaScript 클래스

```javascript
// 주요 클래스
- NexiShopApp        // 메인 애플리케이션
- DOMElements        // DOM 요소 관리
- AnimationManager   // 애니메이션 처리
- ProductManager     // 상품 관리
- ModalManager       // 모달 관리
- AccordionManager   // 아코디언 관리
- LinkManager        // 링크 관리
- FooterManager      // 푸터 관리
```

## 🎯 최적화 팁

1. **이미지 최적화**: WebP 형식 사용 권장
2. **폰트 서브셋**: 한글만 필요한 경우 서브셋 사용
3. **CSS 최소화**: 프로덕션 배포 시 CSS 압축
4. **JavaScript 번들링**: 필요시 빌드 도구 사용

## 📄 라이선스

이 프로젝트는 개인/상업적 용도로 자유롭게 사용 가능합니다.

## 🤝 기여

개선 사항이나 버그 리포트는 환영합니다!

## 📞 지원

문제가 발생하면 Discord 서버에서 문의해주세요.

---

**Made with 💎 by Nexi SHOP Team**
