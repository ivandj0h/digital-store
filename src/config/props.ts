import {PRODUCT_CATEGORIES} from "@/config/index";

export type Category = typeof PRODUCT_CATEGORIES[number]

export interface NavItemProps {
    category: Category,
    handleOpen: () => void,
    isOpen: boolean,
    isAnyOpen: boolean,
}
