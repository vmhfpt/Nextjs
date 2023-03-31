import Header from './header'
import Footer from './footer'
import Nav from './nav'

export default function Layout({ children, home }) {
 
  return (
    <>
      <Header />
      <Nav></Nav>
      <main>{children}</main>
      <Footer />
    </>
  )
}