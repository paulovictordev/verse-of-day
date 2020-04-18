import React, { useEffect } from 'react';
import "./styles.css";

import Button from '../Button';

import { useLoadingContext } from '../../contexts/LoadingContext';
import { useRandomVersesContext } from '../../contexts/RandomVersesContext';

import useFetchApi from '../../hooks/useFetchApi';

const Header = () => {
    const { showLoading, setShowLoading } = useLoadingContext();
    const { setRandomVerses } = useRandomVersesContext();
    const { isLoading, data, fetchData } = useFetchApi();

    useEffect(() => {
        setShowLoading(isLoading);
    }, [isLoading, setShowLoading]);

    useEffect(() => {
        setRandomVerses(data);
    }, [data, setRandomVerses]);

    return (
        <header className="wrapper">
            <h1 className="title">Versículo do Dia</h1>    
            <Button
                onClick={fetchData}
                disabled={showLoading}>
                buscar
            </Button>
        </header>
    );
}

export default Header;