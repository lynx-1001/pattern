import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="container">
      <h1>ยินดีต้อนรับสู่แอปพลิเคชันของฉัน</h1>
      <p>นี่คือหน้าแรกของแอปพลิเคชันที่สร้างด้วย Next.js, Feature-based Architecture และ MVVM</p>
      <nav style={{ marginTop: '20px' }}>
        <Link href="/login" style={{ marginRight: '10px' }}>
          <button>ไปที่หน้า Login</button>
        </Link>
        {/* เพิ่มลิงก์อื่นๆ ที่นี่ */}
      </nav>
    </main>
  );
}