/**
 * Created by Gene on 16/3/11.
 */

interface Product {
    category: string,
    price: string,
    stocked: boolean,
    name: string
}

interface ProductRowProps {
    product: Product
}

interface ProductTableProps {
    products: Array<any>
}