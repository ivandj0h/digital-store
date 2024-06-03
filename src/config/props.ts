import {PRODUCT_CATEGORIES} from "@/config/index";
import {InitOptions} from "payload/config";

export type Category = typeof PRODUCT_CATEGORIES[number]

export interface NavItemProps {
    category: Category,
    handleOpen: () => void,
    isOpen: boolean,
    isAnyOpen: boolean,
}

export interface Args {
    initOptions?: Partial<InitOptions>;
}
