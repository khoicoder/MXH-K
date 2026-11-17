import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-slate-50 dark:bg-slate-950 text-center">
      <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-2">404</h1>
      <p className="text-sm text-slate-500 mb-6">The page you are looking for does not exist.</p>
      <Link
        href="/"
        className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold shadow-md transition-all"
      >
        Return Home
      </Link>
    </div>
  );
}
