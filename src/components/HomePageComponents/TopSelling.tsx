"use client";

import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import { Button } from "../ui/button";

type Product = {
  name: string;
  price: number;
  imageUrl: string;
  discountPercent: number;
  isNew: boolean;
};

const fetchTopSelling = async (): Promise<Product[]> => {
  const query = `*[_type == "products" && isTopSelling == true]{
    name,
    price,
    "imageUrl": image.asset->url,
    discountPercent,
    isTopSelling
  }`;
  const products = await client.fetch(query);
  return products;
};

const TopSelling: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadProducts = async () => {
      const fetchedProducts = await fetchTopSelling();
      setProducts(fetchedProducts);
      setIsLoading(false);
    };

    loadProducts();
  }, []);

  return (
    <section className="py-12 bg-backgorund">
      <div className="container mx-auto px-4">
        <h1 className="text-center text-4xl font-bold mb-8 text-primary">
          Top Selling
          <div className="flex justify-center">
            <div className="w-24 h-1 rounded-full bg-primary" />
          </div>
        </h1>
        <Carousel className="w-full">
          <CarouselContent className="flex gap-4 -ml-2">
            {isLoading
              ? Array.from({ length: 4 }).map((_, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-2 basis-3/4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                  >
                    <Card className="bg-card border shadow rounded-xl h-[350px] w-full">
                      <CardHeader className="relative">
                        <Skeleton className="w-full h-[180px] rounded-t-xl" />
                      </CardHeader>
                      <CardContent className="p-4">
                        <Skeleton className="h-4 w-3/4 mb-2" />
                        <Skeleton className="h-4 w-1/2" />
                      </CardContent>
                      <CardFooter className="p-4">
                        <Skeleton className="h-10 w-full rounded-md" />
                      </CardFooter>
                    </Card>
                  </CarouselItem>
                ))
              : products.map((product, index) => {
                  const discountedPrice = product.price - 30;

                  return (
                    <CarouselItem
                      key={index}
                      className="pl-2 basis-3/4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                    >
                      <Card className="bg-card border shadow-md rounded-xl hover:shadow-lg transition-shadow">
                        <CardHeader className="relative">
                          <Image
                            src={product.imageUrl}
                            alt={product.name}
                            width={300}
                            height={200}
                            className="rounded-t-xl w-full h-[180px] object-cover"
                          />
                          {product.discountPercent > 0 && (
                            <Badge
                              variant="destructive"
                              className="absolute top-2 left-2 text-xs px-2 py-1 rounded-md"
                            >
                              -{product.discountPercent}%
                            </Badge>
                          )}
                        </CardHeader>
                        <CardContent className="p-4">
                          <CardTitle className="text-lg font-medium text-primary mb-2 line-clamp-1">
                            {product.name}
                          </CardTitle>
                          <p className="text-sm text-muted-foreground font-medium">
                            <span>${discountedPrice.toFixed(2)}</span>
                            <span className="line-through ml-3 mr-4">
                              ${product.price.toFixed(2)}
                            </span>
                          </p>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  );
                })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <div className="flex justify-center mt-8">
          <Button size="lg">View All</Button>
        </div>
      </div>
    </section>
  );
};

export default TopSelling;
