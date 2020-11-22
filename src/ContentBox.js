import {Component} from 'react';
import './contentbox.scss'

class ContentBox extends Component {
    constructor() {
        super();
    }

    setHeight = () => { // ustawia wysokość content boxa na wysokość pozostałą na stronie pod logiem, dla każdej wysokości ekranu
        const contentBox = document.querySelector('.content-box');
        contentBox.style.height = (window.innerHeight - contentBox.offsetTop - 2)+'px';
    }

    componentDidMount() {
        this.setHeight();
    }

    render() {
        return(
            <div className='content-box'>

            </div>
        )
    }
}

export default ContentBox;