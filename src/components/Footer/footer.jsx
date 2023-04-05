import React from 'react';
import email from './image/icons8-mail-48.png';
import style from './footer.module.css';

export default function footer() {
    return (
        <footer className={style.footer}>
            <div className={style.footer_sns}>
                <div className={style.design_by}>
                    luciano ezequiel diaz ocampo
                </div>
                <div className={style.sns_links}>
                    <a
                        href="https://www.linkedin.com/in/luciano-diaz/"
                        target="blank"
                    >
                        <img
                            className={style.linkedin}
                            align="center"
                            src="https://www.vectorlogo.zone/logos/linkedin/linkedin-icon.svg"
                            alt="https://www.linkedin.com/in/luciano-diaz/"
                            // height="30px"
                            // width="40px"
                        />
                    </a>
                    <a href="https://github.com/LuchoD99" target="blank">
                        <img
                            className={style.github}
                            align="center"
                            src="https://cdn.jsdelivr.net/npm/simple-icons@7.9.0/icons/github.svg"
                            alt="https://github.com/LuchoD99"
                            // height="30px"
                            // width="40px"
                        />
                    </a>
                    <a
                        target="_blank"
                        href="mailto:luciano.diazocampo@gmai.com"
                    >
                        <img
                            className={style.email}
                            src={email}
                            alt="img not found"
                        />
                    </a>
                </div>
            </div>
        </footer>
    );
}
