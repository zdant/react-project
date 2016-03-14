/**
 * Created by Gene on 16/3/11.
 */

import SearchBar from './SearchBar';
import ProductTable from './ProductTable'

class FilterableProductTable extends React.Component<FilterableProductTableProps, FilterableProductTableState> {

    state:FilterableProductTableState;

    constructor(props:FilterableProductTableProps) {
        super(props);
        this.state = {'filterText':'',inStockOnly:false};
    }

    getInitializeState() {
        return this.state;
    }

    handleUserInput(filterText, inStockOnly) {
        this.setState({
            filterText: filterText,
            inStockOnly: inStockOnly
        })
    }

    render() {
        return (
            <div>
                <SearchBar
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                    onUserInput={this.handleUserInput.bind(this)}
                />
                <ProductTable
                    products={this.props.products}
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                />
            </div>
        )
    }
}

export default FilterableProductTable;