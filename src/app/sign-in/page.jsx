import { LoginForm } from '@/app/components/LoginForm/LoginForm';
// import { DesignForm } from '@/app/components/DesignForm/DesignForm';


export default function SignInPage() {
  return (
    <div style={{ display: 'grid', placeItems: 'center', minHeight: 'calc(100vh - 86px)' }}>
      <LoginForm />
    </div>
  );
}
