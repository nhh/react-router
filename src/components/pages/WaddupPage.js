import React from "react";
import {ImageGalleryWidget} from "../widgets/ImageGalleryWidget";
import {Route} from "react-router-dom";
import {VideoGalleryWidget} from "../widgets/VideoGalleryWidget";

import Notification from '../../events/Notification'

export class WaddupPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            message: ""
        }
    }

    componentDidMount() {
        const event = Notification;
        event.receive().subscribe((event) => this.setState({message: event.message}));
    }

    render() {
        return (
            <div className="columns">
                { this.state.message }
                <div className="column">
                    <Route path={`${this.props.match.path}/gallery`} component={(props) => <ImageGalleryWidget {...props}></ImageGalleryWidget>}></Route>
                    <Route path={`${this.props.match.path}/videos`} component={(props) => <VideoGalleryWidget {...props}></VideoGalleryWidget>}></Route>
                </div>
            </div>
        );
    }
}