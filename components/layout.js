import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

const Layout = ({title, children}) => {
    return (
        <>
        <Head>
            <title>{title ? title + ' - Zehra' : 'Zehras collection'}</title>
            <meta name='description' content='E-commerce website'></meta>
        </Head>
            <div className='flex min-h-screen flex-col justify-between'>
                <header>
                    <nav className='flex items-center h-12 justify-between shadow-md px-4'>
                        <Link href="/">
                            <h1 className='font-bold text-2xl'>Zehra's collection</h1>
                        </Link>
                        <div className='flex'>
                            <Link href='/cart'><h2 className='mr-4'>Cart</h2></Link>
                            <Link href='/login'><h2>Login</h2></Link>
                        </div>
                    </nav>
                </header>
                <main className='container m-auto mt-4 px-4'>
                    {children}
                </main>
                <footer className='flex h-10 justify-center items-center shadow-inner'>
                    Copyright @ 2023 Zehra's Collection
                </footer>
            </div>
        </>
    );
};

export default Layout;