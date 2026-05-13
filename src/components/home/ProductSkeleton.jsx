import React from "react";

const ProductSkeleton = () => {
    return (
        <div className="card shadow-md border border-base-200 animate-pulse">
            {/* Image Skeleton */}
            <div className="h-60 bg-gray-300 rounded-t-xl"></div>

            {/* Body */}
            <div className="card-body p-4 space-y-3">

                {/* Title */}
                <div className="h-5 bg-gray-300 rounded w-3/4"></div>

                {/* Ratings */}
                <div className="flex justify-between">
                    <div className="h-4 bg-gray-300 rounded w-16"></div>
                    <div className="h-4 bg-gray-300 rounded w-24"></div>
                </div>

                {/* Sold */}
                <div className="h-4 bg-gray-300 rounded w-20"></div>

                {/* Price */}
                <div className="flex gap-3">
                    <div className="h-6 bg-gray-300 rounded w-20"></div>
                    <div className="h-5 bg-gray-300 rounded w-16"></div>
                </div>

                {/* Button */}
                <div className="h-10 bg-gray-300 rounded"></div>
            </div>
        </div>
    );
};

export default ProductSkeleton;