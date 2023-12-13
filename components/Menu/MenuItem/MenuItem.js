import Link from 'next/link';
import React from 'react';


const MenuItem = ({text, url}) => {
  const isOpenInNewTab = (url) => typeof  window !== 'undefined' && !url.includes(window.location.hostname);

  if (url) {
    const target = isOpenInNewTab(url) ? "_blank" : "_self"
    return <li><Link href={url} target={target} style={{textDecoration: "none", color: 'rgb(243,243,243)', fontSize: "17px"}}>{text}</Link></li>
  }
  else {
    return (
      <li><span >{text}</span></li>
    );
  }
}

export default MenuItem;
