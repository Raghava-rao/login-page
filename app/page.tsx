import Link from 'next/link';
import { LoginForm } from '@/components/login-form';

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 z-0">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-20 w-60 h-60 bg-pink-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 right-1/3 w-40 h-40 bg-orange-400/20 rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-md px-6 py-12">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20 p-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-2">Welcome Back</h1>
            <p className="text-white/80">Sign in to continue your journey</p>
          </div>
          
          <LoginForm />
          
          <div className="mt-6 text-center">
            <p className="text-white/70 text-sm">
              Don't have an account?{" "}
              <Link href="/signup" className="text-white font-medium hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
