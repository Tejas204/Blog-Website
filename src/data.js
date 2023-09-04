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

// Big blogs content **********************************************

let etheriumContent = `Ethereum is a decentralized blockchain with smart contract functionality. 
Ether is the native cryptocurrency of the platform. Among cryptocurrencies, ether is second only to bitcoin in market capitalization. 
It is open-source software.Ethereum was conceived in 2013 by programmer Vitalik Buterin.
Additional founders of Ethereum included Gavin Wood, Charles Hoskinson, Anthony Di Iorio and Joseph Lubin.
In 2014, development work began and was crowdfunded, and the network went live on 30 July 2015.
Ethereum allows anyone to deploy permanent and immutable decentralized applications onto it, with which users can interact.
Decentralized finance (DeFi) applications provide financial instruments which do not directly rely on financial intermediaries like brokerages, exchanges, or banks. 
This facilitates borrowing against cryptocurrency holdings or lending them out for interest.
Ethereum also allows users to create and exchange non-fungible tokens (NFTs), which are tokens that can be tied to unique digital assets, 
such as images. Additionally, many other cryptocurrencies utilize the ERC-20 token standard on top of the Ethereum blockchain and have utilized
the platform for initial coin offerings.On 15 September 2022, Ethereum transitioned its consensus mechanism from proof-of-work (PoW) to proof-of-stake (PoS) in an upgrade process known as "the Merge". 
This has cut Ethereum's energy usage by 99%.`

// Content ends **********************************************

let comment = [
    {
        commentText: "This is a great work on ethereum. This helped me a lot in my project. Keep sharing such articles. This is a great work on ethereum. This helped me a lot in my project. Keep sharing such articles. This is a great work on ethereum. This helped me a lot in my project. Keep sharing such articles",
        commentUser: "Tejas",
        commentDate: new Date().toLocaleDateString()
    },
    {
        commentText: "This is a great work on ethereum. This helped me a lot in my project. Keep sharing such articles. This is a great work on ethereum. This helped me a lot in my project. Keep sharing such articles. This is a great work on ethereum. This helped me a lot in my project. Keep sharing such articles",
        commentUser: "Tejas",
        commentDate: new Date().toLocaleDateString()
    },
    {
        commentText: "This is a great work on ethereum. This helped me a lot in my project. Keep sharing such articles. This is a great work on ethereum. This helped me a lot in my project. Keep sharing such articles. This is a great work on ethereum. This helped me a lot in my project. Keep sharing such articles",
        commentUser: "Tejas",
        commentDate: new Date().toLocaleDateString()
    }


]

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
        name: 'All Blogs',
        goTo: '/blogs',
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
        category: 'technology',
        comments: comment,
        id: 1
    },
    {
        dateOfPublishing: new Date("2022-03-18").toLocaleDateString(),
        readTime: '7',
        blogTitle: 'Blockchain: The ledger needed for the modern world',
        blogDescription: 'Blockchain is a shared, immutable ledger that facilitates the process of recording transactions and tracking assets in a business network.',
        blogTitleImage: Blockchain,
        category: 'technology',
        id: 2
        
    },
    {
        dateOfPublishing: new Date("2023-06-17").toLocaleDateString(),
        readTime: '6',
        blogTitle: 'VR: Creating an alternate reality',
        blogDescription: 'Virtual reality (VR) is a simulated experience that employs pose tracking and 3D near-eye displays to give the user an immersive feel of a virtual world.',
        blogTitleImage: VR,
        category: 'technology',
        id: 3
    },
    {
        dateOfPublishing: new Date("2022-03-19").toLocaleDateString(),
        readTime: '4',
        blogTitle: 'Ethereum: A Decentralized Revolution',
        blogDescription: etheriumContent,
        blogTitleImage: Etherium,
        category: 'technology',
        id: 4
    },
    {
        dateOfPublishing: new Date("2020-12-31").toLocaleDateString(),
        readTime: '8',
        blogTitle: 'UI/UX: Crafting Digital Experiences',
        blogDescription: 'UI/UX design is all about crafting digital experiences that are intuitive, engaging, and user-friendly. It involves designing the user interface (UI) and the user experience (UX) of a product or service.',
        blogTitleImage: UIUX,
        category: 'technology',
        id: 5
    },
    {
        dateOfPublishing: new Date("2021-08-18").toLocaleDateString(),
        readTime: '5',
        blogTitle: 'MERN: A complete front end and backend package for web development using MongoDB, Reacr, Express and Node',
        blogDescription: 'Virtual reality (VR) is a simulated experience that employs pose tracking and 3D near-eye displays to give the user an immersive feel of a virtual world.',
        blogTitleImage: MERN,
        category: 'technology',
        id: 6
    },
    {
        dateOfPublishing: new Date("2022-09-22").toLocaleDateString(),
        readTime: '5',
        blogTitle: 'Eat Light, Feel Bright',
        blogDescription: 'Salads are dishes made up of mixed ingredients, often including vegetables. They can be served chilled or at room temperature.',
        blogTitleImage: foodDiet,
        category: 'food',
        id: 7
    },
    {
        dateOfPublishing: new Date("2022-11-01").toLocaleDateString(),
        readTime: '8',
        blogTitle: 'Indian Food: Treat of a lifetime',
        blogDescription: 'Indian food is a diverse cuisine that varies by region and is influenced by local culture, religion, and traditions. It is known for its bold flavors and use of spices.',
        blogTitleImage: indianFood,
        category: 'food',
        id: 8
    },
    {
        dateOfPublishing: new Date("2022-04-22").toLocaleDateString(),
        readTime: '6',
        blogTitle: 'Savor the Flavor of Vegan Delights',
        blogDescription: 'Vegan food refers to a diet that excludes all animal products, including meat, dairy, eggs, and honey.',
        blogTitleImage: goVegan,
        category: 'food',
        id: 9
    },
    {
        dateOfPublishing: new Date("2022-04-15").toLocaleDateString(),
        readTime: '6',
        blogTitle: 'VR: Creating an alternate reality',
        blogDescription: 'Virtual reality (VR) is a simulated experience that employs pose tracking and 3D near-eye displays to give the user an immersive feel of a virtual world.',
        blogTitleImage: ganges,
        category: 'tourism',
        id: 10
    },
    {
        dateOfPublishing: new Date("2022-04-15").toLocaleDateString(),
        readTime: '6',
        blogTitle: 'VR: Creating an alternate reality',
        blogDescription: 'Virtual reality (VR) is a simulated experience that employs pose tracking and 3D near-eye displays to give the user an immersive feel of a virtual world.',
        blogTitleImage: eifellTower,
        category: 'tourism',
        id: 11
    },
    {
        dateOfPublishing: new Date("2023-02-28").toLocaleDateString(),
        readTime: '6',
        blogTitle: 'VR: Creating an alternate reality',
        blogDescription: 'Virtual reality (VR) is a simulated experience that employs pose tracking and 3D near-eye displays to give the user an immersive feel of a virtual world.',
        blogTitleImage: travel,
        category: 'tourism',
        id: 12
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

