import type { Metadata } from 'next'
import { Asap } from 'next/font/google'
import './globals.css'
import Footer from '@/components/footer'
import {Navbar} from '@/components/navbar'
import ModalProvider from '@/providers/modal-provider'
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from '@/components/theme-provider'
const font = Asap({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Online Store',
  description: 'Online Store',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ThemeProvider
        attribute="class"
        defaultTheme="system"
        >
          <ToastContainer />
            <ModalProvider/>
              <Navbar/>
                {children}
              <Footer/>
        </ThemeProvider>
        
      </body>
    </html>
  )
}
