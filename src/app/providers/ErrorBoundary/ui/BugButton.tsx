import Button from 'shared/ui/Button/Button';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export const BugButton = () => {
    const [error, setError] = useState(false);

    const onThrow = () => setError(true);

    const { t } = useTranslation();

    useEffect(() => {
        // try {
        if (error) {
            throw new Error();
        }
        // } catch (error) {
        //     console.log('error', error);
        // }
    }, [error]);

    return (
        <Button onClick={onThrow}>{t('throw error')}</Button>
    );
};
