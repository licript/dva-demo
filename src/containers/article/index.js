import * as React from 'react'
import  {connect} from 'dva'
class Article extends React.Component {

    getArticle = () => {
        this.props.queryArticles({
            type: 'article/queryArticles',
            payload: {
                query: {article: 1}
            }
        })
    }
    render() {
        return (
            <div>
                <button onClick={() => {this.getArticle()}}> 获取 </button>
                <div>
                    article: {JSON.stringify(this.props.article)}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (store) => {
    return {
        article: store.article
    }
}

const mapStateToDispatch =  (dispatch) => {
    return {
        queryArticles: (data) => dispatch(data)
    }
}
export default connect(mapStateToProps, mapStateToDispatch)(Article)