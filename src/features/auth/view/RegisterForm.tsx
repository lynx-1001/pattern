// src/features/auth/view/RegisterForm.tsx
'use client';

import React, { useState } from 'react';
import { useRegister } from '@/features/auth/viewmodel/useRegister';
import type { RegisterDto } from '@/features/auth/model/types';
import Button from '@/components/ui/Button'; // Using our shared button

export const RegisterForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const { handleRegister, loading, error, data } = useRegister();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setPasswordError(''); // Reset error

    if (password !== confirmPassword) {
      setPasswordError('รหัสผ่านและการยืนยันรหัสผ่านไม่ตรงกัน');
      return;
    }

    const credentials: RegisterDto = { email, password };
    await handleRegister(credentials);
  };

  return (
    <form onSubmit={handleSubmit} className="container">
      <h2>สมัครสมาชิก</h2>
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
      <div>
        <label htmlFor="confirmPassword">ยืนยันรหัสผ่าน:</label>
        <input
          id="confirmPassword"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          disabled={loading}
        />
      </div>
      {passwordError && <p className="error-message">{passwordError}</p>}
      {error && <p className="error-message">เกิดข้อผิดพลาด: {error.message}</p>}
      {loading && <p className="loading-message">กำลังดำเนินการ...</p>}
      {data && !error && !loading && <p style={{color: "green"}}>สมัครสมาชิกสำเร็จ! ยินดีต้อนรับ {data.user.email}</p>}
      <Button type="submit" disabled={loading}>
        {loading ? 'กำลังสมัคร...' : 'สมัครสมาชิก'}
      </Button>
      <p style={{marginTop: "10px"}}>
        มีบัญชีอยู่แล้ว? <a href="/login">เข้าสู่ระบบที่นี่</a>
      </p>
    </form>
  );
};
