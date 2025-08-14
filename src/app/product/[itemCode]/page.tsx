import { allProducts } from '@/data/allLifts';
import { forkliftData } from '@/data/forklifts';
import { generatorData } from '@/data/generators';
import { hvacData } from '@/data/hvac';
import { streetLightData } from '@/data/streetLights';
import { solarData } from '@/data/solar';
import ProductDetailClient from './ProductDetailClient';

export const dynamicParams = false;

export async function generateStaticParams() {
    const codes = [
        ...allProducts.map(p => p.itemCode),
        ...forkliftData.map(p => p.itemCode),
        ...generatorData.map(p => p.itemCode),
        ...hvacData.map(p => p.itemCode),
        ...streetLightData.map(p => p.itemCode),
        ...solarData.map(p => p.itemCode),
    ];
    const unique = Array.from(new Set(codes));
    return unique.map(itemCode => ({ itemCode }));
}

export default async function ProductDetailPage({ params }: { params: Promise<{ itemCode: string }> }) {
    const { itemCode } = await params;
    return <ProductDetailClient itemCode={itemCode} />;
}