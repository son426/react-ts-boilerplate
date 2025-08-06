# 내 취향이 가득한 보일러 플레이트

## 📁 프로젝트 구조보일러플레이트

- 최소한의 디렉토리 구조, 필수적인 기술들만을 담았음.
- 개인 취향이 매우 반영된 기술 위주
- (지속적으로 변경될 소요 있음)

## 🚀 기술 스택

- Pnpm
- Vite + React + Typescript
- Firebase
- Tailwindcss
- React Router (Declarative)
- 기타 내가 애정하는 토스 라이브러리 (es-toolkit / @toss/storage / overlay-kit)

```
src/
├── components/ # 공통 컴포넌트만
├── pages/ # 페이지
│   ├── index.ts # 실제 페이지 컴포넌트
│   ├── useHook.ts # 페이지 내부 훅
│   └── Component.tsx # 페이지 내부 컴포넌트
├── constants/ # 상수 정의
├── services/ # API 서비스 레이어
└── assets/ # 정적 자산
```

## 🛠️ 스크립트 특이사항

### 배포 관련 (firebase 기반)

```bash
pnpm deploy
```
