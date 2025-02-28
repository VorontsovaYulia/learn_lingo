import { LoginForm } from '@/app/components/LoginForm/LoginForm.jsx';
import { Modal } from '@/app/components/Modal/Modal';


export default function SignInModal() {
  return (
    <Modal>
      <LoginForm />
    </Modal>
  );
}
