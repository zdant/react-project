/**
 * Created by Gene on 16/3/11.
 */

class ProductCategoryRow extends React.Component<any,any> {
    render() {
        return (<tr><th colSpan="2">{this.props.category}</th></tr>)
    }
}

export default ProductCategoryRow;