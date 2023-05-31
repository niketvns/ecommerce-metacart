import React, { useState } from 'react';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import './backToTop.css'

const BackToTop = () => {
    const [goToTop, setGoToTop] = useState(false)

    const scrollToTop = () =>{
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setGoToTop(true)
        }
        else if (scrolled <= 300) {
            setGoToTop(false)
        }
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        goToTop &&
        <div
            className='go-to-top'
            onClick={scrollToTop}
        >
            <KeyboardDoubleArrowUpIcon />
        </div>
    )
}

export default BackToTop;