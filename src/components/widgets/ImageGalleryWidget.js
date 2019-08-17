import React from "react";
import {Link, Route} from "react-router-dom";
import Notification from '../../events/Notification'

export class ImageGalleryWidget extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            images: [
                "https://images.pexels.com/photos/1366901/pexels-photo-1366901.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                "https://images.pexels.com/photos/2773086/pexels-photo-2773086.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                "https://images.pexels.com/photos/2404055/pexels-photo-2404055.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                "https://images.pexels.com/photos/1136588/pexels-photo-1136588.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                "https://images.pexels.com/photos/1759478/pexels-photo-1759478.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                "https://images.pexels.com/photos/2407373/pexels-photo-2407373.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                "https://images.pexels.com/photos/1398339/pexels-photo-1398339.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                "https://images.pexels.com/photos/1998435/pexels-photo-1998435.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            ],
        }
    }

    dispatchNavigation = (index) => {
        const event = Notification;
        event.dispatch({message: "Image Gallery navigated to " + index});
    };

    render() {
        return (
            <React.Fragment>
                <Route path={`${this.props.match.path}/:id`} render={(match) => <img className={"gallery-image"} src={this.state.images[match.match.params.id]}></img>}></Route>
                <div className="buttons">
                    {
                        this.state.images.map((image, index) => <Link onClick={() => this.dispatchNavigation(index)} key={index} to={`${this.props.match.path}/${index}`} className="button is-text">{index}</Link>)
                    }
                </div>
            </React.Fragment>
        );
    }
}