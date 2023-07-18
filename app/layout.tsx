import { Footer } from "../components/Footer"
import Header from "../components/Header"
import "../styles/globals.css"
import React, { ReactNode } from "react"

interface RootLayoutProps {
  children: ReactNode
}
const RootLayout: React.FC<RootLayoutProps> = ({ children }) => (
  <html lang="en">
    <head>
      <link rel="preconnect" href="https://stijndv.com" />
      <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
    </head>

    <body>
      <Header />
      <main>{children}</main>
      <Footer />
    </body>
  </html>
)

export default RootLayout
