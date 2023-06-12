import {TiSocialTwitterCircular, TiSocialFacebookCircular, TiSocialLinkedinCircular} from 'react-icons/ti'
import {MdLogin, MdBook, MdHome, MdFilterList, MdVerifiedUser} from "react-icons/md"


export let navbarItems = [
    {
        name: 'Home',
        goTo: '/',
        icon: <MdHome/>
    },
    {
        name: 'Blogs',
        goTo: '/blogs',
        icon: <MdBook/>
    },
    {
        name: 'Subscriptions',
        goTo: '/subscriptions',
        icon: <MdFilterList/>
    },
    {
        name: 'Login',
        goTo: '/login',
        icon: <MdLogin/>
    },
    {
        name: 'Register',
        goTo: '/registration',
        icon: <MdVerifiedUser/>
    }
]

export let footerIcons = [
    {
        name: 'Twitter',
        icon: <TiSocialTwitterCircular/>
    },
    {
        name: 'Facebook',
        icon: <TiSocialFacebookCircular/>
    },
    {
        name: 'Twitter',
        icon: <TiSocialLinkedinCircular/>
    }
]