import { auth } from "@/lib/firebase";
import { onAuthStateChanged, type User } from "firebase/auth";
import { redirect } from "react-router";

// 인증된 라우트로 갈때, user context를 제공함.
export const authLoader = async () => {
  const user = await getCurrentUser();

  if (!user) {
    return redirect("/sign-in");
  }

  return { user };
};

const getCurrentUser = (): Promise<User | null> => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (user) => {
        unsubscribe();
        resolve(user);
      },
      reject
    );
  });
};
