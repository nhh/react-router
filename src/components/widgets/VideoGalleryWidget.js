import React from "react";
import {Link, Route} from "react-router-dom";

export class VideoGalleryWidget extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            images: [
                "http://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com",
                "http://www.youtube.com/embed/82NBsCOQoi4?autoplay=1",
            ],
        }
    }

    render() {
        return (
            <React.Fragment>
                <Route path={`${this.props.match.path}/:id`} render={(match) => <iframe id="ytplayer" type="text/html" width="640" height="360" src={this.state.images[match.match.params.id]}></iframe>}></Route>
                <div className="buttons">
                    {
                        this.state.images.map((image, index) => <Link key={index} to={`${this.props.match.path}/${index}`} className="button is-text">{index}</Link>)
                    }
                </div>
            </React.Fragment>
        );
    }
}