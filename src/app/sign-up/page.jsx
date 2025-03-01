import { SignupForm } from "@/app/components/SignupForm/SignupForm";
import { DesignForm } from "../components/DesignForm/DesignForm";
import styles from './SignUp.module.css'

export default function SignUpPage() {
  return (
    <div className={styles.container}>
      <DesignForm type={'sign-up'} />
      <SignupForm />
    </div>
  );
}
