import Link from 'next/link';

export default function Header() {
  return (
    <header className="h-20 w-full">
      <nav className="w-full flex justify-end h-full px-5">
        <div className="h-full flex items-center px-5 first:mr-auto">
          <Link href="/">ST</Link>
        </div>
        <div className="h-full flex items-center px-5 first:mr-auto">
          <Link href="/playground">Playground</Link>
        </div>
        <div className="h-full flex items-center px-5 first:mr-auto">
          <Link href="/blog">Blog</Link>
        </div>
      </nav>
    </header>
  );
}
