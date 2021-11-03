import React, {useState} from 'react'
export default function Profile({profile, linkedinUrl, githubUrl, twitterUrl}) {
    return (

        <div class="col-lg-4 col-sm-6 col-12">
            <div class="card card-4 card-5 text-center---">
                <div class="product-img">
                    <a href="javascript:void(0)"><img
                        src={(profile.imagePortraitUrl ? profile.imagePortraitUrl : 'http://via.placeholder.com/540x720')}
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "http://via.placeholder.com/540x720"
                        }} alt={profile.imagePortraitUrl}/></a>
                </div>
                <div class="product-info-bottom">
                    <div class="user-info">
                        <div class="name">{profile.name}</div>
                        <div class="office">Office: {profile.office}</div>
                    </div>
                    <div class="social-links">
                        <ul>
                            {profile.linkedIn !== null ? (<li>
                                <a href={linkedinUrl + profile.linkedIn} target="_blank" rel="noreferrer noopener">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                            </li>) : ''
                            }

                            {profile.gitHub !== null ? (<li>
                                <a href={githubUrl + profile.gitHub} target="_blank" rel="noreferrer noopener"><i
                                    className="fab fa-github"></i></a>
                            </li>) : ''
                            }

                            {profile.twitter !== null ? (<li>
                                <a href={twitterUrl + profile.twitter} target="_blank" rel="noreferrer noopener">
                                    <i className="fab fa-twitter"></i>
                                </a>
                            </li>) : ''
                            }

                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
}
