import { useState } from 'react';

const Test1 = () => {
    const [color, setColor] = useState('tomato');

    const changeColor1 = () => {
        if (color === 'tomato') {
            setColor('skyblue');
        } else {
            setColor('tomato');
        }
    };
    const changeColor2 = () => {
        setColor(color === 'tomato' ? 'skyblue' : 'tomato');
    };

    return (
        <div>
            <h2 style={{ fontSize: 30, fontWeight: 700 }}>배경색: tomato에서 skyblue로 바꾸기</h2>
            <div
                style={{
                    width: 400,
                    height: 100,
                    border: '1px solid black',
                    fontSize: 30,
                    fontWeight: 700,
                    textAlign: 'center',
                    lineHeight: '100px',
                    margin: '20px auto',
                    background: color,
                }}
            >
                컬러:{color}
            </div>

            <p style={{ textAlign: 'center' }}>
                <button onClick={changeColor1}>if문</button>
                <button onClick={changeColor2}>삼항연산자</button>
            </p>
        </div>
    );
};

export default Test1;
