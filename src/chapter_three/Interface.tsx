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

interface ProductTableProps extends FilterableProductTableState{
    products: Array<Product>
}

interface FilterableProductTableProps {
    products: Array<any>
}

interface FilterableProductTableState {
    filterText: string,
    inStockOnly : boolean
}

interface SearchBarProps extends FilterableProductTableState {
    onUserInput: (string, boolean) => void
}

interface SearchBarState extends FilterableProductTableState {

}