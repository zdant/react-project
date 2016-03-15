/**
 * Created by Gene on 16/3/15.
 */

interface Params {
    userName: string,
    repoName: string
}

interface RepoProps {
    params : Params
}

class Repo extends React.Component<RepoProps, any> {
    render() {
        return (
            <div>
                <h2>{this.props.params.repoName}</h2>
            </div>
        )
    }
}

export default Repo;