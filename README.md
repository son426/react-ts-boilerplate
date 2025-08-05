# React TypeScript Boilerplate

React와 TypeScript를 기반으로 한 현대적인 웹 애플리케이션 보일러플레이트입니다.

## 🚀 기술 스택

- **React 19** - 최신 React 버전
- **TypeScript** - 타입 안전성
- **Vite** - 빠른 개발 서버와 빌드 도구
- **React Router DOM** - 클라이언트 사이드 라우팅
- **ESLint** - 코드 품질 관리

## 📁 프로젝트 구조

```
src/
├── components/     # 재사용 가능한 컴포넌트
├── pages/         # 페이지 컴포넌트
├── hooks/         # 커스텀 훅
├── utils/         # 유틸리티 함수
├── types/         # TypeScript 타입 정의
├── constants/     # 상수 정의
├── services/      # API 서비스 레이어
└── assets/        # 정적 자산
```

## 🛠️ 설치 및 실행

### 의존성 설치

```bash
pnpm install
```

### 개발 서버 실행

```bash
pnpm dev
```

### 빌드

```bash
pnpm build
```

### 린트 검사

```bash
pnpm lint
```

## ⚙️ 환경변수 설정

프로젝트 루트에 `.env` 파일을 생성하고 다음 변수들을 설정하세요:

```env
VITE_API_URL=http://localhost:3000
VITE_APP_TITLE=React TypeScript Boilerplate
VITE_APP_VERSION=1.0.0
```

## 🔧 주요 기능

### 라우팅

- React Router DOM을 사용한 클라이언트 사이드 라우팅
- 기본 페이지 구조 (Home, About, NotFound)

### 환경변수 관리

- TypeScript로 타입이 정의된 환경변수
- `src/types/env.d.ts`에서 환경변수 타입 정의
- `src/utils/env.ts`에서 안전한 환경변수 접근

### API 서비스

- `src/services/api.ts`에서 중앙화된 API 호출 관리
- 타입 안전한 API 응답 처리

### 커스텀 훅

- `useLocalStorage` - 로컬 스토리지 관리

## 📝 사용 예시

### 환경변수 사용

```typescript
import { ENV } from "./utils/env";

console.log(ENV.APP_TITLE); // 타입 안전한 환경변수 접근
```

### API 호출

```typescript
import { apiService } from "./services/api";

const fetchUsers = async () => {
  try {
    const response = await apiService.get<User[]>("/users");
    return response.data;
  } catch (error) {
    console.error("Failed to fetch users:", error);
  }
};
```

### 커스텀 훅 사용

```typescript
import { useLocalStorage } from "./hooks/useLocalStorage";

const [theme, setTheme] = useLocalStorage("theme", "light");
```

## 🎯 추가 개발 가이드

1. **새로운 페이지 추가**: `src/pages/` 디렉토리에 컴포넌트 생성 후 `App.tsx`에 라우트 추가
2. **컴포넌트 생성**: `src/components/` 디렉토리에 재사용 가능한 컴포넌트 생성
3. **타입 정의**: `src/types/` 디렉토리에 새로운 타입 정의
4. **상수 추가**: `src/constants/` 디렉토리에 애플리케이션 상수 정의

## 📄 라이선스

MIT License
# react-ts-boilerplate
