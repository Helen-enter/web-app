import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/className';
import LightIcon from 'shared/assets/icons/contrast.png';
import DarkIcon from 'shared/assets/icons/half-moon.png';
import Button, { ThemeButton } from 'shared/ui/Button/Button';
import cls from './ThemeSwither.module.scss';

interface ThemeSwitcherProps {
    className?: string
}

const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();
    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames(cls.themeSwitcher, {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK ? <img alt="darkTheme" src={DarkIcon} /> : <img alt="lightTheme" src={LightIcon} />}
        </Button>
    );
};

export default ThemeSwitcher;
