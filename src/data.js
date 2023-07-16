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
        goTo: '/create-blog',
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
        dateOfPublishing: new Date("2018-04-25").toLocaleDateString(),
        readTime: '5',
        blogTitle: 'Cybersecurity: The great wall of online protection',
        blogDescription: 'Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks. These cyberattacks are usually aimed at accessing, changing, or destroying sensitive information.',
        blogTitleImage: Cyber,
        category: 'technology'
    },
    {
        dateOfPublishing: new Date("2022-03-18").toLocaleDateString(),
        readTime: '7',
        blogTitle: 'Blockchain: The ledger needed for the modern world',
        blogDescription: 'Blockchain is a shared, immutable ledger that facilitates the process of recording transactions and tracking assets in a business network.',
        blogTitleImage: Blockchain,
        category: 'technology'
        
    },
    {
        dateOfPublishing: new Date("2023-06-17").toLocaleDateString(),
        readTime: '6',
        blogTitle: 'VR: Creating an alternate reality',
        blogDescription: 'Virtual reality (VR) is a simulated experience that employs pose tracking and 3D near-eye displays to give the user an immersive feel of a virtual world.',
        blogTitleImage: VR,
        category: 'technology'
    },
    {
        dateOfPublishing: new Date("2022-03-19").toLocaleDateString(),
        readTime: '4',
        blogTitle: 'VR: Creating an alternate reality',
        blogDescription: 'Virtual reality (VR) is a simulated experience that employs pose tracking and 3D near-eye displays to give the user an immersive feel of a virtual world.',
        blogTitleImage: Etherium,
        category: 'technology'
    },
    {
        dateOfPublishing: new Date("2020-12-31").toLocaleDateString(),
        readTime: '8',
        blogTitle: 'VR: Creating an alternate reality',
        blogDescription: 'Virtual reality (VR) is a simulated experience that employs pose tracking and 3D near-eye displays to give the user an immersive feel of a virtual world.',
        blogTitleImage: UIUX,
        category: 'technology'
    },
    {
        dateOfPublishing: new Date("2021-08-18").toLocaleDateString(),
        readTime: '5',
        blogTitle: 'VR: Creating an alternate reality',
        blogDescription: 'Virtual reality (VR) is a simulated experience that employs pose tracking and 3D near-eye displays to give the user an immersive feel of a virtual world.',
        blogTitleImage: MERN,
        category: 'technology'
    },
    {
        dateOfPublishing: new Date("2022-09-22").toLocaleDateString(),
        readTime: '5',
        blogTitle: 'VR: Creating an alternate reality',
        blogDescription: 'Virtual reality (VR) is a simulated experience that employs pose tracking and 3D near-eye displays to give the user an immersive feel of a virtual world.',
        blogTitleImage: foodDiet,
        category: 'food'
    },
    {
        dateOfPublishing: new Date("2022-11-01").toLocaleDateString(),
        readTime: '8',
        blogTitle: 'Indian Food: Treat of a lifetime',
        blogDescription: 'Virtual reality (VR) is a simulated experience that employs pose tracking and 3D near-eye displays to give the user an immersive feel of a virtual world.',
        blogTitleImage: indianFood,
        category: 'food'
    },
    {
        dateOfPublishing: new Date("2022-04-22").toLocaleDateString(),
        readTime: '6',
        blogTitle: 'VR: Creating an alternate reality',
        blogDescription: 'Virtual reality (VR) is a simulated experience that employs pose tracking and 3D near-eye displays to give the user an immersive feel of a virtual world.',
        blogTitleImage: goVegan,
        category: 'food'
    },
    {
        dateOfPublishing: new Date("2022-04-15").toLocaleDateString(),
        readTime: '6',
        blogTitle: 'VR: Creating an alternate reality',
        blogDescription: 'Virtual reality (VR) is a simulated experience that employs pose tracking and 3D near-eye displays to give the user an immersive feel of a virtual world.',
        blogTitleImage: ganges,
        category: 'tourism'
    },
    {
        dateOfPublishing: new Date("2022-04-15").toLocaleDateString(),
        readTime: '6',
        blogTitle: 'VR: Creating an alternate reality',
        blogDescription: 'Virtual reality (VR) is a simulated experience that employs pose tracking and 3D near-eye displays to give the user an immersive feel of a virtual world.',
        blogTitleImage: eifellTower,
        category: 'tourism'
    },
    {
        dateOfPublishing: new Date("2023-02-28").toLocaleDateString(),
        readTime: '6',
        blogTitle: 'VR: Creating an alternate reality',
        blogDescription: 'Virtual reality (VR) is a simulated experience that employs pose tracking and 3D near-eye displays to give the user an immersive feel of a virtual world.',
        blogTitleImage: travel,
        category: 'tourism'
    },
]

export let blogCategoryOptions = [
    {
        value: 'all_categories',
        label: 'All Categories'
    },
    {
        value: 'technology',
        label: 'Technology'
    },
    {
        value: 'food',
        label: 'Food'
    },
    {
        value: 'tourism',
        label: 'Tourism'
    }
]

export let sortingOptions = [
    {
        value: 'sort_a_z',
        label: 'Sort by A-Z'
    },
    {
        value: 'sort_z_a',
        label: 'Sort by Z-A'
    },
    {
        value: 'sort_date_latest',
        label: 'Latest Blogs'
    },
    {
        value: 'sort_date_oldest',
        label: 'Oldest blogs'
    },
    {
        value: 'sort_least_read_time',
        label: 'Least reading time'
    },
    {
        value: 'sort_most_read_time',
        label: 'Most reading time'
    }
]