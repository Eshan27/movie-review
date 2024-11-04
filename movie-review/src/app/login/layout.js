export const metadata = {
  title: 'Login',
  description: 'Log In to your worth-a-share app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
