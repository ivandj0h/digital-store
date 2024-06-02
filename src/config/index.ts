export const PRODUCT_CATEGORIES = [
    {
        label: 'UI Kits',
        value: 'ui_kits' as const,
        featured: [
            {
                name: 'Editor Picks',
                href: '#',
                imageSrc: '/nav/ui-kits/mixed.jpg'
            },
            {
                name: 'New Arrival',
                href: '#',
                imageSrc: '/nav/ui-kits/blue.jpg'
            },
            {
                name: 'Best Sellers',
                href: '#',
                imageSrc: '/nav/ui-kits/purple.jpg'
            }
        ]
    },
    {
        label: 'Icons',
        value: 'icons' as const,
        featured: [
            {
                name: 'Favourite Icons Picks',
                href: '#',
                imageSrc: '/nav/icons/picks.jpg'
            },
            {
                name: 'New Arrival',
                href: '#',
                imageSrc: '/nav/icons/new.jpg'
            },
            {
                name: 'Best Selling Icons',
                href: '#',
                imageSrc: '/nav/icons/bestsellers.jpg'
            }
        ]
    }
]
