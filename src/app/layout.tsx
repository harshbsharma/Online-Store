import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '../../providers/theme-provider'
import { ClerkProvider } from '@clerk/nextjs'
import { ModalProvider } from '../../providers/modal-provider'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Admin',
  description: 'Admin for Online Store',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
       <html lang="en">
      <body className={inter.className}>
            <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
                <ToastContainer/>
                <ModalProvider/>
                  {children}
            </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
   
  )
}
