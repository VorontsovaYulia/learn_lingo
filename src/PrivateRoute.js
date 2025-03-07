'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from './app/store/store';

export const PrivateRoute = ({ children }) => {
  const { name } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!name) {
      router.push('/');
    }
  }, [name, router]);

  return name ? children : null;
};
