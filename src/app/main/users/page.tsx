// src/app/(main)/users/page.tsx
import { UserList } from '@/features/users/view/UserList';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'รายชื่อผู้ใช้',
  description: 'หน้าแสดงรายชื่อผู้ใช้ทั้งหมดในระบบ',
};

export default function UsersPage() {
  // You can add other page-level components or layout elements here if needed
  return (
      <UserList />
  );
}
