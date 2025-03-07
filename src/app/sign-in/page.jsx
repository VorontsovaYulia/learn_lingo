'use client';

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useUser } from '../store/store';
import { LoginForm } from '@/app/components/LoginForm/LoginForm';
import { DesignForm } from "../components/DesignForm/DesignForm";
import styles from '../../app/sign-up/SignUp.module.css';

export default function SignInPage() {
  const { name } = useUser;
  const router = useRouter();

  useEffect(() => {
    if (name) {
      router.back();
    }
  }, [name, router]);

  return (
    <div className={styles.container}>
      <DesignForm type={'sign-in'} />
      <LoginForm />
    </div>
  );
}
