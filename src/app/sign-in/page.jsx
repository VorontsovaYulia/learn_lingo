import { LoginForm } from '@/app/components/LoginForm/LoginForm';
import { DesignForm } from "../components/DesignForm/DesignForm";
import styles from '../../app/sign-up/SignUp.module.css';


export default function SignInPage() {
  return (
    <div className={styles.container}>
       <DesignForm type={'sign-in'} />
      <LoginForm />
    </div>
  );
}
