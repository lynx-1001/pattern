// src/features/users/view/UserDetail.tsx
'use client';

import React from 'react';
import { useUserDetail } from '@/features/users/viewmodel/useUserDetail';
import Button from '@/components/ui/Button'; // Import shared button
import Link from 'next/link';

interface UserDetailProps {
  userId: string;
}

export const UserDetail: React.FC<UserDetailProps> = ({ userId }) => {
  const { user, loading, error, refetch } = useUserDetail(userId);

  if (loading) return <p className="loading-message">กำลังโหลดข้อมูลผู้ใช้...</p>;
  if (error) return <p className="error-message">เกิดข้อผิดพลาดในการโหลดข้อมูลผู้ใช้: {error.message}</p>;
  if (!user) return <p>ไม่พบข้อมูลผู้ใช้สำหรับ ID: {userId}</p>;

  return (
    <div className="container" style={{ maxWidth: '700px' }}>
      <Link href="/main/users" style={{ marginBottom: '20px', display: 'inline-block' }}>
        <Button>&larr; กลับไปหน้ารายชื่อผู้ใช้</Button>
      </Link>
      <h2>รายละเอียดผู้ใช้: {user.email}</h2>
      <Button onClick={() => refetch({ id: userId })} disabled={loading} style={{ marginBottom: '20px', marginLeft: '10px' }}>
        รีเฟรชข้อมูล
      </Button>

      <div style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '8px' }}>
        <p><strong>ID:</strong> {user.id}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Email Verified:</strong> {user.isEmailVerified ? 'ใช่ ✔️' : 'ไม่ใช่ ❌'}</p>
        <p><strong>Active:</strong> {user.isActive ? 'ใช่ ✔️' : 'ไม่ใช่ ❌'}</p>
        <p><strong>Created At:</strong> {new Date(user.createdAt).toLocaleString('th-TH')}</p>
        <p><strong>Updated At:</strong> {new Date(user.updatedAt).toLocaleString('th-TH')}</p>

        {user.profile && (
          <div style={{ marginTop: '20px', borderTop: '1px solid #eee', paddingTop: '20px' }}>
            <h3>โปรไฟล์</h3>
            <p><strong>ชื่อ:</strong> {user.profile.firstName || '-'}</p>
            <p><strong>นามสกุล:</strong> {user.profile.lastName || '-'}</p>
            <p><strong>Avatar URL:</strong> {user.profile.avatar || '-'}</p>
            <p><strong>Bio:</strong> {user.profile.bio || '-'}</p>
            <p><strong>วันเกิด:</strong> {user.profile.dateOfBirth ? new Date(user.profile.dateOfBirth).toLocaleDateString('th-TH') : '-'}</p>
            <p><strong>เบอร์โทรศัพท์:</strong> {user.profile.phone || '-'}</p>
          </div>
        )}
        {!user.profile && <p style={{ marginTop: '20px' }}><em>ผู้ใช้นี้ยังไม่มีข้อมูลโปรไฟล์</em></p>}
      </div>
    </div>
  );
};
