import {Component, Fragment} from 'react';
import './contentbox.scss'
import BoxNavbar from './BoxNavbar';
import Start from './Start';
import Movies from './Movies'
import Characters from './Characters'
import Species from './Species'
import Actors from './Actors'

class ContentBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuOn: false,
            searchfieldOn: false,
            searchFieldPlaceholder: '', // zsłuży do zmiasy placeholdera w polu wyszukiwania zależnie od tego w jakiej sekcji aplikacji z najduje się użytkownik
            searchFieldContent: '',
            userSitePos: 'start', //wskazuje na pozycje użytkownika w contentBoxe. Czyli na to czy przegląda filmy, postacie lub coś innego
        }
    }

    changeSearchInput = (e) => {
        this.setState({searchFieldContent: e.target.value})
    }

    deploySection = () => { // funkcja która na podstawie wyboru z menu( który zmienia stan userSitePos na nazwę sekcji, w której znajduje się użytkownik) wyświetla zawartość zwracając komponent odpowiadający wyborom użytkownika. FUNKCJA WYWOŁYWANA PRZEZ searchFIELD FUNCTION
        let {userSitePos, searchFieldContent} = this.state
        if(userSitePos === 'start'){
            return(
                <Start />
            )
        } else if(userSitePos === 'movies') {
            return(
                <Movies searchField={searchFieldContent}/>
            )
        } else if(userSitePos === 'characters'){
            return(
                <Characters searchField={searchFieldContent}/>
            )
        } else if(userSitePos === 'species') {
            return(
                <Species searchField={searchFieldContent}/>
            )
        } else if(userSitePos === 'actors') {
            return(
                <Actors searchField={searchFieldContent}/>
            )
        }
    }

    searchFieldFunctions = (event) => { // zmieniane są 3 stany czyli searchFieldPlaceholder,  userSitePos i searchFieldOn. Ten ostatni w zalezności od tego jaki element menu jest kliknięty. Nadaje funkcjonalośc do searchFielda i ogólnie menu
        const searchContainer = document.querySelector('.boxSearch-container');
        this.setState({userSitePos: event.target.id})
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
        } else if(event.target.id === 'start') {
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
            <Fragment>
            <BoxNavbar menuFunction={this.toggleMenu} placeholder={searchFieldPlaceholder} placeholderFunction={this.searchFieldFunctions} searchContent={this.changeSearchInput}/>
            <div className='content-box'>
            {this.deploySection()}
            </div>
            </Fragment>
        )
    }
}

export default ContentBox;


