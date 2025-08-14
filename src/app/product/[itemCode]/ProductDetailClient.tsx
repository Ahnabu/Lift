"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { LiftService } from '@/services/enhancedLiftService';
import { ForkliftService } from '@/services/forkliftService';
import { GeneratorService } from '@/services/generatorService';
import { HVACService } from '@/services/hvacService';
import { StreetLightService } from '@/services/streetLightService';
import { SolarService } from '@/services/solarService';

import { Product } from '@/types/products';
import { ForkliftProduct } from '@/types/forklift';
import { GeneratorProduct, HVACProduct, StreetLightProduct, SolarProduct } from '@/types/otherProducts';

import ForkliftDetails from '@/components/product-details/ForkliftDetails';
import GeneratorDetails from '@/components/product-details/GeneratorDetails';
import HVACDetails, { HVACAdditionalInfo } from '@/components/product-details/HVACDetails';
import StreetLightDetails, { StreetLightAdditionalInfo } from '@/components/product-details/StreetLightDetails';
import SolarDetails from '@/components/product-details/SolarDetails';
import PassengerLiftDetails from '@/components/product-details/PassengerLiftDetails';
import CapsuleLiftDetails from '@/components/product-details/CapsuleLiftDetails';
import HospitalLiftDetails from '@/components/product-details/HospitalLiftDetails';
import CargoLiftDetails from '@/components/product-details/CargoLiftDetails';
import EscalatorDetails from '@/components/product-details/EscalatorDetails';
import ImportedLiftDetails from '@/components/product-details/ImportedLiftDetails';

type AllProductTypes = Product | ForkliftProduct | GeneratorProduct | HVACProduct | StreetLightProduct | SolarProduct;

export default function ProductDetailClient({ itemCode }: { itemCode: string }) {
    const [product, setProduct] = useState<AllProductTypes | null>(null);
    const [relatedProducts, setRelatedProducts] = useState<AllProductTypes[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProduct = async () => {
            if (!itemCode) return;

            try {
                setIsLoading(true);
                setError(null);

                // First try to find in lift products
                const foundLiftProduct = await LiftService.getProductByItemCode(itemCode);
                if (foundLiftProduct) {
                    setProduct(foundLiftProduct);
                    const allLiftProducts = await LiftService.getAllProducts();
                    const related = allLiftProducts
                        .filter((p: Product) => p.type === foundLiftProduct.type && p.itemCode !== itemCode)
                        .slice(0, 3);
                    setRelatedProducts(related);
                    return;
                }

                // Forklifts
                const foundForklift = await ForkliftService.getForkliftByItemCode(itemCode);
                if (foundForklift) {
                    setProduct(foundForklift);
                    const related = await ForkliftService.getRelatedForklifts(itemCode, 3);
                    setRelatedProducts(related);
                    return;
                }

                // Generators
                const foundGenerator = await GeneratorService.getGeneratorByItemCode(itemCode);
                if (foundGenerator) {
                    setProduct(foundGenerator);
                    const related = await GeneratorService.getRelatedGenerators(itemCode, 3);
                    setRelatedProducts(related);
                    return;
                }

                // HVAC
                const foundHVAC = await HVACService.getHVACByItemCode(itemCode);
                if (foundHVAC) {
                    setProduct(foundHVAC);
                    const related = await HVACService.getRelatedHVAC(itemCode, 3);
                    setRelatedProducts(related);
                    return;
                }

                // Street Lights
                const foundLight = await StreetLightService.getStreetLightByItemCode(itemCode);
                if (foundLight) {
                    setProduct(foundLight);
                    const related = await StreetLightService.getRelatedStreetLights(itemCode, 3);
                    setRelatedProducts(related);
                    return;
                }

                // Solar
                const foundSolar = await SolarService.getSolarByItemCode(itemCode);
                if (foundSolar) {
                    setProduct(foundSolar);
                    const related = await SolarService.getRelatedSolar(itemCode, 3);
                    setRelatedProducts(related);
                    return;
                }

                setError('Product not found');
            } catch (e) {
                console.error(e);
                setError('Failed to load product details');
            } finally {
                setIsLoading(false);
            }
        };

        fetchProduct();
    }, [itemCode]);

    const renderSpecifications = () => {
        if (!product) return null;

        if ('forkliftType' in product) return <ForkliftDetails product={product} />;
        if ('origin' in product) return <GeneratorDetails product={product} />;
        if ('coolingCapacity' in product || 'efficiency' in product) return <HVACDetails product={product} showAdditionalInfo={false} />;
        if ('energySaving' in product || 'mainFeatures' in product) return <StreetLightDetails product={product} showAdditionalInfo={false} />;
        if ('benefits' in product || 'services' in product) return <SolarDetails product={product} />;

        const liftProduct = product as Product;
        switch (liftProduct.type) {
            case 'passenger':
                return <PassengerLiftDetails product={liftProduct as Product & { type: 'passenger' }} />;
            case 'capsule':
                return <CapsuleLiftDetails product={liftProduct as Product & { type: 'capsule' }} />;
            case 'hospital':
                return <HospitalLiftDetails product={liftProduct as Product & { type: 'hospital' }} />;
            case 'cargo':
                return <CargoLiftDetails product={liftProduct as Product & { type: 'cargo' }} />;
            case 'escalator':
                return <EscalatorDetails product={liftProduct as Product & { type: 'escalator' }} />;
            case 'imported':
                return <ImportedLiftDetails product={liftProduct as Product & { type: 'imported' }} />;
            default:
                return null;
        }
    };

    const renderAdditionalInfo = () => {
        if (!product) return null;
        if ('coolingCapacity' in product || 'efficiency' in product) return <HVACAdditionalInfo product={product} />;
        if ('energySaving' in product || 'mainFeatures' in product) return <StreetLightAdditionalInfo product={product} />;
        return null;
    };

    const getProductName = () => {
        if (!product) return '';
        if ('forkliftType' in product) return product.model || product.name;
        return product.name;
    };

    const getProductImage = () => product?.image || '/dummy_rectangular.jfif';
    const getProductDescription = () => {
        if (!product) return '';
        if ('forkliftType' in product) {
            return `${product.brand} ${product.model} - ${product.forkliftType} forklift with ${product.loadCapacity} capacity`;
        }
        return product.description || '';
    };

    if (isLoading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-400 mx-auto"></div>
                    <p className="mt-4 text-gray-600">Loading product details...</p>
                </div>
            </div>
        );
    }

    if (error || !product) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">Product Not Found</h1>
                    <p className="text-gray-600 mb-6">{error || 'The requested product could not be found.'}</p>
                    <Link href="/products" className="bg-orange-400 text-white px-6 py-3 rounded-lg hover:bg-orange-500 transition-colors">Browse All Products</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="relative h-96 flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center moving-bg opacity-40" style={{ backgroundImage: "url('/dummy_background.jpg')" }} />
                <div className="relative max-w-[1320px] mx-auto px-4 h-full flex items-center justify-center">
                    <div className="text-center text-white">
                        <h1 className="text-5xl font-bold mb-4">{getProductName()}</h1>
                    </div>
                </div>
            </div>

            <div className="max-w-[1320px] mx-auto px-4 py-8">
                <div className="max-w-6xl mx-auto">
                    <nav className="mb-8">
                        <ol className="flex items-center space-x-2 text-sm text-gray-600">
                            <li><Link href="/" className="hover:text-orange-400">Home</Link></li>
                            <li className="text-gray-400">&gt;</li>
                            <li><Link href="/products" className="hover:text-orange-400">Products</Link></li>
                            <li className="text-gray-400">&gt;</li>
                            {'forkliftType' in product ? (
                                <li><Link href="/products/forklift" className="hover:text-orange-400">Forklifts</Link></li>
                            ) : (
                                <li><Link href="/products/lift" className="hover:text-orange-400">Lifts</Link></li>
                            )}
                            <li className="text-gray-400">&gt;</li>
                            <li className="text-gray-800 font-medium">{getProductName()}</li>
                        </ol>
                    </nav>

                    <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                            <div className="space-y-4">
                                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                                    <Image
                                        src={getProductImage()}
                                        alt={getProductName()}
                                        width={500}
                                        height={500}
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            (e.currentTarget as HTMLImageElement).src = '/dummy_rectangular.jfif';
                                        }}
                                    />
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <h1 className="text-3xl font-bold text-gray-800 mb-2">{getProductName()}</h1>
                                    <p><span className="font-bold">Category :</span> {(product.type).split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}</p>
                                    <hr className='my-4 border-gray-300 border-[1px]' />
                                    <div className="flex items-center mt-4">
                                        {getProductDescription() && (
                                            <div>
                                                <h3 className="text-lg font-semibold text-gray-800 mb-2">Description</h3>
                                                <p className="text-gray-600 text-base">{getProductDescription()}</p>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {renderSpecifications() && (
                                    <div>
                                        {renderSpecifications()}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {renderAdditionalInfo() && (
                        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                            {renderAdditionalInfo()}
                        </div>
                    )}

                    {relatedProducts.length > 0 && (
                        <div className="bg-white rounded-lg shadow-lg p-8">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">Related Products</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {relatedProducts.map((relatedProduct, index) => (
                                    <Link key={index} href={`/product/${relatedProduct.itemCode}`} className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow">
                                        <div className="aspect-square bg-gray-200 rounded-lg mb-3 overflow-hidden">
                                            <Image
                                                src={relatedProduct.image}
                                                alt={'forkliftType' in relatedProduct ? relatedProduct.model : relatedProduct.name}
                                                width={200}
                                                height={200}
                                                className="w-full h-full object-cover"
                                                onError={(e) => {
                                                    (e.currentTarget as HTMLImageElement).src = '/dummy_rectangular.jfif';
                                                }}
                                            />
                                        </div>
                                        <h3 className="font-semibold text-gray-800 text-sm">
                                            {'forkliftType' in relatedProduct ? relatedProduct.model : relatedProduct.name}
                                        </h3>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
