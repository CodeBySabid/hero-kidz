// components/ProductCardSkeleton.jsx

const ProductCardSkeleton = () => {
  return (
    <div className="card bg-base-100 shadow-md border border-base-200">
      {/* Image Skeleton */}
      <div className="skeleton h-60 w-full rounded-t-xl"></div>

      <div className="card-body p-4 space-y-3">
        {/* Title */}
        <div className="skeleton h-5 w-3/4"></div>
        <div className="skeleton h-5 w-1/2"></div>

        {/* Ratings */}
        <div className="flex justify-between">
          <div className="skeleton h-4 w-20"></div>
          <div className="skeleton h-4 w-24"></div>
        </div>

        {/* Sold */}
        <div className="skeleton h-4 w-28"></div>

        {/* Price */}
        <div className="flex gap-3">
          <div className="skeleton h-6 w-24"></div>
          <div className="skeleton h-5 w-16"></div>
        </div>

        {/* Button */}
        <div className="skeleton h-12 w-full rounded-xl"></div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;