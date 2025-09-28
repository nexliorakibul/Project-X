export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900">
        <div className="max-w-6xl mx-auto p-4">
          <header className="flex items-center justify-between py-3">
            <h1 className="text-xl font-bold">SEU CSE Resource Hub</h1>
            <nav className="text-sm opacity-80">
              <a className="mr-4" href="/">Home</a>
              <a className="mr-4" href="/semesters">Semesters</a>
              <a className="mr-4" href="/ideas">Ideas</a>
              <a className="mr-4" href="/contribute">Contribute</a>
              <a className="mr-4" href="/admin">Admin</a>
            </nav>
          </header>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
