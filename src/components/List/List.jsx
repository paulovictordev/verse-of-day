import React from 'react';
import "./styles.css";

import Loading from "../Loading";

import { useLoadingContext } from "../../contexts/LoadingContext";
import { useRandomVersesContext } from "../../contexts/RandomVersesContext";

const ListItem = React.memo(({ children }) => (
    <li className="item-wrapper">{children}</li>
));

const List = () => {
    const { showLoading } = useLoadingContext();
    const { randomVerses } = useRandomVersesContext();

    const { book, chapter, number, text } = randomVerses;

    return (
        <ul className="wrapper">
            {showLoading && (
                <div className="loading-container ">
                    <Loading />
                </div>)}
            {randomVerses &&
                (<ListItem>
                    <p>{text}</p>
                    <div className="item-wrapper-info">
                        {book && chapter && number &&
                            (<small>{book} {chapter}:{number}</small>)
                        }
                    </div>
                </ListItem>)}
        </ul>
    );
}

export default List;