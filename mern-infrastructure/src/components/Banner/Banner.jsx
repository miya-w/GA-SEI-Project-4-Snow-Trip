import './Banner.css';
import snowFlake from '../images/snow-flake.png'


export default function Banner() {
    return (
            <>
             <p className='snow-banner-kanji absolute'>雪</p>
            <p className='snow-banner-sub absolute'>そんな美しい雪</p>
           
            <div className=' snow-flake-1 absolute'>
                <img src={snowFlake} width={20} height={20} alt='snow' />
            </div>
            <div className=' snow-flake-2 absolute'>
                <img src={snowFlake} width={20} height={20} alt='snow' />
            </div>

            <div className=' snow-flake-3 absolute'>
                <img src={snowFlake} width={20} height={20} alt='snow' />
            </div>

            <div className=' snow-flake-4 absolute'>
                <img src={snowFlake} width={20} height={20} alt='snow' />
            </div>
           
        </>
    )
}