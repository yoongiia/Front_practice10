import React from 'react';
import './logo.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { connect } from 'react-redux';


const Logo = ({srcLogo}) => {

    return (
        <div>
            <Link href={"http://localhost:3000/"}>
            <Image className='image' src={srcLogo} width={40} height={40} priority={true} alt='logo'/>
            </Link>
        </div>
    );
}

const mapStateToProps = (state) => ({
    srcLogo: state.logo.src,
});

export default connect(mapStateToProps)(Logo);
