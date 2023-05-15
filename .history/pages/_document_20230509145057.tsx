import { getPages } from '@/sanity/sanity-utils'
import { Html, Head, Main, NextScript } from 'next/document'
import Link from 'next/link'
import "../globals.css"

export default async function Document() {
  const pages = await getPages();
  return (
    <Html lang="en">
      <Head />
      <body className = "max-w-3xl mx-auto py-10">
        <header>
         <Link 
         href = "/"
         className ="bg-blue-600 bg-clip-text text-transparent text-lg font-bold">
          Home Page 
        </Link> 
        <div>
          {pages.map((page)=>(
          <Link key = {page._id} href={'/${page.slug}'}>
            {page.title}
          </Link>
          ))}
        </div>
        </header>
        <main className='py-5'></main>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
