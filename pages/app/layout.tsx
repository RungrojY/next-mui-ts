import { Open_Sans } from '@next/font/google'

// If loading a variable font, you don't need to specify the font weight
const roboto = Open_Sans()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en" className={roboto.className}>
      <body>{children}</body>
    </html>
  )
}