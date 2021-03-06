/* eslint-disable @next/next/no-img-element */
import * as React from 'react'
import AssetImage from './AssetImage'

export default function NFTs({ nfts }) {
	return (
    <div>
      <div className='flex justify-start my-4 space-x-6 text-sm font-medium text-gray-500'>
      <p>
        Total NFTs: {nfts.length==100 ? "100+" : nfts.length}
      </p>
      </div>
		<div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
			{nfts.map(nft => (
				<div
					key={JSON.stringify(nft)}
					className="relative flex items-center px-6 py-5 space-x-3 bg-white border border-gray-300 rounded-lg shadow-sm"
				>
					<div className="flex-shrink-0">
						<AssetImage image={nft.image_url} />
					</div>
					<div className="flex-1 min-w-0">
						<div className="focus:outline-none">
							<span className="absolute inset-0" aria-hidden="true" />
							<p className="text-sm font-medium text-gray-900">{nft.name || <span className='text-gray-500'>No Title</span>}</p>
							<p className="text-sm text-gray-500 truncate">{nft.description}</p>
						</div>
					</div>
				</div>
			))}
		</div>
    </div>
	)
}
