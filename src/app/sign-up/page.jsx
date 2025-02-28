import { SignupForm } from "@/app/components/SignupForm/SignupForm";

export default function SignUpPage() {
  return (
    <div style={{ display: 'grid', placeItems: 'center', minHeight: 'calc(100vh - 86px)' }}>
      <SignupForm />
    </div>
  );
}
