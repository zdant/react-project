/**
 * Created by Gene on 16/3/11.
 */

import SearchBar from './SearchBar';
import ProductTable from './ProductTable'

class FilterableProductTable extends React.Component<any, any> {
    render() {
        return (
            <div>
                <SearchBar />
                <ProductTable products={this.props.products} />
            </div>
        )
    }
}

export default FilterableProductTable;