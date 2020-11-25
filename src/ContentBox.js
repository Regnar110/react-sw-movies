import {Component} from 'react';
import './contentbox.scss'
import BoxNavbar from './BoxNavbar';
import Home from './Home';

class ContentBox extends Component {
    constructor() {
        super();
        this.state = {
            menuOn: false,
            searchfieldOn: false,
            searchFieldPlaceholder: '', // zsłuży do zmiasy placeholdera w polu wyszukiwania zależnie od tego w jakiej sekcji aplikacji z najduje się użytkownik
            userSitePos: '', //wskazuje na pozycje użytkownika w contentBoxe. Czyli na to czy przegląda filmy, postacie lub coś innego
        }
    }

    searchFieldFunctions = (event) => { // zmieniane są 3 stany czyli searchFieldPlaceholder,  userSitePos i searchFieldOn. Ten ostatni w zalezności od tego jaki element menu jest kliknięty. Nadaje funkcjonalośc do searchFielda i ogólnie menu
        const searchContainer = document.querySelector('.boxSearch-container');
        this.setState({userSitePos: event.target.id}, () => console.log(this.state.userSitePos))
        this.setState({searchFieldPlaceholder: 'search for ' + event.target.id})
        if(!this.state.searchfieldOn && event.target.id !== 'start'){
                this.setState({searchfieldOn: true}, ()=>{
                    searchContainer.style.width = '175px';
                    searchContainer.style.left = '60px';
                    setTimeout(() => {
                        searchContainer.firstChild.style.left = '0px';
                        searchContainer.firstChild.style.width = '165px';
                    }, 300)
                })
        }
        if(event.target.id === 'start') {
            this.setState({searchfieldOn: false}, () => {
                setTimeout(() => {
                    searchContainer.style.width = '0px';
                    searchContainer.style.left = '-60px';
                }, 300)
                searchContainer.firstChild.style.left = '-200px';
                searchContainer.firstChild.style.width = '0px';
            })
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
                <BoxNavbar menuFunction={this.toggleMenu} placeholder={searchFieldPlaceholder} placeholderFunction={this.searchFieldFunctions}/>
                <Home />
            </div>
        )
    }
}

export default ContentBox;


