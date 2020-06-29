import React, { Component } from 'react'
import { Card, CardImg, CardText, CardTitle, CardBody } from 'reactstrap'


class DishDetail extends Component {

    constructor(props) {
        super(props)
    }

    renderDish(dish) {
        if (dish != null) {
            return (
                <Card>
                    <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name} />
                    <CardBody>
                        <h2><CardTitle>{this.props.dish.name}</CardTitle></h2>
                        <CardText> {this.props.dish.description} </CardText>
                    </CardBody>
                </Card>
            )
        }
        else {
            return (
                <div></div>
            )
        }
    }

    renderComments(comments) {
        const commentList = comments.map(comment => {
            const date = new Date(comment.date)
            const month = ["Jan", "Feb", "Mar",
                            "Apr", "May", "Jun",
                            "Jul", "Aug", "Sep",
                            "Oct", "Nov", "Dec"]
            return(
                <li key = {comment.id}>
                    {comment.comment}
                    <br/><br/>
                    --{comment.author}, {month[date.getMonth()]+ " " + (date.getDate() + 1) + ', ' + date.getFullYear()}
                    <br/><br/>
                </li>
            )
        })

        return(
            <div>
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {commentList}
                </ul>
            </div>
        )
    }

    render() {
        if (this.props.dish) {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            {this.renderDish(this.props.dish)}
                        </div>
                        <div className ="col-12 col-md-5 m-1">
                            {this.renderComments(this.props.dish.comments)}
                        </div>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div></div>
            )
        }
    }

}

export default DishDetail