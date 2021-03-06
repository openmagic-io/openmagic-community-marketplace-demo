import React, { useState, useEffect } from 'react'
import MiniProfile from '@/components/profile/MiniProfile'
import useCurrentUser from '@/hooks/useCurrentUser'
import ListingCard from '@/components/ListingCard'
import { useRouter } from 'next/router'

import { getHistoryForAddress } from "@/api/web3/contract"

const Sell = () => {
	const [myListing, setMyListing] = useState<any[]>([]);
	
	const currentUser = useCurrentUser()
	const router = useRouter();
	
	useEffect(() => {
		if (currentUser) {
			getHistoryForAddress(currentUser.address)
				.then(items => setMyListing(items));
		}
	}, [currentUser])
	return (
		<main>
			<div className="bg-gray-50">
				<div className="bg-white border-b border-gray-200">
					<div className="flex items-center justify-between max-w-md px-4 py-10 mx-auto sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
						<div className="">
							<h3 className="mb-4 text-xl font-medium">Sell to Trusted Buyers</h3>
							<button className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-black border border-transparent rounded-md shadow-sm hover:bg-gray-800 focus:outline-none"
              onClick={() => {
                router.push("/sell/create")
              }}>
								+ Create New Listing
							</button>
						</div>
						{currentUser && (
							<div className="hidden px-4 pt-4 pb-2 border rounded md:block">
								<p className="text-sm font-medium">Your Seller Profile</p>
								<MiniProfile profile={currentUser} />
							</div>
						)}
					</div>
				</div>
				<div className="max-w-md px-4 mx-auto pb-96 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
					<div>
						<h3 className="mt-4 mb-4 text-xl font-medium">Your Listings</h3>
						{ myListing.length === 0 && <span className='text-gray-500'>You do not have any listings yet</span>}
						<div className="grid grid-cols-2 mt-6 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-10 lg:gap-x-8">
							{myListing.map(listing => (
								<ListingCard key={listing.title} listing={listing} />
							))}
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}

export default Sell
