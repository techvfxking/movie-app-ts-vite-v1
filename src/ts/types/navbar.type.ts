export declare type TNavName = "Home" | "Favourite" | "About";

export declare type TNavbar = {
    id: string
    name: TNavName;
    isActive: boolean;
    icon: string;
    isFillIcon: boolean;
};