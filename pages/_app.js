import '../styles/globals.css'
import Link from 'next/link'

function Marketplace({ Component, pageProps }) {
  return (
    <div>
        <p className=" text-4xl font-bold text-blue-900 font-sans md:font-sans text-center "><br></br>MINI UTOPIA NFT COLLECTION<br></br></p>
        <p className=" text-4xl font-bold text-blue-900 font-sans md:font-sans text-center"><br></br>Create, Sell and Collect</p>
        <p className=" text-4xl font-bold text-blue-900 font-sans md:font-sans text-center">Digital Items</p>
      <nav className=" flex justify-center ">

        <div className=" flex mt-4">
          <Link href="/">
            <a className="mr-6 text-blue-900 hover:text-gray-900 visited:text-gray-900">
              Marketplace
            </a>
          </Link>
          <Link href="/my-assets">
            <a className="mr-6 text-blue-900 hover:text-gray-900 visited:text-gray-900">
              My Items (Purchased @Marketplace)
            </a>
          </Link>
          <Link href="/create-item">
            <a className="mr-6 text-blue-900 hover:text-gray-900 visited:text-gray-900">
              Create Items
            </a>
          </Link>
          <Link href="/creator-dashboard">
            <a className="mr-6 text-blue-900 hover:text-gray-900 visited:text-gray-900">
              Creators Items
            </a>
          </Link>
        </div>
      </nav>
      <Component {...pageProps} />
    </div>
  )
}

export default Marketplace