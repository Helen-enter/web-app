import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import Loader from 'shared/ui/Loader/Loader';
import cls from './PageLoader.module.scss';

interface PageLoaderProps {
    className?: string;
}

const PageLoader: FC<PageLoaderProps> = ({ className }) => (
    <div className={classNames(cls.page__loader, {}, [])}>
        <Loader />
    </div>
);

export default PageLoader;
