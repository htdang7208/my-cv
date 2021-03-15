import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhoneAlt,
  faEnvelopeOpen,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';
import me from '../../assets/me.jpg';

export default function Profile(props) {
  return (
    <div className={props.className}>
      <div>
        <div className="profile-padding-top"></div>
        <div className="profile">
          <div className="avatar">
            <img src={me} alt="htd" />
          </div>
          <h1>HUYNH THANH DANG</h1>
          <p>FRONTEND FRESHER</p>
          <div className="profile-contact">
            <div>
              <FontAwesomeIcon icon={faPhoneAlt} />
              <p>032.759.0960</p>
            </div>
            <div>
              <FontAwesomeIcon icon={faEnvelopeOpen} />
              <p>htdang7096@gmail.com</p>
            </div>
            <div>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <p>Rach Gia City, Kien Giang Province</p>
            </div>
          </div>
        </div>
        <div className="profile-triangle-bottom"></div>
      </div>
      <div className="profile-padding-bottom"></div>
    </div>
  );
}
