import { useEffect, useState } from 'react'
import constants from '../constants';

const useIsMobile = () => {
    const { $mobileWidth } = constants;
    const [isMobile, setIsMobile] = useState(window.innerWidth < $mobileWidth);

    useEffect(() => {
        const changeIsMobileHandler = () => {
            return setIsMobile(window.innerWidth < $mobileWidth);
        }

        window.addEventListener('resize', changeIsMobileHandler);

        return () => window.removeEventListener('resize', changeIsMobileHandler);

    }, [])

    return isMobile;
}

export default useIsMobile;