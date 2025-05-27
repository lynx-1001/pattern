// src/app/(main)/users/[userId]/page.tsx
import { UserDetail } from '@/features/users/view/UserDetail';
import type { Metadata, ResolvingMetadata } from 'next';

interface UserDetailPageProps {
  params: { userId: string };
}

// Optional: Generate dynamic metadata based on user ID or fetched user data
export async function generateMetadata(
  { params }: UserDetailPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const userId = params.userId;
  // คุณสามารถ fetch ข้อมูล user ที่นี่เพื่อสร้าง title แบบ dynamic ได้
  // เช่น const user = await fetchUserById(userId);
  // title: user ? `รายละเอียดผู้ใช้: ${user.email}` : 'รายละเอียดผู้ใช้',
  return {
    title: `รายละเอียดผู้ใช้ ID: ${userId}`,
    description: `หน้าแสดงรายละเอียดสำหรับผู้ใช้ ID ${userId}`,
  };
}

export default function UserDetailPage({ params }: UserDetailPageProps) {
  return (
      <UserDetail userId={params.userId} />
  );
}