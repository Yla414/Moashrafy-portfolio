import { RiComputerLine as Desktop, RiSmartphoneLine as MobileIcon } from 'react-icons/ri';

import { image01, image02, image04, image05 } from '../../assets/assets.exports'

const ServiceData = [
    {
        id: 1,
        serviceIcon: <><Desktop color='var(--text-color)' size={16} /></>,
        serviceTitle: 'Full pages Website Design',
        serviceDesc: 'Crafting immersive and engagin full-page website designs that captivate audiences and deliver seamless user experience.',
        serivceImages: [
            {
                imgId: 'xiqu-12',
                serviceImg: image02,
            },
            {
                imgId: 'asda9-12',
                serviceImg: image01,
            },
        ]
    },
    {
        id: 2,
        serviceIcon: <><MobileIcon color='var(--text-color)' size={16} /></>,
        serviceTitle: 'Mobile & Web Application',
        serviceDesc: 'Crafting immersive and engagin full-page website designs that captivate audiences and deliver seamless user experience.',
        serivceImages: [
            {
                imgId: 'adfwu-222',
                serviceImg: image05,
            },
            {
                imgId: 'asdlak-14',
                serviceImg: image04,
            },
        ]
    },
];

export default ServiceData;