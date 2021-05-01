import React, { Fragment, Component } from "react";

import { v4 as uuidv4 } from 'uuid';
import ReactDOM from "react-dom";
import './index.css'


//Component
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import ContactList from "./Components/ContactList/ContactList";


class App extends Component {

    state = {
        List: [
            {
                "Id": uuidv4(),
                "Avatar": "https://bootdey.com/img/Content/avatar/avatar1.png",
                "Name": " Alexander Verdnam",
                "Phone": "+1-800-600-9898",
                "Email": "example@gmail.com",
                "Status": "Friend"
            },
            {
                "Id": uuidv4(),
                "Avatar": "https://bootdey.com/img/Content/avatar/avatar4.png",
                "Name": "Gerard Butler",
                "Phone": "+1-800-600-4589",
                "Email": "example@gmail.com",
                "Status": "Work"
            },
            {
                "Id": uuidv4(),
                "Avatar": "https://bootdey.com/img/Content/avatar/avatar3.png",
                "Name": "Anna Lee",
                "Phone": "+1-800-600-3658",
                "Email": "example@gmail.com",
                "Status": "Private"
            },
            {
                "Id": uuidv4(),
                "Avatar": "https://bootdey.com/img/Content/avatar/avatar2.png",
                "Name": "Olga Verdnam",
                "Phone": "+1-800-600-3658",
                "Email": "example@gmail.com",
                "Status": "Family"
            },
            {
                "Id": uuidv4(),
                "Avatar": "https://bootdey.com/img/Content/avatar/avatar5.png",
                "Name": "Alexandera Verdnam",
                "Phone": "+1-800-600-2359",
                "Email": "example@gmail.com",
                "Status": ""
            },
            {
                "Id": uuidv4(),
                "Avatar": "https://bootdey.com/img/Content/avatar/avatar7.png",
                "Name": "John Verdnam",
                "Phone": "+1-800-600-2135",
                "Email": "example@gmail.com",
                "Status": "none"
            },
        ]
    }

    render() {

        const { List } = this.state;
        return (
            <Fragment>
                <Header />
                <ContactList ContactList={List} />
                <Footer />
            </Fragment >
        )
    }
}
ReactDOM.render(<App />, document.getElementById('root'));