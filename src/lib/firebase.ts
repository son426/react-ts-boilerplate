import { initializeApp } from "firebase/app";
import { getAnalytics, type Analytics } from "firebase/analytics";

// 고민
// firebase를 보일러플레이트에 박는게 적절한가?
// 1. 무조건 프로젝트에서 로깅은 하자는 마인드
// 2. 번들사이즈 고민했는데, 트리셰이킹 잘돼서 import 안하면 사이즈 문제없다고 함.

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
let analytics: Analytics | null = null;
if (typeof window !== "undefined" && import.meta.env.MODE === "production") {
  analytics = getAnalytics(app);
}

// 서버사이드 렌더링의 경우, analytics = null
export { analytics };
