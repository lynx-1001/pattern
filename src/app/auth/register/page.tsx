// src/app/(auth)/register/page.tsx
import { RegisterForm } from '@/features/auth/view/RegisterForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'สมัครสมาชิก',
  description: 'หน้าสำหรับสมัครสมาชิกผู้ใช้งานใหม่',
};

export default function RegisterPage() {
  return (
    <div>
      <RegisterForm />
    </div>
  );
}
