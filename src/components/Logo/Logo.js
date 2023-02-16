// material-ui
// import { useTheme } from '@mui/material/styles';
import logoImage from 'assets/images/logo/logo2.png';

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
 * import logo from 'assets/images/logo.svg';
 *
 */

// ==============================|| LOGO SVG ||============================== //

const Logo = () => {
    // const theme = useTheme();

    return (
        /**
         * if you want to use image instead of svg uncomment following, and comment out <svg> element.
         *
         * <img src={logo} alt="Mantis" width="100" />
         *
         */
        <>
            {/* <h1>S2</h1> */}
            <img src={logoImage} alt="" width={70} />
        </>
    );
};

export default Logo;
