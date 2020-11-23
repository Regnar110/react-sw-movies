import {Component} from 'react';
import './contentbox.scss'
import BoxNavbar from './BoxNavbar';

class ContentBox extends Component {
    constructor() {
        super();
        this.state = {
            menuOn: false,
            searchFieldPlaceholder: 'placeholder state'
        }
    }

    toggleMenu = () => {
        const {menuOn} = this.state;
        const navBurger = document.querySelector('.burger');
        const navMenu = document.querySelector('.nav-menu')
        if(menuOn===false) {
            this.setState({menuOn: true}, () => {
                navBurger.classList.toggle('active');
                navMenu.style.left = '0px';
            })
        } else {
            this.setState({menuOn: false}, () => {
                navBurger.classList.remove('active');
                navMenu.style.left = '-400px';
            })
        }
    }

    setHeight = () => { // ustawia wysokość content boxa na wysokość pozostałą na stronie pod logiem, dla każdej wysokości ekranu
        const contentBox = document.querySelector('.content-box');
        contentBox.style.height = (window.innerHeight - contentBox.offsetTop - 5)+'px';
    }

    componentDidMount() {
        this.setHeight();
    }

    render() {
        const {searchFieldPlaceholder} = this.state;
        return(
            <div className='content-box'>
                <BoxNavbar menuFunction={this.toggleMenu} placeholder={searchFieldPlaceholder}/>
            </div>
        )
    }
}

export default ContentBox;