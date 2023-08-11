import { classNames } from 'shared/lib/classNames/className';
import { Link, LinkProps } from 'react-router-dom';
import { FC } from 'react';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
}

const AppLink: FC<AppLinkProps> = (props) => {
    const {
        to, className, children, theme = AppLinkTheme.PRIMARY, ...otherProps
    } = props;
    return (
        <Link
            to={to}
            className={classNames(cls.navbar, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};

export default AppLink;
