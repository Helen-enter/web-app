import { classNames } from 'shared/lib/classNames/className';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'shared/ui/ThemeSwither';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

const Navbar = ({ className }: NavbarProps) => (
    <div className={classNames(cls.navbar, {}, [])}>
        <div className={cls.links}>
            <AppLink theme={AppLinkTheme.SECONDARY} to="/" className={cls.mainLink}>Главная</AppLink>
            <AppLink theme={AppLinkTheme.SECONDARY} to="/about">О сайте</AppLink>
        </div>
    </div>
);

export default Navbar;
