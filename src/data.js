import {TiSocialTwitterCircular, TiSocialFacebookCircular, TiSocialLinkedinCircular} from 'react-icons/ti'
import {MdLogin, MdBook, MdHome, MdFilterList, MdVerifiedUser} from "react-icons/md";
import VR from './Images/VR.jpg';
import Cyber from './Images/Cyber.jpg';
import Blockchain from './Images/Blockchain.jpg';


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

export let blogsCards = [
    {
        dateOfPublishing: '20-Apr-2023',
        blogTitle: 'Cybersecurity: The great wall of online protection',
        blogDescription: 'Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks. These cyberattacks are usually aimed at accessing, changing, or destroying sensitive information.',
        blogTitleImage: Cyber
    },
    {
        dateOfPublishing: '31-Mar-2022',
        blogTitle: 'Blockchain: The ledger needed for the modern world',
        blogDescription: 'Blockchain is a shared, immutable ledger that facilitates the process of recording transactions and tracking assets in a business network.',
        blogTitleImage: Blockchain
    },
    {
        dateOfPublishing: '18-Aug-2021',
        blogTitle: 'VR: Creating an alternate reality',
        blogDescription: 'Virtual reality (VR) is a simulated experience that employs pose tracking and 3D near-eye displays to give the user an immersive feel of a virtual world.',
        blogTitleImage: VR
    }
]