/**
 * Created by Gene on 16/3/11.
 */

class ProductRow extends React.Component<ProductRowProps, any> {
    render() {
        var name = this.props.product.stocked ?
            this.props.product.name :
            <span style={{color: 'red'}}>
                {this.props.product.name}
            </span>;
        return (
            <tr>
                <td>{name}</td>
                <td>{this.props.product.price}</td>
            </tr>
        );
    }
}

export default ProductRow;