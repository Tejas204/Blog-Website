import {TiSocialTwitterCircular, TiSocialFacebookCircular, TiSocialLinkedinCircular} from 'react-icons/ti'
import {MdLogin, MdBook, MdHome, MdFilterList, MdVerifiedUser} from "react-icons/md";
import VR from './Images/VR.jpg';
import Cyber from './Images/Cyber.jpg';
import Blockchain from './Images/Blockchain.jpg';
import Etherium from './Images/etherium.jpeg';
import MERN from './Images/mern.jpg';
import UIUX from './Images/UIUX.jpg'
import foodDiet from './Images/food-diet.jpg';
import goVegan from './Images/go-vegan.jpg';
import indianFood from './Images/indian-food.jpg';
import travel from './Images/travel.jpg';
import eifellTower from './Images/eifell-tower.jpg';
import ganges from './Images/ganges.jpg';


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

export let verticalNavbarItems = [
    {
        name: 'Home',
        goTo: '/',
        icon: <MdHome/>
    },
    {
        name: 'Create blog',
        goTo: '/blogs',
        icon: <MdBook/>
    },
    {
        name: 'Remove filter',
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
        dateOfPublishing: '20-Apr-2023 | 5 min read',
        blogTitle: 'Cybersecurity: The great wall of online protection',
        blogDescription: 'Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks. These cyberattacks are usually aimed at accessing, changing, or destroying sensitive information.',
        blogTitleImage: Cyber,
        category: 'technology'
    },
    {
        dateOfPublishing: '31-Mar-2022 | 7 min read',
        blogTitle: 'Blockchain: The ledger needed for the modern world',
        blogDescription: 'Blockchain is a shared, immutable ledger that facilitates the process of recording transactions and tracking assets in a business network.',
        blogTitleImage: Blockchain,
        category: 'technology'
        
    },
    {
        dateOfPublishing: '01-Jun-2023 | 6 min read',
        blogTitle: 'VR: Creating an alternate reality',
        blogDescription: 'Virtual reality (VR) is a simulated experience that employs pose tracking and 3D near-eye displays to give the user an immersive feel of a virtual world.',
        blogTitleImage: VR,
        category: 'technology'
    },
    {
        dateOfPublishing: '19-Mar-2022 | 4 min read',
        blogTitle: 'VR: Creating an alternate reality',
        blogDescription: 'Virtual reality (VR) is a simulated experience that employs pose tracking and 3D near-eye displays to give the user an immersive feel of a virtual world.',
        blogTitleImage: Etherium,
        category: 'technology'
    },
    {
        dateOfPublishing: '31-Dec-2020 | 8 min read',
        blogTitle: 'VR: Creating an alternate reality',
        blogDescription: 'Virtual reality (VR) is a simulated experience that employs pose tracking and 3D near-eye displays to give the user an immersive feel of a virtual world.',
        blogTitleImage: UIUX,
        category: 'technology'
    },
    {
        dateOfPublishing: '18-Aug-2021 | 5 min read',
        blogTitle: 'VR: Creating an alternate reality',
        blogDescription: 'Virtual reality (VR) is a simulated experience that employs pose tracking and 3D near-eye displays to give the user an immersive feel of a virtual world.',
        blogTitleImage: MERN,
        category: 'technology'
    },
    {
        dateOfPublishing: '22-Sep-2022 | 5 min read',
        blogTitle: 'VR: Creating an alternate reality',
        blogDescription: 'Virtual reality (VR) is a simulated experience that employs pose tracking and 3D near-eye displays to give the user an immersive feel of a virtual world.',
        blogTitleImage: foodDiet,
        category: 'food'
    },
    {
        dateOfPublishing: '01-Nov-2022 | 8 min read',
        blogTitle: 'Indian Food: Treat of a lifetime',
        blogDescription: 'Virtual reality (VR) is a simulated experience that employs pose tracking and 3D near-eye displays to give the user an immersive feel of a virtual world.',
        blogTitleImage: indianFood,
        category: 'food'
    },
    {
        dateOfPublishing: '15-Apr-2022 | 6 min read',
        blogTitle: 'VR: Creating an alternate reality',
        blogDescription: 'Virtual reality (VR) is a simulated experience that employs pose tracking and 3D near-eye displays to give the user an immersive feel of a virtual world.',
        blogTitleImage: goVegan,
        category: 'food'
    },
    {
        dateOfPublishing: '15-Apr-2022 | 6 min read',
        blogTitle: 'VR: Creating an alternate reality',
        blogDescription: 'Virtual reality (VR) is a simulated experience that employs pose tracking and 3D near-eye displays to give the user an immersive feel of a virtual world.',
        blogTitleImage: ganges,
        category: 'tourism'
    },
    {
        dateOfPublishing: '15-Apr-2022 | 6 min read',
        blogTitle: 'VR: Creating an alternate reality',
        blogDescription: 'Virtual reality (VR) is a simulated experience that employs pose tracking and 3D near-eye displays to give the user an immersive feel of a virtual world.',
        blogTitleImage: eifellTower,
        category: 'tourism'
    },
    {
        dateOfPublishing: '15-Apr-2022 | 6 min read',
        blogTitle: 'VR: Creating an alternate reality',
        blogDescription: 'Virtual reality (VR) is a simulated experience that employs pose tracking and 3D near-eye displays to give the user an immersive feel of a virtual world.',
        blogTitleImage: travel,
        category: 'tourism'
    },
]