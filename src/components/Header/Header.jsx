import React, {useEffect} from 'react';
import Button from "../Button/Button";
import './Header.css';

const Header = () => {
    const tg = window.Telegram.WebApp;
    const onClose = () => {
        tg.close();
    }

    useEffect(()=> {
        tg.ready();
    }, [])

    return (
        <div className={'header'}>
            <Button onClick={onClose}>Закрыть</Button>
            <span className={'username'}>
                {tg.initDataUnsafe?.user?.username}
            </span>
        </div>
    );
};

export default Header;