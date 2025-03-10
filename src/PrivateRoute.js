'use client';

import BeatLoader from 'react-spinners/BeatLoader';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from './app/store/store';

export const PrivateRoute = ({ children }) => {
  const name = useUser(state => state.name);
  const loading = useUser(state => state.loading);

  const router = useRouter();

  useEffect(() => {
    if (!loading && !name) {
      router.push('/');
    }
  }, [name, loading, router]);

  if (loading) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '90vh',
          width: '100vw',
        }}
      >
        <BeatLoader
          color="#9FBAAE"
          size={15}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  }

  return name ? children : null;
};
