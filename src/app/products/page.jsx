import Products from '@/components/home/Products';
import Image from 'next/image';
import products from '@/data/toys.json'
import React from 'react';
import { FaCommentDots, FaFire, FaShoppingCart, FaStar } from 'react-icons/fa';
import Link from 'next/link';

const page = () => {
    return (
        <div>
            <h1 className='text-center font-bold text-2xl sm:text-3xl lg:text-4xl mb-10'>
                Our Products
            </h1>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                {
                    products.map((product, index) => {

                        const discountedPrice =
                            product.price - (product.price * product.discount) / 100;

                        return (
                            <div
                                key={index}
                                className="card shadow-md border border-base-200 hover:shadow-xl transition-all duration-300"
                            >
                                {/* Image */}
                                <figure className="relative overflow-hidden">
                                    <Image
                                        src={product.image}
                                        alt={product.title}
                                        width={500}
                                        height={500}
                                        className="h-60 w-full object-cover"
                                    />

                                    {/* Discount Badge */}
                                    {product.discount > 0 && (
                                        <div className="badge badge-error absolute top-3 left-3  font-semibold">
                                            -{product.discount}%
                                        </div>
                                    )}
                                </figure>

                                {/* Body */}
                                <div className="card-body p-4">
                                    {/* Title */}
                                    <h2 className="card-title text-base md:text-lg line-clamp-2">
                                        {product.title}
                                    </h2>

                                    {/* Ratings + Reviews */}
                                    <div className="flex items-center justify-between text-sm text-gray-500">
                                        <div className="flex items-center gap-1">
                                            <FaStar className="text-yellow-400" />
                                            <span>{product.ratings}</span>
                                        </div>

                                        <div className="flex items-center gap-1">
                                            <FaCommentDots className="text-info" />
                                            <span>{product.reviews} Reviews</span>
                                        </div>
                                    </div>

                                    {/* Sold */}
                                    <div className="flex items-center gap-2 text-sm text-success">
                                        <FaFire />
                                        <span>{product.sold} Sold</span>
                                    </div>

                                    {/* Price */}
                                    <div className="flex items-center gap-3 mt-2">
                                        <span className="text-xl font-bold text-primary">
                                            ৳{discountedPrice}
                                        </span>

                                        {product.discount > 0 && (
                                            <span className="text-sm line-through text-gray-400">
                                                ৳{product.price}
                                            </span>
                                        )}
                                    </div>

                                    {/* Button */}
                                    <div className="card-actions mt-4">
                                        <button className="btn btn-primary w-full">
                                            <FaShoppingCart />
                                            Add to Cart
                                        </button>
                                    </div>
                                    <div className="card-actions">
                                        <Link className='w-full' href={`/products/${product.id}`}>
                                            <button className="btn btn-primary w-full">
                                                View Details
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

export default page;