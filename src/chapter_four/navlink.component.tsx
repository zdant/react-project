/**
 * Created by Gene on 16/3/15.
 */

import { Link } from 'react-router';

class NavLinkComponent extends React.Component<any, any> {
    render() {
        return <Link {...this.props}  activeClassName="active" />
    }
}

export default NavLinkComponent;