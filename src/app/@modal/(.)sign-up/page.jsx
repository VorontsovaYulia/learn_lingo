import { SignupForm } from '@/app/components/SignupForm/SignupForm.jsx';
import { Modal } from '@/app/components/Modal/Modal';

export default function SignUpModal() {
  console.log('SignUpModal')
  return (
    <Modal>
      <SignupForm />
    </Modal>
  );
}
