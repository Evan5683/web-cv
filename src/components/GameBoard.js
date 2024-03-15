import React, { useEffect, useState, useRef } from 'react';

import Card from './Card';
import "../styles/Gameboard.css";

const icons = ['face', 'favorite', 'home', 'info', 'lock', 'mail', 'pan_tool', 'shopping_cart'];

const initialCards = icons.flatMap((icon, index) => [
    { id: index * 2, value: icon, isFlipped: false, isMatched: false },
    { id: index * 2 + 1, value: icon, isFlipped: false, isMatched: false }
]);

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const shuffledCards = shuffle([...initialCards]);



function GameBoard() {
    const [cards, setCards] = useState(shuffledCards);
    const [flippedCards, setFlippedCards] = useState([]);

    // const timerRef = useRef(null);

    // useEffect(() => {
    //     timerRef.current = setInterval(() => {
    //         setTime(prevTime => prevTime + 1);
    //     }, 1000);

    //     return () => clearInterval(timerRef.current); // 清除计时器以防止内存泄漏
    // }, []);

    // // 在所有卡片都匹配时停止计时器
    // useEffect(() => {
    //     const allMatched = cards.every(card => card.isMatched);
    //     if (allMatched) {
    //         clearInterval(timerRef.current);
    //     }
    // }, [cards]);

    const handleFlip = (card) => {
        const newCards = cards.map(c => {
            if (c.id === card.id) {
                return { ...c, isFlipped: true };
            }
            return c;
        });

        setCards(newCards);
        setFlippedCards([...flippedCards, card]);

        if (flippedCards.length === 1) {
            if (card.value === flippedCards[0].value && card.id !== flippedCards[0].id) {
                // Matched
                setFlippedCards([]);
            } else {
                // Not a match, flip back after a delay
                setTimeout(() => {
                    const resetCards = newCards.map(c => {
                        if (c.id === card.id || c.id === flippedCards[0].id) {
                            return { ...c, isFlipped: false };
                        }
                        return c;
                    });
                    setCards(resetCards);
                    setFlippedCards([]);
                }, 1000);
            }
        }
    };

    return (
        <div className="game-board">
            {cards.map(card => (
                <Card key={card.id} card={card} onFlip={handleFlip} />
            ))}
        </div>
    );
}

export default GameBoard;
