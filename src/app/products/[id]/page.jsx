"use client";

import React from "react";
import toys from "@/data/toys.json";
import Image from "next/image";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";

import {
    FaStar,
    FaShoppingCart,
    FaCheckCircle,
} from "react-icons/fa";

const ProductDetails = ({ params }) => {

    // FIX HERE
    const resolvedParams = React.use(params);

    const convert = parseInt(resolvedParams.id);

    const product = toys.find((item) => item.id === convert);

    if (!product) {
        return notFound();
    }

    const discountPrice =
        product.price - (product.price * product.discount) / 100;

    return (
        <div className="min-h-screen py-11 px-4">

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-7xl mx-auto rounded-3xl shadow-xl"
            >
                <div className="flex flex-col lg:flex-row">
                    {/* IMAGE */}
                    <div>
                        <div className="w-full h-125 rounded-3xl">

                            <Image
                                src={product.image}
                                alt={product.title}
                                width={500}
                                height={500}
                                className="h-60 object-cover"
                            />

                        </div>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-10 p-6 lg:p-10">

                        {/* CONTENT */}
                        <div className="flex flex-col justify-center">

                            <h1 className="text-4xl font-bold mb-3">
                                {product.title}
                            </h1>

                            <p className="text-lg text-base-content/70 mb-5">
                                {product.bangla}
                            </p>

                            {/* RATING */}
                            <div className="flex items-center gap-6 mb-5">

                                <div className="flex items-center gap-2">
                                    <FaStar className="text-yellow-400" />
                                    <span>{product.ratings}</span>
                                </div>

                                <div>
                                    Sold:
                                    <span className="font-semibold ml-1">
                                        {product.sold}
                                    </span>
                                </div>

                                <div>
                                    Reviews:
                                    <span className="font-semibold ml-1">
                                        {product.reviews}
                                    </span>
                                </div>

                            </div>

                            {/* PRICE */}
                            <div className="flex items-center gap-4 mb-6">

                                <h2 className="text-4xl font-bold text-primary">
                                    ৳{discountPrice}
                                </h2>

                                <p className="text-xl line-through text-gray-400">
                                    ৳{product.price}
                                </p>

                                <div className="badge badge-error">
                                    -{product.discount}%
                                </div>

                            </div>

                            {/* DESCRIPTION */}
                            <div className="mb-8">

                                <h3 className="text-2xl font-semibold mb-3">
                                    Description
                                </h3>

                                <p className="leading-8 text-base-content/80">
                                    {product.description}
                                </p>

                            </div>

                            {/* INFO */}
                            <div className="mb-8">

                                <h3 className="text-2xl font-semibold mb-4">
                                    Product Info
                                </h3>

                                <div className="space-y-3">

                                    {product.info.map((item, index) => (
                                        <div
                                            key={index}
                                            className="flex items-start gap-3"
                                        >

                                            <FaCheckCircle className="text-primary mt-1" />

                                            <p>{item}</p>

                                        </div>
                                    ))}

                                </div>

                            </div>

                            {/* BUTTON */}
                            <button className="btn btn-primary btn-lg rounded-xl">

                                <FaShoppingCart />

                                Add To Cart

                            </button>

                        </div>
                        {/* QNA */}
                        <div className="px-6 lg:px-10 pb-10">

                            <h2 className="text-3xl font-bold mb-6">
                                Questions & Answers
                            </h2>

                            <div className="space-y-4">

                                {product.qna.map((item, index) => (
                                    <div
                                        key={index}
                                        className="collapse collapse-plus"
                                    >

                                        <input type="radio" name="faq" />

                                        <div className="collapse-title text-lg font-medium">
                                            {item.question}
                                        </div>

                                        <div className="collapse-content">
                                            <p>{item.answer}</p>
                                        </div>

                                    </div>
                                ))}

                            </div>

                        </div>
                    </div>
                </div>

            </motion.div>

        </div>
    );
};

export default ProductDetails;