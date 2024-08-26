import { FC } from "react";
import { MenuItemProps } from "../StyledMenu/StyledMenu.types";

export interface ColorsProps {
    PURPLE: 'purple',
    WHITE: 'white',
}

export type ColorProps = ValueOf<ColorsProps>

export type SnetSvgLogo = {
    [key in ColorProps]: string;
};

export interface NavItemProps {
    title: string;
    link?: string;
    isActive?: boolean;
    openInNewTab?: boolean;
}

export interface DropdownNavItemProps {
    label: string;
    list: MenuItemProps[]
}

export interface HeaderActionsProps {
    isLoggedIn: boolean;
    LoggedInActions: FC;
    LoggedOutActions: FC;    
}

export interface NavBarProps {
    navbarItems: NavItemProps[];
    dropdown: DropdownNavItemProps[];
}

export interface MobileHeaderProps extends HeaderActionsProps {
    mobileNavLinks: NavItemProps[];
    mobileDropDown?: DropdownNavItemProps[];
    color: ColorProps;
}

export interface LogoProps {
    portalName: string;
    onLogoClick: () => void;
    color: ColorProps
}

export interface SNETHeaderProps extends MobileHeaderProps, NavBarProps, LogoProps {
    isMobileHeaderVisible: boolean,
};