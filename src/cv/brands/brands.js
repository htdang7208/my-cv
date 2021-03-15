/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faGithub,
  faSkype,
} from '@fortawesome/free-brands-svg-icons';

export default function Brands() {
  return (
    <div className="brands">
      <a href="https://join.skype.com/invite/YpzugPPDsa1v" target="_blank">
        <FontAwesomeIcon icon={faSkype} />
      </a>
      <a href="https://www.facebook.com/htdang77" target="_blank">
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      <a href="https://github.com/htdang7208" target="_blank">
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </div>
  );
}
