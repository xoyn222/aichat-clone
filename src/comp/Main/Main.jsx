import React, {useContext} from 'react';
import './Main.css';
import {assets} from "../../assets/assets.js";
import {Context} from "../../context/Context.jsx";

const Main = () => {

    const {onSent, recentPrompt, showResult, loading, resultData, setInput, input} = useContext(Context);

    // Обработчик для нажатия клавиши Enter
    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && input.trim()) {
            onSent();
        }
    };

    return (
        <div className='main'>
            <div className='nav'>
                <p>Gemini</p>
                <img src={assets.user_icon} alt=''/>
            </div>
            <div className='main-container'>

                {!showResult
                    ? <>
                        <div className='greet'>
                            <p><span>Hello, Dev.</span></p>
                            <p>How I can help you today?</p>
                        </div>
                        <div className='cards'>
                            <div className='card'>
                                <p>Dolore ipsum do do incididunt dolore ut et magna tempor sed aliqua magna labore</p>
                                <img src={assets.compass_icon} alt=''/>
                            </div>
                            <div className='card'>
                                <p>Magna ipsum consectetur do et labore dolore eiusmod lorem sit aliqua incididunt
                                    et.</p>
                                <img src={assets.bulb_icon} alt=''/>
                            </div>
                            <div className='card'>
                                <p>Ipsum aliqua et amet et amet eiusmod sit incididunt dolore adipiscing</p>
                                <img src={assets.message_icon} alt=''/>
                            </div>
                            <div className='card'>
                                <p>Tempor et adipiscing magna do ut</p>
                                <img src={assets.code_icon} alt=''/>
                            </div>
                        </div>
                    </>
                    : <div className='result'>
                        <div className='result-title'>
                            <img src={assets.user_icon} alt=''/>
                            <p>{recentPrompt}</p>
                        </div>
                        <div className='result-data'>
                            <img src={assets.gemini_icon} alt=''/>
                            {loading
                                ? <div className='loader'>
                                    <hr/>
                                    <hr/>
                                    <hr/>
                                </div>
                                : <p dangerouslySetInnerHTML={{__html: resultData}}></p>
                            }
                        </div>
                    </div>
                }

                <div className='main-bottom'>
                    <div className='search-box'>
                        {/* Добавляем onKeyDown для отслеживания нажатия клавиш */}
                        <input
                            onChange={(e) => setInput(e.target.value)}
                            value={input}
                            type='text'
                            placeholder='Enter a prompt here'
                            onKeyDown={handleKeyDown} // Обработчик для нажатия клавиш
                        />
                        <div>
                            <img src={assets.gallery_icon} alt=''/>
                            <img src={assets.mic_icon} alt=''/>
                            {input ? <img onClick={() => onSent()} src={assets.send_icon} alt='' /> : null}
                        </div>
                    </div>
                    <p className='bottom-info'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Main;
