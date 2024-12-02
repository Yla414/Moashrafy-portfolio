import { RiGoogleFill as GoogleIcon, RiAmazonLine as Amazon, RiSpotifyLine as SpotifyIcon, RiUbuntuLine as Ubuntu, RiShoppingBagLine as ShoppingBag, RiHourglass2Line as GlassIcon  } from 'react-icons/ri';

const DataArray = {
    expData: [
        {
            arrayId: "1",
            expIcon: <><Amazon color='var(--text-color)' size={20} /></>,
            expTitle: 'Product designer at',
            expCompany: 'Amazon',
            expDateStart: 'March 2022',
            expDateCurrent: 'April 2024',
        },
        {
            arrayId: "2",
            expIcon: <><GoogleIcon color='var(--text-color)' size={20} /></>,
            expTitle: 'Product designer at',
            expCompany: 'Google',
            expDateStart: 'February 2020',
            expDateCurrent: 'September 2022',
        },
        {
            arrayId: "3",
            expIcon: <><SpotifyIcon color='var(--text-color)' size={20} /></>,
            expTitle: 'Product designer at',
            expCompany: 'Spotify',
            expDateStart: 'January 2023',
            expDateCurrent: 'Present',
        },
    ],

    awardData: [
        {
            awardId: 4,
            awardIcon: <><Ubuntu color='var(--text-color)' size={20} /></>,
            awardTitle: 'Website of the Day at',
            awardCompany: 'Ubuntu',
            awardDate: 'November 2023'
        },
        {
            awardId: 5,
            awardIcon: <><ShoppingBag color='var(--text-color)' size={20} /></>,
            awardTitle: 'Best visual design at',
            awardCompany: 'Shopify',
            awardDate: 'July 2022'
        },
        {
            awardId: 6,
            awardIcon: <><GlassIcon color='var(--text-color)' size={20} /></>,
            awardTitle: 'Site of the Day at',
            awardCompany: 'Fleepsyde',
            awardDate: 'November 2023'
        },
    ],
}

export default DataArray;