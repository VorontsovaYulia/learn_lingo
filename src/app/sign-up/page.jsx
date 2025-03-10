'use client';

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useUser } from '../store/store';
import { SignupForm } from "@/app/components/SignupForm/SignupForm";
import { DesignForm } from "../components/DesignForm/DesignForm";
import styles from './SignUp.module.css'

export default function SignUpPage() {
  const name = useUser((state) => state.name);
  const router = useRouter();

  useEffect(() => {
    if (name) {
      router.back();
    }
  }, [name, router]);
  
  return (
    <div className={styles.container}>
      <DesignForm type={'sign-up'} />
      <SignupForm />
    </div>
  );
}
