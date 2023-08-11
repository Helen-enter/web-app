import {FC, useState} from "react";
import {classNames} from "shared/lib/classNames/className";
import cls from "./Sidebar.module.scss";
import {ThemeSwitcher} from "shared/ui/ThemeSwither";
import LangSwitcher from "shared/ui/LangSwitcher/LangSwitcher";

interface SidebarProps {
    className?: string
}

const Sidebar: FC<SidebarProps> = (props) => {
    const[collapsed, setCollapsed] = useState(false)
    
    const onToggle = () => {
      setCollapsed(prev => !prev)
    }

    return (
        <div className={classNames(cls.sidebar, {[cls.collapsed]: collapsed}, [props.className])}>
            <button onClick={onToggle}>toggle</button>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher className={cls.lang}/>
            </div>
        </div>
    )
}

export default Sidebar