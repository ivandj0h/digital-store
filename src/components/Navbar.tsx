import React from 'react'
import Link from "next/link";
import MaxWitdhWrapper from "@/components/MaxWitdhWrapper";
import {Icons} from "@/components/Icons";
import NavItems from "@/components/NavItems";
import {buttonVariants} from "@/components/ui/button";
import Cart from "@/components/Cart";

const Navbar = () => {

    const user = null;

    return (
        <div className='bg-white sticky z-50 top-0 inset-x-0 h-16'>
            <header className='relative bg-white'>
                <MaxWitdhWrapper>
                    <div className='border-b border-gray-200'>
                        <div className='flex h-16 items-center'>
                            {/* TODO: Mobile Nav  */}
                            <div className='ml-4 flex lg:ml-0'>
                                <Link href='/'>
                                    <Icons.logo className='h-10 w-10'/>
                                </Link>
                            </div>

                            <div className='hidden z-50 lg:ml-8 lg:block lg:self-stretch'>
                                <NavItems/>
                            </div>

                            <div className='ml-auto flex items-center'>
                                <div className='hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6'>
                                    {user ? null : (<Link href='/login'
                                                          className={buttonVariants({variant: 'ghost'})}>Login</Link>)}
                                    {user ? null : (<span className='h-6 w-px bg-gray-200' aria-hidden='true'/>)}
                                    {user ? (<p></p>) :
                                        <Link href='/register' className={buttonVariants({variant: 'ghost'})}>Create
                                            Account</Link>}
                                    {user ? <span className='h-6 w-px bg-gray-200' aria-hidden='true'/> : null}
                                    {user ? null : <div className='flex lg:ml-6'>
                                        <span className='h-6 w-px bg-gray-200' aria-hidden='true'/>
                                    </div>}

                                    <div className='ml-4 flow-root lg:ml-6'>
                                        <Cart/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </MaxWitdhWrapper>
            </header>
        </div>
    )
}
export default Navbar;
