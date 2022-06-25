import React from 'react'
import MiniProfile from '@/components/profile/MiniProfile'
import useCurrentUser from '@/hooks/useCurrentUser'
import ListingCard from '@/components/ListingCard'

const fakeListings = [
	{
		title: 'Plant',
		description: 'a really expensive plant',
    price: "$324",
		image: 'https://m.media-amazon.com/images/I/61PPYUoc2aL._AC_SL1000_.jpg',
		availability: 'Available to PlantDAO Owners',
	},
	{
		title: 'Plant2',
		description: 'a really expensive plant',
    price: "$168",
		image: 'https://m.media-amazon.com/images/I/61PPYUoc2aL._AC_SL1000_.jpg',
		availability: 'Available to PlantDAO Owners and EthNYC Attendees',
	},
]

const Sell = () => {
	const currentUser = useCurrentUser()
	return (
		<main>
			<div className="bg-gray-50">
				<div className="bg-white border-b border-gray-200">
					<div className="flex items-center justify-between max-w-md px-4 py-10 mx-auto sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
						<div className="">
							<h3 className="text-xl font-medium">Sell to Trusted Buyers</h3>
							<button className="px-4 py-2 mt-4 text-sm text-white bg-black rounded hover:bg-gray-800">
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
				<div className="max-w-md min-h-screen px-4 mx-auto sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
					<div>
						<h3 className="mt-4 mb-4 text-xl font-medium">Your Listings</h3>
						<div className="grid grid-cols-1 gap-3">
							{fakeListings.map(listing => (
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