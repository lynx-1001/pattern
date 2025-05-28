// src/app/(main)/users/[userId]/page.tsx
import { UserDetail } from '@/features/users/view/UserDetail';
import type { Metadata, ResolvingMetadata } from 'next';

interface UserDetailPageProps {
  params: Promise<{ userId: string }>; // Promise
}

// แก้ไข generateMetadata ให้ await params
export async function generateMetadata(
  { params }: UserDetailPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { userId } = await params; // await params 
  
  return {
    title: `User Detail ID: ${userId}`,
    description: `Detail ID ${userId}`,
  };
}

export default async function UserDetailPage({ params }: UserDetailPageProps) {
  const { userId } = await params; // await params 
  
  return (
    <UserDetail userId={userId} />
  );
}