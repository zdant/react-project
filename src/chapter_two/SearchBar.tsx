/**
 * Created by Gene on 16/3/11.
 */

class SearchBar extends React.Component<any, any> {
    render() {
        return (
            <form>
                <input type="text" placeholder="Search..." />
                <p>
                    <input type="checkbox" />
                    {' '}
                    Only show products in stock
                </p>
            </form>
        )
    }
}

export default SearchBar;