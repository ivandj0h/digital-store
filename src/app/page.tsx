import Link from "next/link";
import {Button, buttonVariants} from "@/components/ui/button";
import MaxWitdhWrapper from "@/components/MaxWitdhWrapper";

export default function Home() {
    return (
        <MaxWitdhWrapper>
            <div className='py-20 mx-auto text-center flex flex-col items-center max-w-3xl'>
                <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>Your Marketplace for
                    high-quality of{' '}
                    <span className='text-blue-700'>Digital Assets</span>.
                </h1>
                <p className='mt-6 text-lg max-w-prose text-muted-foreground'>
                    Your Trusted Source for Digital Brilliance
                </p>
                <div className='flex flex-col sm:flex-row gap-4 mt-6'>
                    <Link href='/products' className={buttonVariants()}>Browse Trending</Link>
                    <Button variant='ghost'>Our quality promise &rarr;</Button>
                </div>
            </div>
        {/* TODO: Lists of Products  */}
        </MaxWitdhWrapper>
    );
}
