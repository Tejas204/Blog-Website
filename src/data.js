import {TiSocialTwitterCircular, TiSocialFacebookCircular, TiSocialLinkedinCircular} from 'react-icons/ti'

export let navbarItems = [
    {
        name: 'Home',
        goTo: '/'
    },
    {
        name: 'Blogs',
        goTo: 'blogs'
    },
    {
        name: 'Subscriptions',
        goTo: 'subscriptions'
    },
    {
        name: 'Login',
        goTo: 'login'
    },
    {
        name: 'Register',
        goTo: 'registration'
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