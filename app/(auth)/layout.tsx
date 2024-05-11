import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen w-full justify-between font-inter overflow-hidden">
      {children}
      <div className="auth-asset">
        <Image
          src="/icons/auth-image.png"
          alt="Auth image"
          width={1000}
          height={1000}
          className="rounded-l-xl object-contain translate-x-48 border-4 border-black-1 "
        />
      </div>
    </main>
  );
}
