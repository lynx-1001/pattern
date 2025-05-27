// src/features/auth/view/LoginForm.tsx
'use client'; // This component interacts with user and state, so it's a client component

import React, { useState } from 'react';
import { useLogin } from '@/features/auth/viewmodel/useLogin';
import type { LoginDto } from '@/features/auth/model/types';
import Button from '@/components/ui/Button'; // Assuming you have a shared Button component
import { ThemeSwitcher } from '@/components/ui/ThemeSwitcher'

export const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { handleLogin, loading, error, data } = useLogin();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const credentials: LoginDto = { email, password };
    await handleLogin(credentials);
    // If login is successful (data is populated), you might redirect or show a success message
    // This is often handled in useLogin or by observing `data`
  };

  return (
    <form onSubmit={handleSubmit} className="container">
      <h2>เข้าสู่ระบบ</h2>
      <ThemeSwitcher />
      <div>
        <label htmlFor="email">อีเมล:</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={loading}
        />
      </div>
      <div>
        <label htmlFor="password">รหัสผ่าน:</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          disabled={loading}
        />
      </div>
      {error && <p className="error-message">เกิดข้อผิดพลาด: {error.message}</p>}
      {loading && <p className="loading-message">กำลังโหลด...</p>}
      {data && !error && !loading && <p style={{ color: "green" }}>เข้าสู่ระบบสำเร็จ! ยินดีต้อนรับ {data.user.email}</p>}
      <Button type="submit" disabled={loading}>
        {loading ? 'กำลังเข้าสู่ระบบ...' : 'เข้าสู่ระบบ'}
      </Button>
      <p style={{ marginTop: "10px" }} className='bg-test'>
        ยังไม่มีบัญชี? <a href="/register">สมัครสมาชิกที่นี่</a>
      </p>
    </form>
  );
};
