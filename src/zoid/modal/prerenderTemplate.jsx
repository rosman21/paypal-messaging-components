/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/style-prop-object */
/* eslint-disable react/no-unknown-property */
/** @jsx node */
import { node, dom } from 'jsx-pragmatic/src';
import { Spinner } from '@paypal/common-components';
import { ZalgoPromise } from 'zalgo-promise/src';
import { globalEvent } from '../../utils';

export default ({ doc, props, state }) => {
    const ERROR_DELAY = 15000;
    const prerenderFrameWrapper = state.prerenderDetails.prerenderElement;
    const styles = `
        @font-face {
            font-family: 'PayPalSansBig';
            font-weight: 600;
            src: url(https://www.paypalobjects.com/webstatic/mktg/2014design/font/PP-Sans/PayPalSansBig-Medium.eot);
            src: url(https://www.paypalobjects.com/webstatic/mktg/2014design/font/PP-Sans/PayPalSansBig-Medium.eot?#iefix)
                    format('embedded-opentype'),
                url(https://www.paypalobjects.com/webstatic/mktg/2014design/font/PP-Sans/PayPalSansBig-Medium.woff)
                    format('woff'),
                url(https://www.paypalobjects.com/webstatic/mktg/2014design/font/headlinedark/festivo1.ttf) format('truetype'),
                url(https://www.paypalobjects.com/webstatic/mktg/2014design/font/PP-Sans/PayPalSansBig-Medium.svg) format('svg');
        }
        
        @font-face {
            font-family: 'PayPalSansBig';
            font-weight: 200;
            src: url(https://www.paypalobjects.com/webstatic/mktg/2014design/font/PP-Sans/PayPalSansBig-Light.eot);
            src: url(https://www.paypalobjects.com/webstatic/mktg/2014design/font/PP-Sans/PayPalSansBig-Light.eot?#iefix)
                    format('embedded-opentype'),
                url(https://www.paypalobjects.com/webstatic/mktg/2014design/font/PP-Sans/PayPalSansBig-Light.woff)
                    format('woff'),
                url(https://www.paypalobjects.com/webstatic/mktg/2014design/font/headlinedark/festivo1.ttf) format('truetype'),
                url(https://www.paypalobjects.com/webstatic/mktg/2014design/font/PP-Sans/PayPalSansBig-Light.svg) format('svg');
        }
        
        @font-face {
            font-family: 'PayPalSansSmall';
            font-weight: 400;
            src: url(https://www.paypalobjects.com/webstatic/mktg/2014design/font/PP-Sans/PayPalSansSmall-Regular.eot);
            src: url(https://www.paypalobjects.com/webstatic/mktg/2014design/font/PP-Sans/PayPalSansSmall-Regular.eot?#iefix)
                    format('embedded-opentype'),
                url(https://www.paypalobjects.com/webstatic/mktg/2014design/font/PP-Sans/PayPalSansSmall-Regular.woff)
                    format('woff'),
                url(https://www.paypalobjects.com/webstatic/mktg/2014design/font/headlinedark/festivo1.ttf) format('truetype'),
                url(https://www.paypalobjects.com/webstatic/mktg/2014design/font/PP-Sans/PayPalSansSmall-Regular.svg)
                    format('svg');
        }
        
        @font-face {
            font-family: 'PayPalSansSmall';
            font-weight: 600;
            src: url(https://www.paypalobjects.com/webstatic/mktg/2014design/font/PP-Sans/PayPalSansSmall-Medium.eot);
            src: url(https://www.paypalobjects.com/webstatic/mktg/2014design/font/PP-Sans/PayPalSansSmall-Medium.eot?#iefix)
                    format('embedded-opentype'),
                url(https://www.paypalobjects.com/webstatic/mktg/2014design/font/PP-Sans/PayPalSansSmall-Medium.woff)
                    format('woff'),
                url(https://www.paypalobjects.com/webstatic/mktg/2014design/font/headlinedark/festivo1.ttf) format('truetype'),
                url(https://www.paypalobjects.com/webstatic/mktg/2014design/font/PP-Sans/PayPalSansSmall-Medium.svg)
                    format('svg');
        }
        html {
            color: #2d2d2d;
            font-family: PayPal-Sans, Helvetica, Arial, sans-serif;
            font-size: 14px;
            font-weight: 400;
        }
        .modal{
            overflow-y: scroll;
        }
        .overlay{
            position: fixed;
            left: 0;
            top: 0;
            width: 100%; 
            height: 100%;
        }
        .modal-content {
            position: relative;
            background-color: #fefefe;
            margin: auto;
            border: 1px solid #888;
            max-width: 640px;
            height: 100%;
            border-top-right-radius: 10px;
            border-top-left-radius: 10px;
            box-shadow: 0 5px 15px 0 rgb(0 0 0 / 50%);
            transition: transform 350ms ease, box-shadow 350ms ease;
            transform: translateY(100%);
        }
        .show-modal{
            transform: translateY(0);
        }
        .spinner{
            position: relative !important;
        }
        .close-button > button {
            background-image: url("data:image/svg+xml,%3Csvg width='36' height='36' viewBox='0 0 36 36' fill='transparent' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 0L0 12' transform='translate(12 12)' stroke='%232C2E2F' stroke-width='2' stroke-linecap='round'/%3E%3Cpath d='M0 0L12 12' transform='translate(12 12)' stroke='%232C2E2F' stroke-width='2' stroke-linecap='round' /%3E%3C/svg%3E");
            width: 38px;
            height: 38px;
            display: block;
            padding: 0;
            border: none;
            cursor: pointer;
            position: absolute;
            top: 12px;
            z-index: 50;
            right: 10px;
        }

        .error{
            width: 200px;
            height: 100px;
            position: absolute;
            top: 67%;
            left: 50%;
            margin-left: -60px;
        }

        @media (max-width: 639px), (max-height: 539px){
            .modal{
                overflow-y: hidden;
            }
            .modal-content {
                margin-top: 84px;
                height: calc(100% - 84px);
                
            }
        }
        
    `;

    globalEvent.on('show-prerender-modal', () => {
        prerenderFrameWrapper.classList.remove(state.prerenderDetails.classes.INVISIBLE);
        prerenderFrameWrapper.classList.add(state.prerenderDetails.classes.VISIBLE);
        prerenderFrameWrapper.contentDocument.getElementsByClassName('modal-content')[0].classList.add('show-modal');
        prerenderFrameWrapper.contentDocument.getElementsByClassName('overlay')[0].style.opacity = 1;
        globalEvent.trigger('show-modal-transition');
    });

    globalEvent.on('hide-prerender-modal', () => {
        prerenderFrameWrapper.classList.remove(state.prerenderDetails.classes.VISIBLE);
        prerenderFrameWrapper.classList.add(state.prerenderDetails.classes.INVISIBLE);
        prerenderFrameWrapper.contentDocument.getElementsByClassName('modal-content')[0].classList.remove('show-modal');
        prerenderFrameWrapper.contentDocument.getElementsByClassName('overlay')[0].style.opacity = 0;
        globalEvent.trigger('hide-modal-transition');
        state.hide();
    });
    const toggleShow = boolean => {
        if (boolean) {
            globalEvent.trigger('show-prerender-modal');
            return;
        }
        globalEvent.trigger('hide-prerender-modal');
    };
    const checkForErrors = () => {
        ZalgoPromise.delay(ERROR_DELAY).then(() => {
            // check to see if modal content class exists
            if (prerenderFrameWrapper !== null) {
                // looks like there is an error if modal content class does not exist.
                // assign variable to state and access in UI
                prerenderFrameWrapper.contentDocument.getElementsByClassName('error')[0].style.display = 'block';
                prerenderFrameWrapper.contentDocument.getElementsByClassName('error')[0].textContent =
                    'Error loading Modal';
            }
        });
    };

    const handleEscapeKeyPress = evt => {
        console.log(evt);
    };

    // no way to check if prerenderer is fully loaded so wait 100ms before attempting to see if the elements exist. This timeout only happens on first render
    setTimeout(() => {
        toggleShow(true);
    }, 300);
    return (
        <html lang="en">
            <head>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </head>
            <style>{styles}</style>
            <body onRender={checkForErrors}>
                <div class="modal">
                    <div class="overlay" onClick={() => toggleShow(false)} onKeyDown={handleEscapeKeyPress} />
                    <div class="top-overlay" />
                    <div class="modal-content">
                        <div class="close-button">
                            <button onClick={() => toggleShow(false)} type="button" />
                        </div>
                        <div class="error" style="display: none"></div>
                        <Spinner nonce={props.nonce} />
                    </div>
                </div>
            </body>
        </html>
    ).render(dom({ doc }));
};
