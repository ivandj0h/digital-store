"use client"

import React from 'react'
import {ShoppingCartIcon} from "lucide-react";
import {Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet";
import {Separator} from "@/components/ui/separator";
import {formatPrice} from "@/lib/utils";
import Link from "next/link";
import {buttonVariants} from "@/components/ui/button";
import Image from "next/image";

const Cart = () => {

    const itemCount = 0;
    const fee = 100;

    return (
        <Sheet>
            <SheetTrigger className='group -m-2 flex items-center p-2'>
                <ShoppingCartIcon aria-hidden='true'
                                  className='h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500'/>
                <span className='ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800'>0</span>
            </SheetTrigger>
            <SheetContent className='flex w-full flex-col pr-0 sm:max-w-lg'>
                <SheetHeader className='space-y-2.5 pr-6'>
                    <SheetTitle>Cart (0)</SheetTitle>
                </SheetHeader>
                {itemCount > 0 ? (
                    <>
                        <div className='w-full flex flex-col pr-6'>
                            {/* TODO: Cart Logic here!  */}
                            Cart Items
                        </div>
                        <div className='space-y-4 pr-6'>
                            <Separator/>
                            <div className='space-y-1.5 text-sm'>
                                <div className='flex'>
                                    <span className='flex-1'>Shipping</span>
                                    <span>Free</span>
                                </div>
                                <div className='flex'>
                                    <span className='flex-1'>Transaction Fee</span>
                                    <span>{formatPrice(fee)}</span>
                                </div>
                                <div className='flex'>
                                    <span className='flex-1'>Total</span>
                                    <span>{formatPrice(fee)}</span>
                                </div>
                            </div>

                            <SheetFooter>
                                <SheetTrigger asChild>
                                    <Link href='/cart' className={buttonVariants({
                                        className: 'w-full',
                                        variant: 'destructive'
                                    })}>Continue to CheckOut</Link>
                                </SheetTrigger>
                            </SheetFooter>
                        </div>
                    </>
                ) : (<div className='flex flex-col h-full items-center justify-center space-y-1'>
                    <div aria-hidden='true' className='relative mb-4 h-60 w-60 text-muted-foreground'>
                        <Image fill src='/empty-cart.png' alt='Empty Cart' />
                    </div>
                    <div className='text-xl font-semibold'>Your Cart is Empty!</div>
                    <SheetTrigger asChild>
                        <Link href='/products' className={buttonVariants({
                            variant: 'link',
                            size: 'sm',
                            className: 'text-sm text-muted-foreground'
                        })}>
                            Add Items into your cart
                        </Link>
                    </SheetTrigger>
                </div>)}
            </SheetContent>
        </Sheet>
    )
}
export default Cart;
