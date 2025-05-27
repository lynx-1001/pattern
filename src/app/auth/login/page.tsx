// src/app/(auth)/login/page.tsx
import { LoginForm } from '@/features/auth/view/LoginForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'เข้าสู่ระบบ',
  description: 'หน้าสำหรับเข้าสู่ระบบผู้ใช้งาน',
};

export default function LoginPage() {
  return (
    <div>
      <LoginForm />
    </div>
  );
}