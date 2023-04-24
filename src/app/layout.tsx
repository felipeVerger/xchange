import './globals.css'

export const metadata = {
  title: 'xchange',
  description: 'Social app to exchange and sell clothes.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
