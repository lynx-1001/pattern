// src/features/users/view/UserList.tsx
'use client';

import React from 'react';
import Link from 'next/link'; // Import Link
import { useUserList } from '@/features/users/viewmodel/useUserList';
import Button from '@/components/ui/Button';

export const UserList: React.FC = () => {
  const { users, loading, error, refetch } = useUserList();

  if (loading) return <p className="loading-message">กำลังโหลดรายชื่อผู้ใช้...</p>;
  if (error) return <p className="error-message">เกิดข้อผิดพลาด: {error.message}</p>;

  return (
    <div className="container" style={{ maxWidth: '800px' }}>
      <h2>รายชื่อผู้ใช้ทั้งหมด</h2>
      <Button onClick={() => refetch()} disabled={loading} style={{ marginBottom: '20px' }}>
        รีเฟรชข้อมูล
      </Button>
      {users.length === 0 ? (
        <p>ไม่พบข้อมูลผู้ใช้</p>
      ) : (
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #ddd', textAlign: 'left' }}>
              <th style={{ padding: '8px' }}>ID</th>
              <th style={{ padding: '8px' }}>Email</th>
              <th style={{ padding: '8px' }}>Verified</th>
              <th style={{ padding: '8px' }}>Active</th>
              <th style={{ padding: '8px' }}>Created At</th>
              <th style={{ padding: '8px' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '8px', wordBreak: 'break-all' }}>{user.id}</td>
                <td style={{ padding: '8px' }}>{user.email}</td>
                <td style={{ padding: '8px' }}>{user.isEmailVerified ? '✔️' : '❌'}</td>
                <td style={{ padding: '8px' }}>{user.isActive ? '✔️' : '❌'}</td>
                <td style={{ padding: '8px' }}>
                  {new Date(user.createdAt).toLocaleDateString('th-TH')}
                </td>
                <td style={{ padding: '8px' }}>
                  <Link href={`/main/users/${user.id}`}>
                    <Button >ดูรายละเอียด</Button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
