import { VlElement, define } from '/node_modules/vl-ui-core/vl-core.js';
import '/node_modules/vl-ui-icon/vl-icon.js';

/**
 * VlAlert
 * @class
 * @classdesc Gebruik de vl-alert om de gebruiker te informeren over belangrijke informatie.
 * 
 * @extends VlElement
 * 
 * @property {string} title - Attribuut wordt gebruikt als titel van de waarschuwing.
 * @property {boolean} closable - Attribuut wordt gebruikt om de optie toe te voegen om de waarschuwing te sluiten door op het sluit icoon te klikken in de rechterbovenhoek..
 * @property {(small | large)} size - Attribuut activeert een variant van de waarschuwing maar kleiner.
 * @property {(success | warning | error)} type - Attribuut bepaalt de soort van waarschuwing, foutmelding, probleemmelding of succesmelding.
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-alert/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-alert/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-alert.html|Demo}
 */
export class VlAlert extends VlElement(HTMLElement) {
    constructor() {
        super(`
            <style>
.vl-vi::before, .vl-vi::after {
  font-family: "vlaanderen-icon" !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-style: normal;
  font-variant: normal;
  font-weight: normal;
  text-decoration: none;
  text-transform: none;
  display: inline-block; }
.vl-vi.vl-vi-u-180deg::before {
  display: inline-block;
  transform: rotate(180deg); }

.vl-vi-u-xs::before {
  font-size: 0.8rem; }

.vl-vi-u-s::before {
  font-size: 1.3rem; }

.vl-vi-u-m::before {
  font-size: 1.7rem; }

.vl-vi-u-l::before {
  font-size: 2rem; }

.vl-vi-u-xl::before {
  font-size: 2.2rem; }

.vl-vi-u-90deg::before {
  display: inline-block;
  transform: rotate(90deg); }

.vl-vi-u-180deg::before {
  display: inline-block;
  transform: rotate(180deg); }

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline; }

strong {
  font-weight: 500; }

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
  display: block; }

body {
  line-height: 1; }

ol, ul {
  list-style: none; }

blockquote, q {
  quotes: none; }

blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none; }

table {
  border-collapse: collapse;
  border-spacing: 0; }

button {
  background: transparent; }

img {
  max-width: 100%; }

:-moz-submit-invalid {
  box-shadow: none; }

:-moz-ui-invalid {
  box-shadow: none; }

* {
  box-sizing: border-box; }
  *::before, *::after {
    box-sizing: inherit; }

html {
  min-height: 100%;
  font-family: flanders-sans, sans-serif;
  font-size: 62.5%; }

body {
  width: 100%;
  min-height: 100%;
  background: #fff;
  color: #333332;
  font-size: 1.6rem;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: none; }
  @media screen and (max-width: 767px) {
    body {
      font-size: 1.5rem;
      line-height: 1.33; } }
  body::before {
    display: none;
    content: "large"; }
    @media screen and (max-width: 1023px) {
      body::before {
        content: "medium"; } }
    @media screen and (min-width: 767.1px) {
      body::before {
        content: "medium-up"; } }
    @media screen and (max-width: 767px) {
      body::before {
        content: "small"; } }
    @media screen and (max-width: 500px) {
      body::before {
        content: "xsmall"; } }
    @media screen and (min-width: 1600.1px) {
      body::before {
        content: "xlarge"; } }

@font-face {
  font-family: "flanders-sans";
  src: url("https://d1l6j3bn1os9t0.cloudfront.net/3.latest/fonts/flanders/flanders-sans-light.woff2") format("woff2"), url("https://d1l6j3bn1os9t0.cloudfront.net/3.latest/fonts/flanders/flanders-sans-light.woff") format("woff");
  font-weight: 300;
  font-style: normal; }
@font-face {
  font-family: "flanders-sans";
  src: url("https://d1l6j3bn1os9t0.cloudfront.net/3.latest/fonts/flanders/flanders-sans-regular.woff2") format("woff2"), url("https://d1l6j3bn1os9t0.cloudfront.net/3.latest/fonts/flanders/flanders-sans-regular.woff") format("woff");
  font-weight: 400;
  font-style: normal; }
@font-face {
  font-family: "flanders-sans";
  src: url("https://d1l6j3bn1os9t0.cloudfront.net/3.latest/fonts/flanders/flanders-sans-medium.woff2") format("woff2"), url("https://d1l6j3bn1os9t0.cloudfront.net/3.latest/fonts/flanders/flanders-sans-medium.woff") format("woff");
  font-weight: 500;
  font-style: normal; }
@font-face {
  font-family: "flanders-sans";
  src: url("https://d1l6j3bn1os9t0.cloudfront.net/3.latest/fonts/flanders/flanders-sans-bold.woff2") format("woff2"), url("https://d1l6j3bn1os9t0.cloudfront.net/3.latest/fonts/flanders/flanders-sans-bold.woff") format("woff");
  font-weight: 700;
  font-style: normal; }
@font-face {
  font-family: "flanders-serif";
  src: url("https://d1l6j3bn1os9t0.cloudfront.net/3.latest/fonts/flanders/flanders-serif-light.woff2") format("woff2"), url("https://d1l6j3bn1os9t0.cloudfront.net/3.latest/fonts/flanders/flanders-serif-light.woff") format("woff");
  font-weight: 300;
  font-style: normal; }
@font-face {
  font-family: "flanders-serif";
  src: url("https://d1l6j3bn1os9t0.cloudfront.net/3.latest/fonts/flanders/flanders-serif-regular.woff2") format("woff2"), url("https://d1l6j3bn1os9t0.cloudfront.net/3.latest/fonts/flanders/flanders-serif-regular.woff") format("woff");
  font-weight: 400;
  font-style: normal; }
@font-face {
  font-family: "flanders-serif";
  src: url("https://d1l6j3bn1os9t0.cloudfront.net/3.latest/fonts/flanders/flanders-serif-medium.woff2") format("woff2"), url("https://d1l6j3bn1os9t0.cloudfront.net/3.latest/fonts/flanders/flanders-serif-medium.woff") format("woff");
  font-weight: 500;
  font-style: normal; }
@font-face {
  font-family: "flanders-serif";
  src: url("https://d1l6j3bn1os9t0.cloudfront.net/3.latest/fonts/flanders/flanders-serif-bold.woff2") format("woff2"), url("https://d1l6j3bn1os9t0.cloudfront.net/3.latest/fonts/flanders/flanders-serif-bold.woff") format("woff");
  font-weight: 700;
  font-style: normal; }
@font-face {
  font-family: "vlaanderen-icon";
  src: url("/font/vlaanderen-icon.woff2") format("woff2"), url("/font/vlaanderen-icon.woff") format("woff");
  font-weight: normal;
  font-style: normal; }
.vl-vi-add::before {
  content: "\f101"; }

.vl-vi-add--after::after {
  content: "\f101"; }

.vl-vi-addressbook::before {
  content: "\f102"; }

.vl-vi-addressbook--after::after {
  content: "\f102"; }

.vl-vi-airplane::before {
  content: "\f103"; }

.vl-vi-airplane--after::after {
  content: "\f103"; }

.vl-vi-alarm-silent::before {
  content: "\f104"; }

.vl-vi-alarm-silent--after::after {
  content: "\f104"; }

.vl-vi-alarm::before {
  content: "\f105"; }

.vl-vi-alarm--after::after {
  content: "\f105"; }

.vl-vi-alert-circle-filled::before {
  content: "\f106"; }

.vl-vi-alert-circle-filled--after::after {
  content: "\f106"; }

.vl-vi-alert-circle::before {
  content: "\f107"; }

.vl-vi-alert-circle--after::after {
  content: "\f107"; }

.vl-vi-alert-small::before {
  content: "\f108"; }

.vl-vi-alert-small--after::after {
  content: "\f108"; }

.vl-vi-alert-triangle-filled::before {
  content: "\f109"; }

.vl-vi-alert-triangle-filled--after::after {
  content: "\f109"; }

.vl-vi-alert-triangle::before {
  content: "\f10a"; }

.vl-vi-alert-triangle--after::after {
  content: "\f10a"; }

.vl-vi-align-center::before {
  content: "\f10b"; }

.vl-vi-align-center--after::after {
  content: "\f10b"; }

.vl-vi-align-justify::before {
  content: "\f10c"; }

.vl-vi-align-justify--after::after {
  content: "\f10c"; }

.vl-vi-align-left::before {
  content: "\f10d"; }

.vl-vi-align-left--after::after {
  content: "\f10d"; }

.vl-vi-align-right::before {
  content: "\f10e"; }

.vl-vi-align-right--after::after {
  content: "\f10e"; }

.vl-vi-area::before {
  content: "\f10f"; }

.vl-vi-area--after::after {
  content: "\f10f"; }

.vl-vi-arrange-1-to-9::before {
  content: "\f110"; }

.vl-vi-arrange-1-to-9--after::after {
  content: "\f110"; }

.vl-vi-arrange-9-to-1::before {
  content: "\f111"; }

.vl-vi-arrange-9-to-1--after::after {
  content: "\f111"; }

.vl-vi-arrange-a-to-z::before {
  content: "\f112"; }

.vl-vi-arrange-a-to-z--after::after {
  content: "\f112"; }

.vl-vi-arrange-z-to-a::before {
  content: "\f113"; }

.vl-vi-arrange-z-to-a--after::after {
  content: "\f113"; }

.vl-vi-arrow-bottom::before {
  content: "\f114"; }

.vl-vi-arrow-bottom--after::after {
  content: "\f114"; }

.vl-vi-arrow-down-fat::before {
  content: "\f115"; }

.vl-vi-arrow-down-fat--after::after {
  content: "\f115"; }

.vl-vi-arrow-down-thin::before {
  content: "\f116"; }

.vl-vi-arrow-down-thin--after::after {
  content: "\f116"; }

.vl-vi-arrow-down::before {
  content: "\f117"; }

.vl-vi-arrow-down--after::after {
  content: "\f117"; }

.vl-vi-arrow-freemove::before {
  content: "\f118"; }

.vl-vi-arrow-freemove--after::after {
  content: "\f118"; }

.vl-vi-arrow-left-fat::before {
  content: "\f119"; }

.vl-vi-arrow-left-fat--after::after {
  content: "\f119"; }

.vl-vi-arrow-left-thin::before {
  content: "\f11a"; }

.vl-vi-arrow-left-thin--after::after {
  content: "\f11a"; }

.vl-vi-arrow-left::before {
  content: "\f11b"; }

.vl-vi-arrow-left--after::after {
  content: "\f11b"; }

.vl-vi-arrow-right-fat::before {
  content: "\f11c"; }

.vl-vi-arrow-right-fat--after::after {
  content: "\f11c"; }

.vl-vi-arrow-right-thin::before {
  content: "\f11d"; }

.vl-vi-arrow-right-thin--after::after {
  content: "\f11d"; }

.vl-vi-arrow-right::before {
  content: "\f11e"; }

.vl-vi-arrow-right--after::after {
  content: "\f11e"; }

.vl-vi-arrow-thin::before {
  content: "\f11f"; }

.vl-vi-arrow-thin--after::after {
  content: "\f11f"; }

.vl-vi-arrow-up-fat::before {
  content: "\f120"; }

.vl-vi-arrow-up-fat--after::after {
  content: "\f120"; }

.vl-vi-arrow-up-thin::before {
  content: "\f121"; }

.vl-vi-arrow-up-thin--after::after {
  content: "\f121"; }

.vl-vi-arrow-up::before {
  content: "\f122"; }

.vl-vi-arrow-up--after::after {
  content: "\f122"; }

.vl-vi-arrow::before {
  content: "\f123"; }

.vl-vi-arrow--after::after {
  content: "\f123"; }

.vl-vi-asterisk::before {
  content: "\f124"; }

.vl-vi-asterisk--after::after {
  content: "\f124"; }

.vl-vi-audio-description::before {
  content: "\f125"; }

.vl-vi-audio-description--after::after {
  content: "\f125"; }

.vl-vi-back::before {
  content: "\f126"; }

.vl-vi-back--after::after {
  content: "\f126"; }

.vl-vi-ban::before {
  content: "\f127"; }

.vl-vi-ban--after::after {
  content: "\f127"; }

.vl-vi-bell::before {
  content: "\f128"; }

.vl-vi-bell--after::after {
  content: "\f128"; }

.vl-vi-bike-closed-criterium::before {
  content: "\f129"; }

.vl-vi-bike-closed-criterium--after::after {
  content: "\f129"; }

.vl-vi-bike-open-criterium::before {
  content: "\f12a"; }

.vl-vi-bike-open-criterium--after::after {
  content: "\f12a"; }

.vl-vi-bike::before {
  content: "\f12b"; }

.vl-vi-bike--after::after {
  content: "\f12b"; }

.vl-vi-bin::before {
  content: "\f12c"; }

.vl-vi-bin--after::after {
  content: "\f12c"; }

.vl-vi-binoculars::before {
  content: "\f12d"; }

.vl-vi-binoculars--after::after {
  content: "\f12d"; }

.vl-vi-boat-ship::before {
  content: "\f12e"; }

.vl-vi-boat-ship--after::after {
  content: "\f12e"; }

.vl-vi-bold::before {
  content: "\f12f"; }

.vl-vi-bold--after::after {
  content: "\f12f"; }

.vl-vi-book::before {
  content: "\f130"; }

.vl-vi-book--after::after {
  content: "\f130"; }

.vl-vi-bookmark-alt-1::before {
  content: "\f131"; }

.vl-vi-bookmark-alt-1--after::after {
  content: "\f131"; }

.vl-vi-bookmark-alt-2::before {
  content: "\f132"; }

.vl-vi-bookmark-alt-2--after::after {
  content: "\f132"; }

.vl-vi-bookmark::before {
  content: "\f133"; }

.vl-vi-bookmark--after::after {
  content: "\f133"; }

.vl-vi-breadcrumb-separator::before {
  content: "\f134"; }

.vl-vi-breadcrumb-separator--after::after {
  content: "\f134"; }

.vl-vi-briefcase::before {
  content: "\f135"; }

.vl-vi-briefcase--after::after {
  content: "\f135"; }

.vl-vi-building::before {
  content: "\f136"; }

.vl-vi-building--after::after {
  content: "\f136"; }

.vl-vi-bullet::before {
  content: "\f137"; }

.vl-vi-bullet--after::after {
  content: "\f137"; }

.vl-vi-burger-alt::before {
  content: "\f138"; }

.vl-vi-burger-alt--after::after {
  content: "\f138"; }

.vl-vi-burger::before {
  content: "\f139"; }

.vl-vi-burger--after::after {
  content: "\f139"; }

.vl-vi-burgerprofiel::before {
  content: "\f13a"; }

.vl-vi-burgerprofiel--after::after {
  content: "\f13a"; }

.vl-vi-bus::before {
  content: "\f13b"; }

.vl-vi-bus--after::after {
  content: "\f13b"; }

.vl-vi-business-graph-bar::before {
  content: "\f13c"; }

.vl-vi-business-graph-bar--after::after {
  content: "\f13c"; }

.vl-vi-business-graph-pie::before {
  content: "\f13d"; }

.vl-vi-business-graph-pie--after::after {
  content: "\f13d"; }

.vl-vi-cake::before {
  content: "\f13e"; }

.vl-vi-cake--after::after {
  content: "\f13e"; }

.vl-vi-calculator::before {
  content: "\f13f"; }

.vl-vi-calculator--after::after {
  content: "\f13f"; }

.vl-vi-calendar-add::before {
  content: "\f140"; }

.vl-vi-calendar-add--after::after {
  content: "\f140"; }

.vl-vi-calendar-check::before {
  content: "\f141"; }

.vl-vi-calendar-check--after::after {
  content: "\f141"; }

.vl-vi-calendar-subtract::before {
  content: "\f142"; }

.vl-vi-calendar-subtract--after::after {
  content: "\f142"; }

.vl-vi-calendar::before {
  content: "\f143"; }

.vl-vi-calendar--after::after {
  content: "\f143"; }

.vl-vi-calendar_check::before {
  content: "\f144"; }

.vl-vi-calendar_check--after::after {
  content: "\f144"; }

.vl-vi-calendar_date::before {
  content: "\f145"; }

.vl-vi-calendar_date--after::after {
  content: "\f145"; }

.vl-vi-camera::before {
  content: "\f146"; }

.vl-vi-camera--after::after {
  content: "\f146"; }

.vl-vi-car::before {
  content: "\f147"; }

.vl-vi-car--after::after {
  content: "\f147"; }

.vl-vi-chat-bubble-square-alt::before {
  content: "\f148"; }

.vl-vi-chat-bubble-square-alt--after::after {
  content: "\f148"; }

.vl-vi-chat-bubble-square::before {
  content: "\f149"; }

.vl-vi-chat-bubble-square--after::after {
  content: "\f149"; }

.vl-vi-chat-help::before {
  content: "\f14a"; }

.vl-vi-chat-help--after::after {
  content: "\f14a"; }

.vl-vi-chat::before {
  content: "\f14b"; }

.vl-vi-chat--after::after {
  content: "\f14b"; }

.vl-vi-check-circle::before {
  content: "\f14c"; }

.vl-vi-check-circle--after::after {
  content: "\f14c"; }

.vl-vi-check-filled::before {
  content: "\f14d"; }

.vl-vi-check-filled--after::after {
  content: "\f14d"; }

.vl-vi-check-small::before {
  content: "\f14e"; }

.vl-vi-check-small--after::after {
  content: "\f14e"; }

.vl-vi-check-thin::before {
  content: "\f14f"; }

.vl-vi-check-thin--after::after {
  content: "\f14f"; }

.vl-vi-check::before {
  content: "\f150"; }

.vl-vi-check--after::after {
  content: "\f150"; }

.vl-vi-child::before {
  content: "\f151"; }

.vl-vi-child--after::after {
  content: "\f151"; }

.vl-vi-clock::before {
  content: "\f152"; }

.vl-vi-clock--after::after {
  content: "\f152"; }

.vl-vi-close-light::before {
  content: "\f153"; }

.vl-vi-close-light--after::after {
  content: "\f153"; }

.vl-vi-close-small::before {
  content: "\f154"; }

.vl-vi-close-small--after::after {
  content: "\f154"; }

.vl-vi-close::before {
  content: "\f155"; }

.vl-vi-close--after::after {
  content: "\f155"; }

.vl-vi-cloud-download::before {
  content: "\f156"; }

.vl-vi-cloud-download--after::after {
  content: "\f156"; }

.vl-vi-cloud-upload::before {
  content: "\f157"; }

.vl-vi-cloud-upload--after::after {
  content: "\f157"; }

.vl-vi-cloud::before {
  content: "\f158"; }

.vl-vi-cloud--after::after {
  content: "\f158"; }

.vl-vi-code-branch::before {
  content: "\f159"; }

.vl-vi-code-branch--after::after {
  content: "\f159"; }

.vl-vi-coffee-cup::before {
  content: "\f15a"; }

.vl-vi-coffee-cup--after::after {
  content: "\f15a"; }

.vl-vi-cog::before {
  content: "\f15b"; }

.vl-vi-cog--after::after {
  content: "\f15b"; }

.vl-vi-compass::before {
  content: "\f15c"; }

.vl-vi-compass--after::after {
  content: "\f15c"; }

.vl-vi-computer-screen::before {
  content: "\f15d"; }

.vl-vi-computer-screen--after::after {
  content: "\f15d"; }

.vl-vi-confluence::before {
  content: "\f15e"; }

.vl-vi-confluence--after::after {
  content: "\f15e"; }

.vl-vi-construction-crane::before {
  content: "\f15f"; }

.vl-vi-construction-crane--after::after {
  content: "\f15f"; }

.vl-vi-construction-shack::before {
  content: "\f160"; }

.vl-vi-construction-shack--after::after {
  content: "\f160"; }

.vl-vi-contacts::before {
  content: "\f161"; }

.vl-vi-contacts--after::after {
  content: "\f161"; }

.vl-vi-content-book-favorite-star::before {
  content: "\f162"; }

.vl-vi-content-book-favorite-star--after::after {
  content: "\f162"; }

.vl-vi-content-book::before {
  content: "\f163"; }

.vl-vi-content-book--after::after {
  content: "\f163"; }

.vl-vi-content-box::before {
  content: "\f164"; }

.vl-vi-content-box--after::after {
  content: "\f164"; }

.vl-vi-content-filter::before {
  content: "\f165"; }

.vl-vi-content-filter--after::after {
  content: "\f165"; }

.vl-vi-content-note::before {
  content: "\f166"; }

.vl-vi-content-note--after::after {
  content: "\f166"; }

.vl-vi-content-view-column::before {
  content: "\f167"; }

.vl-vi-content-view-column--after::after {
  content: "\f167"; }

.vl-vi-contract::before {
  content: "\f168"; }

.vl-vi-contract--after::after {
  content: "\f168"; }

.vl-vi-control-cross-over::before {
  content: "\f169"; }

.vl-vi-control-cross-over--after::after {
  content: "\f169"; }

.vl-vi-copy-paste::before {
  content: "\f16a"; }

.vl-vi-copy-paste--after::after {
  content: "\f16a"; }

.vl-vi-copyright::before {
  content: "\f16b"; }

.vl-vi-copyright--after::after {
  content: "\f16b"; }

.vl-vi-credit-card::before {
  content: "\f16c"; }

.vl-vi-credit-card--after::after {
  content: "\f16c"; }

.vl-vi-crop::before {
  content: "\f16d"; }

.vl-vi-crop--after::after {
  content: "\f16d"; }

.vl-vi-cross-thin::before {
  content: "\f16e"; }

.vl-vi-cross-thin--after::after {
  content: "\f16e"; }

.vl-vi-cross::before {
  content: "\f16f"; }

.vl-vi-cross--after::after {
  content: "\f16f"; }

.vl-vi-cursor-arrow-big::before {
  content: "\f170"; }

.vl-vi-cursor-arrow-big--after::after {
  content: "\f170"; }

.vl-vi-cursor-arrow-small::before {
  content: "\f171"; }

.vl-vi-cursor-arrow-small--after::after {
  content: "\f171"; }

.vl-vi-cursor-finger-down::before {
  content: "\f172"; }

.vl-vi-cursor-finger-down--after::after {
  content: "\f172"; }

.vl-vi-cursor-finger-left::before {
  content: "\f173"; }

.vl-vi-cursor-finger-left--after::after {
  content: "\f173"; }

.vl-vi-cursor-finger-right::before {
  content: "\f174"; }

.vl-vi-cursor-finger-right--after::after {
  content: "\f174"; }

.vl-vi-cursor-finger-up::before {
  content: "\f175"; }

.vl-vi-cursor-finger-up--after::after {
  content: "\f175"; }

.vl-vi-cursor-hand::before {
  content: "\f176"; }

.vl-vi-cursor-hand--after::after {
  content: "\f176"; }

.vl-vi-cursor-hold::before {
  content: "\f177"; }

.vl-vi-cursor-hold--after::after {
  content: "\f177"; }

.vl-vi-demonstration::before {
  content: "\f178"; }

.vl-vi-demonstration--after::after {
  content: "\f178"; }

.vl-vi-diagram::before {
  content: "\f179"; }

.vl-vi-diagram--after::after {
  content: "\f179"; }

.vl-vi-direction-sign::before {
  content: "\f17a"; }

.vl-vi-direction-sign--after::after {
  content: "\f17a"; }

.vl-vi-document-small::before {
  content: "\f17b"; }

.vl-vi-document-small--after::after {
  content: "\f17b"; }

.vl-vi-document::before {
  content: "\f17c"; }

.vl-vi-document--after::after {
  content: "\f17c"; }

.vl-vi-double-arrow::before {
  content: "\f17d"; }

.vl-vi-double-arrow--after::after {
  content: "\f17d"; }

.vl-vi-download-harddisk::before {
  content: "\f17e"; }

.vl-vi-download-harddisk--after::after {
  content: "\f17e"; }

.vl-vi-drawer-down::before {
  content: "\f17f"; }

.vl-vi-drawer-down--after::after {
  content: "\f17f"; }

.vl-vi-drawer::before {
  content: "\f180"; }

.vl-vi-drawer--after::after {
  content: "\f180"; }

.vl-vi-edit::before {
  content: "\f181"; }

.vl-vi-edit--after::after {
  content: "\f181"; }

.vl-vi-email-read::before {
  content: "\f182"; }

.vl-vi-email-read--after::after {
  content: "\f182"; }

.vl-vi-email::before {
  content: "\f183"; }

.vl-vi-email--after::after {
  content: "\f183"; }

.vl-vi-enlarge::before {
  content: "\f184"; }

.vl-vi-enlarge--after::after {
  content: "\f184"; }

.vl-vi-envelope::before {
  content: "\f185"; }

.vl-vi-envelope--after::after {
  content: "\f185"; }

.vl-vi-expand-horizontal-alt::before {
  content: "\f186"; }

.vl-vi-expand-horizontal-alt--after::after {
  content: "\f186"; }

.vl-vi-expand-horizontal::before {
  content: "\f187"; }

.vl-vi-expand-horizontal--after::after {
  content: "\f187"; }

.vl-vi-expand-vertical::before {
  content: "\f188"; }

.vl-vi-expand-vertical--after::after {
  content: "\f188"; }

.vl-vi-expand::before {
  content: "\f189"; }

.vl-vi-expand--after::after {
  content: "\f189"; }

.vl-vi-external::before {
  content: "\f18a"; }

.vl-vi-external--after::after {
  content: "\f18a"; }

.vl-vi-facebook::before {
  content: "\f18b"; }

.vl-vi-facebook--after::after {
  content: "\f18b"; }

.vl-vi-faq::before {
  content: "\f18c"; }

.vl-vi-faq--after::after {
  content: "\f18c"; }

.vl-vi-fastback::before {
  content: "\f18d"; }

.vl-vi-fastback--after::after {
  content: "\f18d"; }

.vl-vi-fastforward::before {
  content: "\f18e"; }

.vl-vi-fastforward--after::after {
  content: "\f18e"; }

.vl-vi-fax::before {
  content: "\f18f"; }

.vl-vi-fax--after::after {
  content: "\f18f"; }

.vl-vi-file-audio::before {
  content: "\f190"; }

.vl-vi-file-audio--after::after {
  content: "\f190"; }

.vl-vi-file-copy::before {
  content: "\f191"; }

.vl-vi-file-copy--after::after {
  content: "\f191"; }

.vl-vi-file-download::before {
  content: "\f192"; }

.vl-vi-file-download--after::after {
  content: "\f192"; }

.vl-vi-file-image::before {
  content: "\f193"; }

.vl-vi-file-image--after::after {
  content: "\f193"; }

.vl-vi-file-new::before {
  content: "\f194"; }

.vl-vi-file-new--after::after {
  content: "\f194"; }

.vl-vi-file-office-doc::before {
  content: "\f195"; }

.vl-vi-file-office-doc--after::after {
  content: "\f195"; }

.vl-vi-file-office-pdf::before {
  content: "\f196"; }

.vl-vi-file-office-pdf--after::after {
  content: "\f196"; }

.vl-vi-file-office-ppt::before {
  content: "\f197"; }

.vl-vi-file-office-ppt--after::after {
  content: "\f197"; }

.vl-vi-file-office-xls::before {
  content: "\f198"; }

.vl-vi-file-office-xls--after::after {
  content: "\f198"; }

.vl-vi-file-swap::before {
  content: "\f199"; }

.vl-vi-file-swap--after::after {
  content: "\f199"; }

.vl-vi-file-tasks-check::before {
  content: "\f19a"; }

.vl-vi-file-tasks-check--after::after {
  content: "\f19a"; }

.vl-vi-file-video::before {
  content: "\f19b"; }

.vl-vi-file-video--after::after {
  content: "\f19b"; }

.vl-vi-file-zipped-new::before {
  content: "\f19c"; }

.vl-vi-file-zipped-new--after::after {
  content: "\f19c"; }

.vl-vi-file-zipped-vice::before {
  content: "\f19d"; }

.vl-vi-file-zipped-vice--after::after {
  content: "\f19d"; }

.vl-vi-file::before {
  content: "\f19e"; }

.vl-vi-file--after::after {
  content: "\f19e"; }

.vl-vi-files-coding::before {
  content: "\f19f"; }

.vl-vi-files-coding--after::after {
  content: "\f19f"; }

.vl-vi-film::before {
  content: "\f1a0"; }

.vl-vi-film--after::after {
  content: "\f1a0"; }

.vl-vi-flickr::before {
  content: "\f1a1"; }

.vl-vi-flickr--after::after {
  content: "\f1a1"; }

.vl-vi-focus::before {
  content: "\f1a2"; }

.vl-vi-focus--after::after {
  content: "\f1a2"; }

.vl-vi-folder::before {
  content: "\f1a3"; }

.vl-vi-folder--after::after {
  content: "\f1a3"; }

.vl-vi-font::before {
  content: "\f1a4"; }

.vl-vi-font--after::after {
  content: "\f1a4"; }

.vl-vi-gender-female-male::before {
  content: "\f1a5"; }

.vl-vi-gender-female-male--after::after {
  content: "\f1a5"; }

.vl-vi-gender-female::before {
  content: "\f1a6"; }

.vl-vi-gender-female--after::after {
  content: "\f1a6"; }

.vl-vi-gender-male::before {
  content: "\f1a7"; }

.vl-vi-gender-male--after::after {
  content: "\f1a7"; }

.vl-vi-gender-transgender::before {
  content: "\f1a8"; }

.vl-vi-gender-transgender--after::after {
  content: "\f1a8"; }

.vl-vi-globe::before {
  content: "\f1a9"; }

.vl-vi-globe--after::after {
  content: "\f1a9"; }

.vl-vi-googleplus::before {
  content: "\f1aa"; }

.vl-vi-googleplus--after::after {
  content: "\f1aa"; }

.vl-vi-graduate::before {
  content: "\f1ab"; }

.vl-vi-graduate--after::after {
  content: "\f1ab"; }

.vl-vi-graduation-hat::before {
  content: "\f1ac"; }

.vl-vi-graduation-hat--after::after {
  content: "\f1ac"; }

.vl-vi-hammer::before {
  content: "\f1ad"; }

.vl-vi-hammer--after::after {
  content: "\f1ad"; }

.vl-vi-harddisk::before {
  content: "\f1ae"; }

.vl-vi-harddisk--after::after {
  content: "\f1ae"; }

.vl-vi-headphone::before {
  content: "\f1af"; }

.vl-vi-headphone--after::after {
  content: "\f1af"; }

.vl-vi-health-first-aid-kit::before {
  content: "\f1b0"; }

.vl-vi-health-first-aid-kit--after::after {
  content: "\f1b0"; }

.vl-vi-health-heart-pulse::before {
  content: "\f1b1"; }

.vl-vi-health-heart-pulse--after::after {
  content: "\f1b1"; }

.vl-vi-health-hospital::before {
  content: "\f1b2"; }

.vl-vi-health-hospital--after::after {
  content: "\f1b2"; }

.vl-vi-hide::before {
  content: "\f1b3"; }

.vl-vi-hide--after::after {
  content: "\f1b3"; }

.vl-vi-hierarchy::before {
  content: "\f1b4"; }

.vl-vi-hierarchy--after::after {
  content: "\f1b4"; }

.vl-vi-hotel-bath-shower::before {
  content: "\f1b5"; }

.vl-vi-hotel-bath-shower--after::after {
  content: "\f1b5"; }

.vl-vi-hotel-bed::before {
  content: "\f1b6"; }

.vl-vi-hotel-bed--after::after {
  content: "\f1b6"; }

.vl-vi-hotel-fire-alarm::before {
  content: "\f1b7"; }

.vl-vi-hotel-fire-alarm--after::after {
  content: "\f1b7"; }

.vl-vi-hotel-shower::before {
  content: "\f1b8"; }

.vl-vi-hotel-shower--after::after {
  content: "\f1b8"; }

.vl-vi-id-card::before {
  content: "\f1b9"; }

.vl-vi-id-card--after::after {
  content: "\f1b9"; }

.vl-vi-id::before {
  content: "\f1ba"; }

.vl-vi-id--after::after {
  content: "\f1ba"; }

.vl-vi-images-copy::before {
  content: "\f1bb"; }

.vl-vi-images-copy--after::after {
  content: "\f1bb"; }

.vl-vi-images::before {
  content: "\f1bc"; }

.vl-vi-images--after::after {
  content: "\f1bc"; }

.vl-vi-inbox::before {
  content: "\f1bd"; }

.vl-vi-inbox--after::after {
  content: "\f1bd"; }

.vl-vi-indent-left::before {
  content: "\f1be"; }

.vl-vi-indent-left--after::after {
  content: "\f1be"; }

.vl-vi-indent-right::before {
  content: "\f1bf"; }

.vl-vi-indent-right--after::after {
  content: "\f1bf"; }

.vl-vi-info-circle::before {
  content: "\f1c0"; }

.vl-vi-info-circle--after::after {
  content: "\f1c0"; }

.vl-vi-info-filled::before {
  content: "\f1c1"; }

.vl-vi-info-filled--after::after {
  content: "\f1c1"; }

.vl-vi-info-small::before {
  content: "\f1c2"; }

.vl-vi-info-small--after::after {
  content: "\f1c2"; }

.vl-vi-info::before {
  content: "\f1c3"; }

.vl-vi-info--after::after {
  content: "\f1c3"; }

.vl-vi-instagram::before {
  content: "\f1c4"; }

.vl-vi-instagram--after::after {
  content: "\f1c4"; }

.vl-vi-italic::before {
  content: "\f1c5"; }

.vl-vi-italic--after::after {
  content: "\f1c5"; }

.vl-vi-jira::before {
  content: "\f1c6"; }

.vl-vi-jira--after::after {
  content: "\f1c6"; }

.vl-vi-key::before {
  content: "\f1c7"; }

.vl-vi-key--after::after {
  content: "\f1c7"; }

.vl-vi-keyboard::before {
  content: "\f1c8"; }

.vl-vi-keyboard--after::after {
  content: "\f1c8"; }

.vl-vi-laptop::before {
  content: "\f1c9"; }

.vl-vi-laptop--after::after {
  content: "\f1c9"; }

.vl-vi-lightbulb::before {
  content: "\f1ca"; }

.vl-vi-lightbulb--after::after {
  content: "\f1ca"; }

.vl-vi-link-broken::before {
  content: "\f1cb"; }

.vl-vi-link-broken--after::after {
  content: "\f1cb"; }

.vl-vi-link::before {
  content: "\f1cc"; }

.vl-vi-link--after::after {
  content: "\f1cc"; }

.vl-vi-linkedin::before {
  content: "\f1cd"; }

.vl-vi-linkedin--after::after {
  content: "\f1cd"; }

.vl-vi-list-bullets-alt::before {
  content: "\f1ce"; }

.vl-vi-list-bullets-alt--after::after {
  content: "\f1ce"; }

.vl-vi-list-bullets::before {
  content: "\f1cf"; }

.vl-vi-list-bullets--after::after {
  content: "\f1cf"; }

.vl-vi-list-numbers::before {
  content: "\f1d0"; }

.vl-vi-list-numbers--after::after {
  content: "\f1d0"; }

.vl-vi-list::before {
  content: "\f1d1"; }

.vl-vi-list--after::after {
  content: "\f1d1"; }

.vl-vi-location-direction-arrow::before {
  content: "\f1d2"; }

.vl-vi-location-direction-arrow--after::after {
  content: "\f1d2"; }

.vl-vi-location-gps::before {
  content: "\f1d3"; }

.vl-vi-location-gps--after::after {
  content: "\f1d3"; }

.vl-vi-location-map::before {
  content: "\f1d4"; }

.vl-vi-location-map--after::after {
  content: "\f1d4"; }

.vl-vi-location::before {
  content: "\f1d5"; }

.vl-vi-location--after::after {
  content: "\f1d5"; }

.vl-vi-lock-unlock::before {
  content: "\f1d6"; }

.vl-vi-lock-unlock--after::after {
  content: "\f1d6"; }

.vl-vi-lock::before {
  content: "\f1d7"; }

.vl-vi-lock--after::after {
  content: "\f1d7"; }

.vl-vi-login::before {
  content: "\f1d8"; }

.vl-vi-login--after::after {
  content: "\f1d8"; }

.vl-vi-logout::before {
  content: "\f1d9"; }

.vl-vi-logout--after::after {
  content: "\f1d9"; }

.vl-vi-long-arrow::before {
  content: "\f1da"; }

.vl-vi-long-arrow--after::after {
  content: "\f1da"; }

.vl-vi-magnifier::before {
  content: "\f1db"; }

.vl-vi-magnifier--after::after {
  content: "\f1db"; }

.vl-vi-mail::before {
  content: "\f1dc"; }

.vl-vi-mail--after::after {
  content: "\f1dc"; }

.vl-vi-market::before {
  content: "\f1dd"; }

.vl-vi-market--after::after {
  content: "\f1dd"; }

.vl-vi-menu::before {
  content: "\f1de"; }

.vl-vi-menu--after::after {
  content: "\f1de"; }

.vl-vi-messenger::before {
  content: "\f1df"; }

.vl-vi-messenger--after::after {
  content: "\f1df"; }

.vl-vi-microphone-off::before {
  content: "\f1e0"; }

.vl-vi-microphone-off--after::after {
  content: "\f1e0"; }

.vl-vi-microphone::before {
  content: "\f1e1"; }

.vl-vi-microphone--after::after {
  content: "\f1e1"; }

.vl-vi-minus-circle::before {
  content: "\f1e2"; }

.vl-vi-minus-circle--after::after {
  content: "\f1e2"; }

.vl-vi-minus::before {
  content: "\f1e3"; }

.vl-vi-minus--after::after {
  content: "\f1e3"; }

.vl-vi-mobile-phone::before {
  content: "\f1e4"; }

.vl-vi-mobile-phone--after::after {
  content: "\f1e4"; }

.vl-vi-move-down::before {
  content: "\f1e5"; }

.vl-vi-move-down--after::after {
  content: "\f1e5"; }

.vl-vi-move-left-right::before {
  content: "\f1e6"; }

.vl-vi-move-left-right--after::after {
  content: "\f1e6"; }

.vl-vi-moving-elevator::before {
  content: "\f1e7"; }

.vl-vi-moving-elevator--after::after {
  content: "\f1e7"; }

.vl-vi-music-note::before {
  content: "\f1e8"; }

.vl-vi-music-note--after::after {
  content: "\f1e8"; }

.vl-vi-nature-leaf::before {
  content: "\f1e9"; }

.vl-vi-nature-leaf--after::after {
  content: "\f1e9"; }

.vl-vi-nature-tree::before {
  content: "\f1ea"; }

.vl-vi-nature-tree--after::after {
  content: "\f1ea"; }

.vl-vi-nav-down-double::before {
  content: "\f1eb"; }

.vl-vi-nav-down-double--after::after {
  content: "\f1eb"; }

.vl-vi-nav-down-light::before {
  content: "\f1ec"; }

.vl-vi-nav-down-light--after::after {
  content: "\f1ec"; }

.vl-vi-nav-down::before {
  content: "\f1ed"; }

.vl-vi-nav-down--after::after {
  content: "\f1ed"; }

.vl-vi-nav-left-double::before {
  content: "\f1ee"; }

.vl-vi-nav-left-double--after::after {
  content: "\f1ee"; }

.vl-vi-nav-left-light::before {
  content: "\f1ef"; }

.vl-vi-nav-left-light--after::after {
  content: "\f1ef"; }

.vl-vi-nav-left::before {
  content: "\f1f0"; }

.vl-vi-nav-left--after::after {
  content: "\f1f0"; }

.vl-vi-nav-right-double::before {
  content: "\f1f1"; }

.vl-vi-nav-right-double--after::after {
  content: "\f1f1"; }

.vl-vi-nav-right-light::before {
  content: "\f1f2"; }

.vl-vi-nav-right-light--after::after {
  content: "\f1f2"; }

.vl-vi-nav-right::before {
  content: "\f1f3"; }

.vl-vi-nav-right--after::after {
  content: "\f1f3"; }

.vl-vi-nav-show-more-horizontal::before {
  content: "\f1f4"; }

.vl-vi-nav-show-more-horizontal--after::after {
  content: "\f1f4"; }

.vl-vi-nav-show-more-vertical::before {
  content: "\f1f5"; }

.vl-vi-nav-show-more-vertical--after::after {
  content: "\f1f5"; }

.vl-vi-nav-up-double::before {
  content: "\f1f6"; }

.vl-vi-nav-up-double--after::after {
  content: "\f1f6"; }

.vl-vi-nav-up-light::before {
  content: "\f1f7"; }

.vl-vi-nav-up-light--after::after {
  content: "\f1f7"; }

.vl-vi-nav-up::before {
  content: "\f1f8"; }

.vl-vi-nav-up--after::after {
  content: "\f1f8"; }

.vl-vi-news::before {
  content: "\f1f9"; }

.vl-vi-news--after::after {
  content: "\f1f9"; }

.vl-vi-newspaper::before {
  content: "\f1fa"; }

.vl-vi-newspaper--after::after {
  content: "\f1fa"; }

.vl-vi-next::before {
  content: "\f1fb"; }

.vl-vi-next--after::after {
  content: "\f1fb"; }

.vl-vi-other-annoyances-alt::before {
  content: "\f1fc"; }

.vl-vi-other-annoyances-alt--after::after {
  content: "\f1fc"; }

.vl-vi-other-annoyances::before {
  content: "\f1fd"; }

.vl-vi-other-annoyances--after::after {
  content: "\f1fd"; }

.vl-vi-paint-brush::before {
  content: "\f1fe"; }

.vl-vi-paint-brush--after::after {
  content: "\f1fe"; }

.vl-vi-paper::before {
  content: "\f1ff"; }

.vl-vi-paper--after::after {
  content: "\f1ff"; }

.vl-vi-paperclip::before {
  content: "\f200"; }

.vl-vi-paperclip--after::after {
  content: "\f200"; }

.vl-vi-paragraph::before {
  content: "\f201"; }

.vl-vi-paragraph--after::after {
  content: "\f201"; }

.vl-vi-pause::before {
  content: "\f202"; }

.vl-vi-pause--after::after {
  content: "\f202"; }

.vl-vi-pencil-write::before {
  content: "\f203"; }

.vl-vi-pencil-write--after::after {
  content: "\f203"; }

.vl-vi-pencil::before {
  content: "\f204"; }

.vl-vi-pencil--after::after {
  content: "\f204"; }

.vl-vi-pennants::before {
  content: "\f205"; }

.vl-vi-pennants--after::after {
  content: "\f205"; }

.vl-vi-phone-incoming::before {
  content: "\f206"; }

.vl-vi-phone-incoming--after::after {
  content: "\f206"; }

.vl-vi-phone-outgoing::before {
  content: "\f207"; }

.vl-vi-phone-outgoing--after::after {
  content: "\f207"; }

.vl-vi-phone-record::before {
  content: "\f208"; }

.vl-vi-phone-record--after::after {
  content: "\f208"; }

.vl-vi-phone-signal-low::before {
  content: "\f209"; }

.vl-vi-phone-signal-low--after::after {
  content: "\f209"; }

.vl-vi-phone-speaker::before {
  content: "\f20a"; }

.vl-vi-phone-speaker--after::after {
  content: "\f20a"; }

.vl-vi-phone::before {
  content: "\f20b"; }

.vl-vi-phone--after::after {
  content: "\f20b"; }

.vl-vi-pin-paper::before {
  content: "\f20c"; }

.vl-vi-pin-paper--after::after {
  content: "\f20c"; }

.vl-vi-pin::before {
  content: "\f20d"; }

.vl-vi-pin--after::after {
  content: "\f20d"; }

.vl-vi-pinterest::before {
  content: "\f20e"; }

.vl-vi-pinterest--after::after {
  content: "\f20e"; }

.vl-vi-places-factory::before {
  content: "\f20f"; }

.vl-vi-places-factory--after::after {
  content: "\f20f"; }

.vl-vi-places-home::before {
  content: "\f210"; }

.vl-vi-places-home--after::after {
  content: "\f210"; }

.vl-vi-play::before {
  content: "\f211"; }

.vl-vi-play--after::after {
  content: "\f211"; }

.vl-vi-playstreet::before {
  content: "\f212"; }

.vl-vi-playstreet--after::after {
  content: "\f212"; }

.vl-vi-plug::before {
  content: "\f213"; }

.vl-vi-plug--after::after {
  content: "\f213"; }

.vl-vi-plus-circle::before {
  content: "\f214"; }

.vl-vi-plus-circle--after::after {
  content: "\f214"; }

.vl-vi-plus::before {
  content: "\f215"; }

.vl-vi-plus--after::after {
  content: "\f215"; }

.vl-vi-power-button::before {
  content: "\f216"; }

.vl-vi-power-button--after::after {
  content: "\f216"; }

.vl-vi-printer-view::before {
  content: "\f217"; }

.vl-vi-printer-view--after::after {
  content: "\f217"; }

.vl-vi-programming-bug::before {
  content: "\f218"; }

.vl-vi-programming-bug--after::after {
  content: "\f218"; }

.vl-vi-publication::before {
  content: "\f219"; }

.vl-vi-publication--after::after {
  content: "\f219"; }

.vl-vi-question-mark-filled::before {
  content: "\f21a"; }

.vl-vi-question-mark-filled--after::after {
  content: "\f21a"; }

.vl-vi-question-mark-small::before {
  content: "\f21b"; }

.vl-vi-question-mark-small--after::after {
  content: "\f21b"; }

.vl-vi-question-mark::before {
  content: "\f21c"; }

.vl-vi-question-mark--after::after {
  content: "\f21c"; }

.vl-vi-question::before {
  content: "\f21d"; }

.vl-vi-question--after::after {
  content: "\f21d"; }

.vl-vi-recreation::before {
  content: "\f21e"; }

.vl-vi-recreation--after::after {
  content: "\f21e"; }

.vl-vi-reply-all::before {
  content: "\f21f"; }

.vl-vi-reply-all--after::after {
  content: "\f21f"; }

.vl-vi-reply::before {
  content: "\f220"; }

.vl-vi-reply--after::after {
  content: "\f220"; }

.vl-vi-rewards-certified-badge::before {
  content: "\f221"; }

.vl-vi-rewards-certified-badge--after::after {
  content: "\f221"; }

.vl-vi-rewards-gift::before {
  content: "\f222"; }

.vl-vi-rewards-gift--after::after {
  content: "\f222"; }

.vl-vi-road-block::before {
  content: "\f223"; }

.vl-vi-road-block--after::after {
  content: "\f223"; }

.vl-vi-road::before {
  content: "\f224"; }

.vl-vi-road--after::after {
  content: "\f224"; }

.vl-vi-romance-marriage-license::before {
  content: "\f225"; }

.vl-vi-romance-marriage-license--after::after {
  content: "\f225"; }

.vl-vi-save::before {
  content: "\f226"; }

.vl-vi-save--after::after {
  content: "\f226"; }

.vl-vi-scaffold::before {
  content: "\f227"; }

.vl-vi-scaffold--after::after {
  content: "\f227"; }

.vl-vi-scissors::before {
  content: "\f228"; }

.vl-vi-scissors--after::after {
  content: "\f228"; }

.vl-vi-search::before {
  content: "\f229"; }

.vl-vi-search--after::after {
  content: "\f229"; }

.vl-vi-server::before {
  content: "\f22a"; }

.vl-vi-server--after::after {
  content: "\f22a"; }

.vl-vi-settings::before {
  content: "\f22b"; }

.vl-vi-settings--after::after {
  content: "\f22b"; }

.vl-vi-share-megaphone::before {
  content: "\f22c"; }

.vl-vi-share-megaphone--after::after {
  content: "\f22c"; }

.vl-vi-share-rss-feed::before {
  content: "\f22d"; }

.vl-vi-share-rss-feed--after::after {
  content: "\f22d"; }

.vl-vi-share::before {
  content: "\f22e"; }

.vl-vi-share--after::after {
  content: "\f22e"; }

.vl-vi-shipping-truck::before {
  content: "\f22f"; }

.vl-vi-shipping-truck--after::after {
  content: "\f22f"; }

.vl-vi-shopping-basket-add::before {
  content: "\f230"; }

.vl-vi-shopping-basket-add--after::after {
  content: "\f230"; }

.vl-vi-shopping-basket-subtract::before {
  content: "\f231"; }

.vl-vi-shopping-basket-subtract--after::after {
  content: "\f231"; }

.vl-vi-shopping-basket::before {
  content: "\f232"; }

.vl-vi-shopping-basket--after::after {
  content: "\f232"; }

.vl-vi-shrink::before {
  content: "\f233"; }

.vl-vi-shrink--after::after {
  content: "\f233"; }

.vl-vi-sign-disable::before {
  content: "\f234"; }

.vl-vi-sign-disable--after::after {
  content: "\f234"; }

.vl-vi-sign-recycle::before {
  content: "\f235"; }

.vl-vi-sign-recycle--after::after {
  content: "\f235"; }

.vl-vi-sitemap::before {
  content: "\f236"; }

.vl-vi-sitemap--after::after {
  content: "\f236"; }

.vl-vi-skype::before {
  content: "\f237"; }

.vl-vi-skype--after::after {
  content: "\f237"; }

.vl-vi-smiley-poker-face::before {
  content: "\f238"; }

.vl-vi-smiley-poker-face--after::after {
  content: "\f238"; }

.vl-vi-smiley-smile::before {
  content: "\f239"; }

.vl-vi-smiley-smile--after::after {
  content: "\f239"; }

.vl-vi-snapchat::before {
  content: "\f23a"; }

.vl-vi-snapchat--after::after {
  content: "\f23a"; }

.vl-vi-sort::before {
  content: "\f23b"; }

.vl-vi-sort--after::after {
  content: "\f23b"; }

.vl-vi-speaker-volume-decrease::before {
  content: "\f23c"; }

.vl-vi-speaker-volume-decrease--after::after {
  content: "\f23c"; }

.vl-vi-speaker-volume-high::before {
  content: "\f23d"; }

.vl-vi-speaker-volume-high--after::after {
  content: "\f23d"; }

.vl-vi-speaker-volume-increase::before {
  content: "\f23e"; }

.vl-vi-speaker-volume-increase--after::after {
  content: "\f23e"; }

.vl-vi-speaker-volume-low::before {
  content: "\f23f"; }

.vl-vi-speaker-volume-low--after::after {
  content: "\f23f"; }

.vl-vi-speaker-volume-medium::before {
  content: "\f240"; }

.vl-vi-speaker-volume-medium--after::after {
  content: "\f240"; }

.vl-vi-speaker-volume-off::before {
  content: "\f241"; }

.vl-vi-speaker-volume-off--after::after {
  content: "\f241"; }

.vl-vi-sports-competition::before {
  content: "\f242"; }

.vl-vi-sports-competition--after::after {
  content: "\f242"; }

.vl-vi-spotify::before {
  content: "\f243"; }

.vl-vi-spotify--after::after {
  content: "\f243"; }

.vl-vi-stop::before {
  content: "\f244"; }

.vl-vi-stop--after::after {
  content: "\f244"; }

.vl-vi-subtract::before {
  content: "\f245"; }

.vl-vi-subtract--after::after {
  content: "\f245"; }

.vl-vi-subway::before {
  content: "\f246"; }

.vl-vi-subway--after::after {
  content: "\f246"; }

.vl-vi-suitcase::before {
  content: "\f247"; }

.vl-vi-suitcase--after::after {
  content: "\f247"; }

.vl-vi-switches::before {
  content: "\f248"; }

.vl-vi-switches--after::after {
  content: "\f248"; }

.vl-vi-symbol-wifi::before {
  content: "\f249"; }

.vl-vi-symbol-wifi--after::after {
  content: "\f249"; }

.vl-vi-synchronize-timeout::before {
  content: "\f24a"; }

.vl-vi-synchronize-timeout--after::after {
  content: "\f24a"; }

.vl-vi-synchronize::before {
  content: "\f24b"; }

.vl-vi-synchronize--after::after {
  content: "\f24b"; }

.vl-vi-tag-add::before {
  content: "\f24c"; }

.vl-vi-tag-add--after::after {
  content: "\f24c"; }

.vl-vi-tag-check::before {
  content: "\f24d"; }

.vl-vi-tag-check--after::after {
  content: "\f24d"; }

.vl-vi-tag-close::before {
  content: "\f24e"; }

.vl-vi-tag-close--after::after {
  content: "\f24e"; }

.vl-vi-tag-double::before {
  content: "\f24f"; }

.vl-vi-tag-double--after::after {
  content: "\f24f"; }

.vl-vi-tag-edit::before {
  content: "\f250"; }

.vl-vi-tag-edit--after::after {
  content: "\f250"; }

.vl-vi-tag-subtract::before {
  content: "\f251"; }

.vl-vi-tag-subtract--after::after {
  content: "\f251"; }

.vl-vi-tag-view::before {
  content: "\f252"; }

.vl-vi-tag-view--after::after {
  content: "\f252"; }

.vl-vi-tag::before {
  content: "\f253"; }

.vl-vi-tag--after::after {
  content: "\f253"; }

.vl-vi-taxi::before {
  content: "\f254"; }

.vl-vi-taxi--after::after {
  content: "\f254"; }

.vl-vi-television::before {
  content: "\f255"; }

.vl-vi-television--after::after {
  content: "\f255"; }

.vl-vi-terrace::before {
  content: "\f256"; }

.vl-vi-terrace--after::after {
  content: "\f256"; }

.vl-vi-text-cursor::before {
  content: "\f257"; }

.vl-vi-text-cursor--after::after {
  content: "\f257"; }

.vl-vi-text-eraser::before {
  content: "\f258"; }

.vl-vi-text-eraser--after::after {
  content: "\f258"; }

.vl-vi-text-redo::before {
  content: "\f259"; }

.vl-vi-text-redo--after::after {
  content: "\f259"; }

.vl-vi-text-undo::before {
  content: "\f25a"; }

.vl-vi-text-undo--after::after {
  content: "\f25a"; }

.vl-vi-timeline::before {
  content: "\f25b"; }

.vl-vi-timeline--after::after {
  content: "\f25b"; }

.vl-vi-tint::before {
  content: "\f25c"; }

.vl-vi-tint--after::after {
  content: "\f25c"; }

.vl-vi-train::before {
  content: "\f25d"; }

.vl-vi-train--after::after {
  content: "\f25d"; }

.vl-vi-trash::before {
  content: "\f25e"; }

.vl-vi-trash--after::after {
  content: "\f25e"; }

.vl-vi-trophy::before {
  content: "\f25f"; }

.vl-vi-trophy--after::after {
  content: "\f25f"; }

.vl-vi-twitter::before {
  content: "\f260"; }

.vl-vi-twitter--after::after {
  content: "\f260"; }

.vl-vi-underline::before {
  content: "\f261"; }

.vl-vi-underline--after::after {
  content: "\f261"; }

.vl-vi-university::before {
  content: "\f262"; }

.vl-vi-university--after::after {
  content: "\f262"; }

.vl-vi-up-down-arrows::before {
  content: "\f263"; }

.vl-vi-up-down-arrows--after::after {
  content: "\f263"; }

.vl-vi-upload-harddisk::before {
  content: "\f264"; }

.vl-vi-upload-harddisk--after::after {
  content: "\f264"; }

.vl-vi-user-female::before {
  content: "\f265"; }

.vl-vi-user-female--after::after {
  content: "\f265"; }

.vl-vi-user-group::before {
  content: "\f266"; }

.vl-vi-user-group--after::after {
  content: "\f266"; }

.vl-vi-user-male::before {
  content: "\f267"; }

.vl-vi-user-male--after::after {
  content: "\f267"; }

.vl-vi-user-setting::before {
  content: "\f268"; }

.vl-vi-user-setting--after::after {
  content: "\f268"; }

.vl-vi-user::before {
  content: "\f269"; }

.vl-vi-user--after::after {
  content: "\f269"; }

.vl-vi-video-subtitle::before {
  content: "\f26a"; }

.vl-vi-video-subtitle--after::after {
  content: "\f26a"; }

.vl-vi-view-add::before {
  content: "\f26b"; }

.vl-vi-view-add--after::after {
  content: "\f26b"; }

.vl-vi-vlaanderen::before {
  content: "\f26c"; }

.vl-vi-vlaanderen--after::after {
  content: "\f26c"; }

.vl-vi-vote-flag::before {
  content: "\f26d"; }

.vl-vi-vote-flag--after::after {
  content: "\f26d"; }

.vl-vi-vote-heart::before {
  content: "\f26e"; }

.vl-vi-vote-heart--after::after {
  content: "\f26e"; }

.vl-vi-vote-star::before {
  content: "\f26f"; }

.vl-vi-vote-star--after::after {
  content: "\f26f"; }

.vl-vi-vote-thumbs-down::before {
  content: "\f270"; }

.vl-vi-vote-thumbs-down--after::after {
  content: "\f270"; }

.vl-vi-vote-thumbs-up::before {
  content: "\f271"; }

.vl-vi-vote-thumbs-up--after::after {
  content: "\f271"; }

.vl-vi-warning::before {
  content: "\f272"; }

.vl-vi-warning--after::after {
  content: "\f272"; }

.vl-vi-whatsapp::before {
  content: "\f273"; }

.vl-vi-whatsapp--after::after {
  content: "\f273"; }

.vl-vi-wrench::before {
  content: "\f274"; }

.vl-vi-wrench--after::after {
  content: "\f274"; }

.vl-vi-youtube::before {
  content: "\f275"; }

.vl-vi-youtube--after::after {
  content: "\f275"; }

.vl-vi-zoom-in::before {
  content: "\f276"; }

.vl-vi-zoom-in--after::after {
  content: "\f276"; }

.vl-vi-zoom-out::before {
  content: "\f277"; }

.vl-vi-zoom-out--after::after {
  content: "\f277"; }

a {
  color: #05c;
  text-decoration: underline;
  text-decoration-skip: ink; }
  a:hover, a:focus {
    text-decoration: none;
    color: #003bb0; }

a:focus,
button:focus {
  outline: auto #ffc515 3px; }

button {
  font-family: flanders-sans, sans-serif;
  cursor: pointer; }

.vl-grid {
  position: relative;
  box-sizing: border-box;
  display: flex;
  margin-left: -3rem;
  flex-direction: row;
  flex: 0 1 auto;
  flex-wrap: wrap; }

.vl-grid > * {
  box-sizing: border-box;
  padding-left: 3rem;
  position: relative; }

.vl-grid--no-gutter {
  margin-left: 0; }

.vl-grid--no-gutter > * {
  padding-left: 0; }

.vl-grid--v-top {
  align-items: flex-start; }

.vl-grid--v-center {
  align-items: center; }

.vl-grid--v-bottom {
  align-items: flex-end; }

.vl-grid--v-stretch {
  align-items: stretch; }

.vl-grid--v-baseline {
  align-items: stretch; }

.vl-grid--align-start {
  justify-content: flex-start; }

.vl-grid--align-end {
  justify-content: flex-end; }

.vl-grid--align-center {
  justify-content: center; }

.vl-grid--align-space-between {
  justify-content: space-between; }

.vl-grid--align-space-around {
  justify-content: space-around; }

.vl-col--fit {
  flex: 1 0; }

.vl-col--flex {
  display: flex; }

.vl-col--1-12 {
  flex-basis: 8.33333%;
  max-width: 8.33333%;
  min-width: 8.33333%; }

.vl-col--1-6, .vl-col--2-12 {
  flex-basis: 16.66667%;
  max-width: 16.66667%;
  min-width: 16.66667%; }

.vl-col--1-4, .vl-col--3-12 {
  flex-basis: 25%;
  max-width: 25%;
  min-width: 25%; }

.vl-col--1-3, .vl-col--2-6, .vl-col--4-12 {
  flex-basis: 33.33333%;
  max-width: 33.33333%;
  min-width: 33.33333%; }

.vl-col--5-12 {
  flex-basis: 41.66667%;
  max-width: 41.66667%;
  min-width: 41.66667%; }

.vl-col--1-2, .vl-col--2-4, .vl-col--3-6, .vl-col--6-12 {
  flex-basis: 50%;
  max-width: 50%;
  min-width: 50%; }

.vl-col--7-12 {
  flex-basis: 58.33333%;
  max-width: 58.33333%;
  min-width: 58.33333%; }

.vl-col--2-3, .vl-col--4-6, .vl-col--8-12 {
  flex-basis: 66.66667%;
  max-width: 66.66667%;
  min-width: 66.66667%; }

.vl-col--3-4, .vl-col--9-12 {
  flex-basis: 75%;
  max-width: 75%;
  min-width: 75%; }

.vl-col--5-6, .vl-col--10-12 {
  flex-basis: 83.33333%;
  max-width: 83.33333%;
  min-width: 83.33333%; }

.vl-col--11-12 {
  flex-basis: 91.66667%;
  max-width: 91.66667%;
  min-width: 91.66667%; }

.vl-col--1-1, .vl-col--2-2, .vl-col--3-3, .vl-col--4-4, .vl-col--6-6, .vl-col--12-12 {
  flex-basis: 100%;
  max-width: 100%;
  min-width: 100%; }

.vl-grid--is-stacked {
  margin-top: -3rem; }

.vl-grid--is-stacked > * {
  margin-top: 3rem; }

.vl-push--reset {
  margin-left: 0; }

.vl-push--1-12 {
  margin-left: 8.33333%; }

.vl-push--1-6, .vl-push--2-12 {
  margin-left: 16.66667%; }

.vl-push--1-4, .vl-push--3-12 {
  margin-left: 25%; }

.vl-push--1-3, .vl-push--2-6, .vl-push--4-12 {
  margin-left: 33.33333%; }

.vl-push--5-12 {
  margin-left: 41.66667%; }

.vl-push--1-2, .vl-push--2-4, .vl-push--3-6, .vl-push--6-12 {
  margin-left: 50%; }

.vl-push--7-12 {
  margin-left: 58.33333%; }

.vl-push--2-3, .vl-push--4-6, .vl-push--8-12 {
  margin-left: 66.66667%; }

.vl-push--3-4, .vl-push--9-12 {
  margin-left: 75%; }

.vl-push--5-6, .vl-push--10-12 {
  margin-left: 83.33333%; }

.vl-push--11-12 {
  margin-left: 91.66667%; }

.vl-col--omega {
  margin-left: auto; }

@media screen and (min-width: 1024px) {
  .vl-grid {
    position: relative;
    box-sizing: border-box;
    display: flex;
    margin-left: -3rem;
    flex-direction: row;
    flex: 0 1 auto;
    flex-wrap: wrap; }

  .vl-grid > * {
    box-sizing: border-box;
    padding-left: 3rem;
    position: relative; }

  .vl-grid--no-gutter--l {
    margin-left: 0; }

  .vl-grid--no-gutter--l > * {
    padding-left: 0; }

  .vl-grid--v-top--l {
    align-items: flex-start; }

  .vl-grid--v-center--l {
    align-items: center; }

  .vl-grid--v-bottom--l {
    align-items: flex-end; }

  .vl-grid--v-stretch--l {
    align-items: stretch; }

  .vl-grid--v-baseline--l {
    align-items: stretch; }

  .vl-grid--align-start--l {
    justify-content: flex-start; }

  .vl-grid--align-end--l {
    justify-content: flex-end; }

  .vl-grid--align-center--l {
    justify-content: center; }

  .vl-grid--align-space-between--l {
    justify-content: space-between; }

  .vl-grid--align-space-around--l {
    justify-content: space-around; }

  .vl-col--fit--l {
    flex: 1 0; }

  .vl-col--flex--l {
    display: flex; }

  .vl-col--1-12--l {
    flex-basis: 8.33333%;
    max-width: 8.33333%;
    min-width: 8.33333%; }

  .vl-col--1-6--l, .vl-col--2-12--l {
    flex-basis: 16.66667%;
    max-width: 16.66667%;
    min-width: 16.66667%; }

  .vl-col--1-4--l, .vl-col--3-12--l {
    flex-basis: 25%;
    max-width: 25%;
    min-width: 25%; }

  .vl-col--1-3--l, .vl-col--2-6--l, .vl-col--4-12--l {
    flex-basis: 33.33333%;
    max-width: 33.33333%;
    min-width: 33.33333%; }

  .vl-col--5-12--l {
    flex-basis: 41.66667%;
    max-width: 41.66667%;
    min-width: 41.66667%; }

  .vl-col--1-2--l, .vl-col--2-4--l, .vl-col--3-6--l, .vl-col--6-12--l {
    flex-basis: 50%;
    max-width: 50%;
    min-width: 50%; }

  .vl-col--7-12--l {
    flex-basis: 58.33333%;
    max-width: 58.33333%;
    min-width: 58.33333%; }

  .vl-col--2-3--l, .vl-col--4-6--l, .vl-col--8-12--l {
    flex-basis: 66.66667%;
    max-width: 66.66667%;
    min-width: 66.66667%; }

  .vl-col--3-4--l, .vl-col--9-12--l {
    flex-basis: 75%;
    max-width: 75%;
    min-width: 75%; }

  .vl-col--5-6--l, .vl-col--10-12--l {
    flex-basis: 83.33333%;
    max-width: 83.33333%;
    min-width: 83.33333%; }

  .vl-col--11-12--l {
    flex-basis: 91.66667%;
    max-width: 91.66667%;
    min-width: 91.66667%; }

  .vl-col--1-1--l, .vl-col--2-2--l, .vl-col--3-3--l, .vl-col--4-4--l, .vl-col--6-6--l, .vl-col--12-12--l {
    flex-basis: 100%;
    max-width: 100%;
    min-width: 100%; }

  .vl-grid--is-stacked {
    margin-top: -3rem; }

  .vl-grid--is-stacked > * {
    margin-top: 3rem; }

  .vl-push--reset--l {
    margin-left: 0; }

  .vl-push--1-12--l {
    margin-left: 8.33333%; }

  .vl-push--1-6--l, .vl-push--2-12--l {
    margin-left: 16.66667%; }

  .vl-push--1-4--l, .vl-push--3-12--l {
    margin-left: 25%; }

  .vl-push--1-3--l, .vl-push--2-6--l, .vl-push--4-12--l {
    margin-left: 33.33333%; }

  .vl-push--5-12--l {
    margin-left: 41.66667%; }

  .vl-push--1-2--l, .vl-push--2-4--l, .vl-push--3-6--l, .vl-push--6-12--l {
    margin-left: 50%; }

  .vl-push--7-12--l {
    margin-left: 58.33333%; }

  .vl-push--2-3--l, .vl-push--4-6--l, .vl-push--8-12--l {
    margin-left: 66.66667%; }

  .vl-push--3-4--l, .vl-push--9-12--l {
    margin-left: 75%; }

  .vl-push--5-6--l, .vl-push--10-12--l {
    margin-left: 83.33333%; }

  .vl-push--11-12--l {
    margin-left: 91.66667%; }

  .vl-col--omega--l {
    margin-left: auto; } }
@media screen and (min-width: 1601px) {
  .vl-grid {
    position: relative;
    box-sizing: border-box;
    display: flex;
    margin-left: -3rem;
    flex-direction: row;
    flex: 0 1 auto;
    flex-wrap: wrap; }

  .vl-grid > * {
    box-sizing: border-box;
    padding-left: 3rem;
    position: relative; }

  .vl-grid--no-gutter--xl {
    margin-left: 0; }

  .vl-grid--no-gutter--xl > * {
    padding-left: 0; }

  .vl-grid--v-top--xl {
    align-items: flex-start; }

  .vl-grid--v-center--xl {
    align-items: center; }

  .vl-grid--v-bottom--xl {
    align-items: flex-end; }

  .vl-grid--v-stretch--xl {
    align-items: stretch; }

  .vl-grid--v-baseline--xl {
    align-items: stretch; }

  .vl-grid--align-start--xl {
    justify-content: flex-start; }

  .vl-grid--align-end--xl {
    justify-content: flex-end; }

  .vl-grid--align-center--xl {
    justify-content: center; }

  .vl-grid--align-space-between--xl {
    justify-content: space-between; }

  .vl-grid--align-space-around--xl {
    justify-content: space-around; }

  .vl-col--fit--xl {
    flex: 1 0; }

  .vl-col--flex--xl {
    display: flex; }

  .vl-col--1-12--xl {
    flex-basis: 8.33333%;
    max-width: 8.33333%;
    min-width: 8.33333%; }

  .vl-col--1-6--xl, .vl-col--2-12--xl {
    flex-basis: 16.66667%;
    max-width: 16.66667%;
    min-width: 16.66667%; }

  .vl-col--1-4--xl, .vl-col--3-12--xl {
    flex-basis: 25%;
    max-width: 25%;
    min-width: 25%; }

  .vl-col--1-3--xl, .vl-col--2-6--xl, .vl-col--4-12--xl {
    flex-basis: 33.33333%;
    max-width: 33.33333%;
    min-width: 33.33333%; }

  .vl-col--5-12--xl {
    flex-basis: 41.66667%;
    max-width: 41.66667%;
    min-width: 41.66667%; }

  .vl-col--1-2--xl, .vl-col--2-4--xl, .vl-col--3-6--xl, .vl-col--6-12--xl {
    flex-basis: 50%;
    max-width: 50%;
    min-width: 50%; }

  .vl-col--7-12--xl {
    flex-basis: 58.33333%;
    max-width: 58.33333%;
    min-width: 58.33333%; }

  .vl-col--2-3--xl, .vl-col--4-6--xl, .vl-col--8-12--xl {
    flex-basis: 66.66667%;
    max-width: 66.66667%;
    min-width: 66.66667%; }

  .vl-col--3-4--xl, .vl-col--9-12--xl {
    flex-basis: 75%;
    max-width: 75%;
    min-width: 75%; }

  .vl-col--5-6--xl, .vl-col--10-12--xl {
    flex-basis: 83.33333%;
    max-width: 83.33333%;
    min-width: 83.33333%; }

  .vl-col--11-12--xl {
    flex-basis: 91.66667%;
    max-width: 91.66667%;
    min-width: 91.66667%; }

  .vl-col--1-1--xl, .vl-col--2-2--xl, .vl-col--3-3--xl, .vl-col--4-4--xl, .vl-col--6-6--xl, .vl-col--12-12--xl {
    flex-basis: 100%;
    max-width: 100%;
    min-width: 100%; }

  .vl-grid--is-stacked {
    margin-top: -3rem; }

  .vl-grid--is-stacked > * {
    margin-top: 3rem; }

  .vl-push--reset--xl {
    margin-left: 0; }

  .vl-push--1-12--xl {
    margin-left: 8.33333%; }

  .vl-push--1-6--xl, .vl-push--2-12--xl {
    margin-left: 16.66667%; }

  .vl-push--1-4--xl, .vl-push--3-12--xl {
    margin-left: 25%; }

  .vl-push--1-3--xl, .vl-push--2-6--xl, .vl-push--4-12--xl {
    margin-left: 33.33333%; }

  .vl-push--5-12--xl {
    margin-left: 41.66667%; }

  .vl-push--1-2--xl, .vl-push--2-4--xl, .vl-push--3-6--xl, .vl-push--6-12--xl {
    margin-left: 50%; }

  .vl-push--7-12--xl {
    margin-left: 58.33333%; }

  .vl-push--2-3--xl, .vl-push--4-6--xl, .vl-push--8-12--xl {
    margin-left: 66.66667%; }

  .vl-push--3-4--xl, .vl-push--9-12--xl {
    margin-left: 75%; }

  .vl-push--5-6--xl, .vl-push--10-12--xl {
    margin-left: 83.33333%; }

  .vl-push--11-12--xl {
    margin-left: 91.66667%; }

  .vl-col--omega--xl {
    margin-left: auto; } }
@media screen and (max-width: 1023px) {
  .vl-grid {
    position: relative;
    box-sizing: border-box;
    display: flex;
    margin-left: -3rem;
    flex-direction: row;
    flex: 0 1 auto;
    flex-wrap: wrap; }

  .vl-grid > * {
    box-sizing: border-box;
    padding-left: 3rem;
    position: relative; }

  .vl-grid--no-gutter--m {
    margin-left: 0; }

  .vl-grid--no-gutter--m > * {
    padding-left: 0; }

  .vl-grid--v-top--m {
    align-items: flex-start; }

  .vl-grid--v-center--m {
    align-items: center; }

  .vl-grid--v-bottom--m {
    align-items: flex-end; }

  .vl-grid--v-stretch--m {
    align-items: stretch; }

  .vl-grid--v-baseline--m {
    align-items: stretch; }

  .vl-grid--align-start--m {
    justify-content: flex-start; }

  .vl-grid--align-end--m {
    justify-content: flex-end; }

  .vl-grid--align-center--m {
    justify-content: center; }

  .vl-grid--align-space-between--m {
    justify-content: space-between; }

  .vl-grid--align-space-around--m {
    justify-content: space-around; }

  .vl-col--fit--m {
    flex: 1 0; }

  .vl-col--flex--m {
    display: flex; }

  .vl-col--1-12--m {
    flex-basis: 8.33333%;
    max-width: 8.33333%;
    min-width: 8.33333%; }

  .vl-col--1-6--m, .vl-col--2-12--m {
    flex-basis: 16.66667%;
    max-width: 16.66667%;
    min-width: 16.66667%; }

  .vl-col--1-4--m, .vl-col--3-12--m {
    flex-basis: 25%;
    max-width: 25%;
    min-width: 25%; }

  .vl-col--1-3--m, .vl-col--2-6--m, .vl-col--4-12--m {
    flex-basis: 33.33333%;
    max-width: 33.33333%;
    min-width: 33.33333%; }

  .vl-col--5-12--m {
    flex-basis: 41.66667%;
    max-width: 41.66667%;
    min-width: 41.66667%; }

  .vl-col--1-2--m, .vl-col--2-4--m, .vl-col--3-6--m, .vl-col--6-12--m {
    flex-basis: 50%;
    max-width: 50%;
    min-width: 50%; }

  .vl-col--7-12--m {
    flex-basis: 58.33333%;
    max-width: 58.33333%;
    min-width: 58.33333%; }

  .vl-col--2-3--m, .vl-col--4-6--m, .vl-col--8-12--m {
    flex-basis: 66.66667%;
    max-width: 66.66667%;
    min-width: 66.66667%; }

  .vl-col--3-4--m, .vl-col--9-12--m {
    flex-basis: 75%;
    max-width: 75%;
    min-width: 75%; }

  .vl-col--5-6--m, .vl-col--10-12--m {
    flex-basis: 83.33333%;
    max-width: 83.33333%;
    min-width: 83.33333%; }

  .vl-col--11-12--m {
    flex-basis: 91.66667%;
    max-width: 91.66667%;
    min-width: 91.66667%; }

  .vl-col--1-1--m, .vl-col--2-2--m, .vl-col--3-3--m, .vl-col--4-4--m, .vl-col--6-6--m, .vl-col--12-12--m {
    flex-basis: 100%;
    max-width: 100%;
    min-width: 100%; }

  .vl-grid--is-stacked {
    margin-top: -3rem; }

  .vl-grid--is-stacked > * {
    margin-top: 3rem; }

  .vl-push--reset--m {
    margin-left: 0; }

  .vl-push--1-12--m {
    margin-left: 8.33333%; }

  .vl-push--1-6--m, .vl-push--2-12--m {
    margin-left: 16.66667%; }

  .vl-push--1-4--m, .vl-push--3-12--m {
    margin-left: 25%; }

  .vl-push--1-3--m, .vl-push--2-6--m, .vl-push--4-12--m {
    margin-left: 33.33333%; }

  .vl-push--5-12--m {
    margin-left: 41.66667%; }

  .vl-push--1-2--m, .vl-push--2-4--m, .vl-push--3-6--m, .vl-push--6-12--m {
    margin-left: 50%; }

  .vl-push--7-12--m {
    margin-left: 58.33333%; }

  .vl-push--2-3--m, .vl-push--4-6--m, .vl-push--8-12--m {
    margin-left: 66.66667%; }

  .vl-push--3-4--m, .vl-push--9-12--m {
    margin-left: 75%; }

  .vl-push--5-6--m, .vl-push--10-12--m {
    margin-left: 83.33333%; }

  .vl-push--11-12--m {
    margin-left: 91.66667%; }

  .vl-col--omega--m {
    margin-left: auto; } }
@media screen and (max-width: 767px) {
  .vl-grid {
    position: relative;
    box-sizing: border-box;
    display: flex;
    margin-left: -1.5rem;
    flex-direction: row;
    flex: 0 1 auto;
    flex-wrap: wrap; }

  .vl-grid > * {
    box-sizing: border-box;
    padding-left: 1.5rem;
    position: relative; }

  .vl-grid--no-gutter--s {
    margin-left: 0; }

  .vl-grid--no-gutter--s > * {
    padding-left: 0; }

  .vl-grid--v-top--s {
    align-items: flex-start; }

  .vl-grid--v-center--s {
    align-items: center; }

  .vl-grid--v-bottom--s {
    align-items: flex-end; }

  .vl-grid--v-stretch--s {
    align-items: stretch; }

  .vl-grid--v-baseline--s {
    align-items: stretch; }

  .vl-grid--align-start--s {
    justify-content: flex-start; }

  .vl-grid--align-end--s {
    justify-content: flex-end; }

  .vl-grid--align-center--s {
    justify-content: center; }

  .vl-grid--align-space-between--s {
    justify-content: space-between; }

  .vl-grid--align-space-around--s {
    justify-content: space-around; }

  .vl-col--fit--s {
    flex: 1 0; }

  .vl-col--flex--s {
    display: flex; }

  .vl-col--1-12--s {
    flex-basis: 8.33333%;
    max-width: 8.33333%;
    min-width: 8.33333%; }

  .vl-col--1-6--s, .vl-col--2-12--s {
    flex-basis: 16.66667%;
    max-width: 16.66667%;
    min-width: 16.66667%; }

  .vl-col--1-4--s, .vl-col--3-12--s {
    flex-basis: 25%;
    max-width: 25%;
    min-width: 25%; }

  .vl-col--1-3--s, .vl-col--2-6--s, .vl-col--4-12--s {
    flex-basis: 33.33333%;
    max-width: 33.33333%;
    min-width: 33.33333%; }

  .vl-col--5-12--s {
    flex-basis: 41.66667%;
    max-width: 41.66667%;
    min-width: 41.66667%; }

  .vl-col--1-2--s, .vl-col--2-4--s, .vl-col--3-6--s, .vl-col--6-12--s {
    flex-basis: 50%;
    max-width: 50%;
    min-width: 50%; }

  .vl-col--7-12--s {
    flex-basis: 58.33333%;
    max-width: 58.33333%;
    min-width: 58.33333%; }

  .vl-col--2-3--s, .vl-col--4-6--s, .vl-col--8-12--s {
    flex-basis: 66.66667%;
    max-width: 66.66667%;
    min-width: 66.66667%; }

  .vl-col--3-4--s, .vl-col--9-12--s {
    flex-basis: 75%;
    max-width: 75%;
    min-width: 75%; }

  .vl-col--5-6--s, .vl-col--10-12--s {
    flex-basis: 83.33333%;
    max-width: 83.33333%;
    min-width: 83.33333%; }

  .vl-col--11-12--s {
    flex-basis: 91.66667%;
    max-width: 91.66667%;
    min-width: 91.66667%; }

  .vl-col--1-1--s, .vl-col--2-2--s, .vl-col--3-3--s, .vl-col--4-4--s, .vl-col--6-6--s, .vl-col--12-12--s {
    flex-basis: 100%;
    max-width: 100%;
    min-width: 100%; }

  .vl-grid--is-stacked {
    margin-top: -1.5rem; }

  .vl-grid--is-stacked > * {
    margin-top: 1.5rem; }

  .vl-push--reset--s {
    margin-left: 0; }

  .vl-push--1-12--s {
    margin-left: 8.33333%; }

  .vl-push--1-6--s, .vl-push--2-12--s {
    margin-left: 16.66667%; }

  .vl-push--1-4--s, .vl-push--3-12--s {
    margin-left: 25%; }

  .vl-push--1-3--s, .vl-push--2-6--s, .vl-push--4-12--s {
    margin-left: 33.33333%; }

  .vl-push--5-12--s {
    margin-left: 41.66667%; }

  .vl-push--1-2--s, .vl-push--2-4--s, .vl-push--3-6--s, .vl-push--6-12--s {
    margin-left: 50%; }

  .vl-push--7-12--s {
    margin-left: 58.33333%; }

  .vl-push--2-3--s, .vl-push--4-6--s, .vl-push--8-12--s {
    margin-left: 66.66667%; }

  .vl-push--3-4--s, .vl-push--9-12--s {
    margin-left: 75%; }

  .vl-push--5-6--s, .vl-push--10-12--s {
    margin-left: 83.33333%; }

  .vl-push--11-12--s {
    margin-left: 91.66667%; }

  .vl-col--omega--s {
    margin-left: auto; } }
@media screen and (max-width: 500px) {
  .vl-grid {
    position: relative;
    box-sizing: border-box;
    display: flex;
    margin-left: -1.5rem;
    flex-direction: row;
    flex: 0 1 auto;
    flex-wrap: wrap; }

  .vl-grid > * {
    box-sizing: border-box;
    padding-left: 1.5rem;
    position: relative; }

  .vl-grid--no-gutter--xs {
    margin-left: 0; }

  .vl-grid--no-gutter--xs > * {
    padding-left: 0; }

  .vl-grid--v-top--xs {
    align-items: flex-start; }

  .vl-grid--v-center--xs {
    align-items: center; }

  .vl-grid--v-bottom--xs {
    align-items: flex-end; }

  .vl-grid--v-stretch--xs {
    align-items: stretch; }

  .vl-grid--v-baseline--xs {
    align-items: stretch; }

  .vl-grid--align-start--xs {
    justify-content: flex-start; }

  .vl-grid--align-end--xs {
    justify-content: flex-end; }

  .vl-grid--align-center--xs {
    justify-content: center; }

  .vl-grid--align-space-between--xs {
    justify-content: space-between; }

  .vl-grid--align-space-around--xs {
    justify-content: space-around; }

  .vl-col--fit--xs {
    flex: 1 0; }

  .vl-col--flex--xs {
    display: flex; }

  .vl-col--1-12--xs {
    flex-basis: 8.33333%;
    max-width: 8.33333%;
    min-width: 8.33333%; }

  .vl-col--1-6--xs, .vl-col--2-12--xs {
    flex-basis: 16.66667%;
    max-width: 16.66667%;
    min-width: 16.66667%; }

  .vl-col--1-4--xs, .vl-col--3-12--xs {
    flex-basis: 25%;
    max-width: 25%;
    min-width: 25%; }

  .vl-col--1-3--xs, .vl-col--2-6--xs, .vl-col--4-12--xs {
    flex-basis: 33.33333%;
    max-width: 33.33333%;
    min-width: 33.33333%; }

  .vl-col--5-12--xs {
    flex-basis: 41.66667%;
    max-width: 41.66667%;
    min-width: 41.66667%; }

  .vl-col--1-2--xs, .vl-col--2-4--xs, .vl-col--3-6--xs, .vl-col--6-12--xs {
    flex-basis: 50%;
    max-width: 50%;
    min-width: 50%; }

  .vl-col--7-12--xs {
    flex-basis: 58.33333%;
    max-width: 58.33333%;
    min-width: 58.33333%; }

  .vl-col--2-3--xs, .vl-col--4-6--xs, .vl-col--8-12--xs {
    flex-basis: 66.66667%;
    max-width: 66.66667%;
    min-width: 66.66667%; }

  .vl-col--3-4--xs, .vl-col--9-12--xs {
    flex-basis: 75%;
    max-width: 75%;
    min-width: 75%; }

  .vl-col--5-6--xs, .vl-col--10-12--xs {
    flex-basis: 83.33333%;
    max-width: 83.33333%;
    min-width: 83.33333%; }

  .vl-col--11-12--xs {
    flex-basis: 91.66667%;
    max-width: 91.66667%;
    min-width: 91.66667%; }

  .vl-col--1-1--xs, .vl-col--2-2--xs, .vl-col--3-3--xs, .vl-col--4-4--xs, .vl-col--6-6--xs, .vl-col--12-12--xs {
    flex-basis: 100%;
    max-width: 100%;
    min-width: 100%; }

  .vl-grid--is-stacked {
    margin-top: -1.5rem; }

  .vl-grid--is-stacked > * {
    margin-top: 1.5rem; }

  .vl-push--reset--xs {
    margin-left: 0; }

  .vl-push--1-12--xs {
    margin-left: 8.33333%; }

  .vl-push--1-6--xs, .vl-push--2-12--xs {
    margin-left: 16.66667%; }

  .vl-push--1-4--xs, .vl-push--3-12--xs {
    margin-left: 25%; }

  .vl-push--1-3--xs, .vl-push--2-6--xs, .vl-push--4-12--xs {
    margin-left: 33.33333%; }

  .vl-push--5-12--xs {
    margin-left: 41.66667%; }

  .vl-push--1-2--xs, .vl-push--2-4--xs, .vl-push--3-6--xs, .vl-push--6-12--xs {
    margin-left: 50%; }

  .vl-push--7-12--xs {
    margin-left: 58.33333%; }

  .vl-push--2-3--xs, .vl-push--4-6--xs, .vl-push--8-12--xs {
    margin-left: 66.66667%; }

  .vl-push--3-4--xs, .vl-push--9-12--xs {
    margin-left: 75%; }

  .vl-push--5-6--xs, .vl-push--10-12--xs {
    margin-left: 83.33333%; }

  .vl-push--11-12--xs {
    margin-left: 91.66667%; }

  .vl-col--omega--xs {
    margin-left: auto; } }
@media screen and (min-width: 1280.1px) {
  .vl-grid--wide {
    margin-left: calc(-4.16667% - 3rem);
    margin-right: -4.16667%; } }
.vl-form-grid {
  position: relative;
  box-sizing: border-box;
  display: flex;
  margin-left: -1.5rem;
  flex-direction: row;
  flex: 0 1 auto;
  flex-wrap: wrap; }

.vl-form-grid > * {
  box-sizing: border-box;
  padding-left: 1.5rem;
  position: relative; }

.vl-form-grid--no-gutter {
  margin-left: 0; }

.vl-form-grid--no-gutter > * {
  padding-left: 0; }

.vl-form-grid--v-top {
  align-items: flex-start; }

.vl-form-grid--v-center {
  align-items: center; }

.vl-form-grid--v-bottom {
  align-items: flex-end; }

.vl-form-grid--v-stretch {
  align-items: stretch; }

.vl-form-grid--v-baseline {
  align-items: stretch; }

.vl-form-grid--align-start {
  justify-content: flex-start; }

.vl-form-grid--align-end {
  justify-content: flex-end; }

.vl-form-grid--align-center {
  justify-content: center; }

.vl-form-grid--align-space-between {
  justify-content: space-between; }

.vl-form-grid--align-space-around {
  justify-content: space-around; }

.vl-form-col--fit {
  flex: 1 0; }

.vl-form-col--flex {
  display: flex; }

.vl-form-col--1-12 {
  flex-basis: 8.33333%;
  max-width: 8.33333%;
  min-width: 8.33333%; }

.vl-form-col--1-6, .vl-form-col--2-12 {
  flex-basis: 16.66667%;
  max-width: 16.66667%;
  min-width: 16.66667%; }

.vl-form-col--1-4, .vl-form-col--3-12 {
  flex-basis: 25%;
  max-width: 25%;
  min-width: 25%; }

.vl-form-col--1-3, .vl-form-col--2-6, .vl-form-col--4-12 {
  flex-basis: 33.33333%;
  max-width: 33.33333%;
  min-width: 33.33333%; }

.vl-form-col--5-12 {
  flex-basis: 41.66667%;
  max-width: 41.66667%;
  min-width: 41.66667%; }

.vl-form-col--1-2, .vl-form-col--2-4, .vl-form-col--3-6, .vl-form-col--6-12 {
  flex-basis: 50%;
  max-width: 50%;
  min-width: 50%; }

.vl-form-col--7-12 {
  flex-basis: 58.33333%;
  max-width: 58.33333%;
  min-width: 58.33333%; }

.vl-form-col--2-3, .vl-form-col--4-6, .vl-form-col--8-12 {
  flex-basis: 66.66667%;
  max-width: 66.66667%;
  min-width: 66.66667%; }

.vl-form-col--3-4, .vl-form-col--9-12 {
  flex-basis: 75%;
  max-width: 75%;
  min-width: 75%; }

.vl-form-col--5-6, .vl-form-col--10-12 {
  flex-basis: 83.33333%;
  max-width: 83.33333%;
  min-width: 83.33333%; }

.vl-form-col--11-12 {
  flex-basis: 91.66667%;
  max-width: 91.66667%;
  min-width: 91.66667%; }

.vl-form-col--1-1, .vl-form-col--2-2, .vl-form-col--3-3, .vl-form-col--4-4, .vl-form-col--6-6, .vl-form-col--12-12 {
  flex-basis: 100%;
  max-width: 100%;
  min-width: 100%; }

.vl-form-grid--is-stacked {
  margin-top: -1.5rem; }

.vl-form-grid--is-stacked > * {
  margin-top: 1.5rem; }

.vl-form-push--reset {
  margin-left: 0; }

.vl-form-push--1-12 {
  margin-left: 8.33333%; }

.vl-form-push--1-6, .vl-form-push--2-12 {
  margin-left: 16.66667%; }

.vl-form-push--1-4, .vl-form-push--3-12 {
  margin-left: 25%; }

.vl-form-push--1-3, .vl-form-push--2-6, .vl-form-push--4-12 {
  margin-left: 33.33333%; }

.vl-form-push--5-12 {
  margin-left: 41.66667%; }

.vl-form-push--1-2, .vl-form-push--2-4, .vl-form-push--3-6, .vl-form-push--6-12 {
  margin-left: 50%; }

.vl-form-push--7-12 {
  margin-left: 58.33333%; }

.vl-form-push--2-3, .vl-form-push--4-6, .vl-form-push--8-12 {
  margin-left: 66.66667%; }

.vl-form-push--3-4, .vl-form-push--9-12 {
  margin-left: 75%; }

.vl-form-push--5-6, .vl-form-push--10-12 {
  margin-left: 83.33333%; }

.vl-form-push--11-12 {
  margin-left: 91.66667%; }

.vl-form-col--omega {
  margin-left: auto; }

@media screen and (max-width: 767px) {
  .vl-form-grid {
    position: relative;
    box-sizing: border-box;
    display: flex;
    margin-left: -1.5rem;
    flex-direction: row;
    flex: 0 1 auto;
    flex-wrap: wrap; }

  .vl-form-grid > * {
    box-sizing: border-box;
    padding-left: 1.5rem;
    position: relative; }

  .vl-form-grid--no-gutter--s {
    margin-left: 0; }

  .vl-form-grid--no-gutter--s > * {
    padding-left: 0; }

  .vl-form-grid--v-top--s {
    align-items: flex-start; }

  .vl-form-grid--v-center--s {
    align-items: center; }

  .vl-form-grid--v-bottom--s {
    align-items: flex-end; }

  .vl-form-grid--v-stretch--s {
    align-items: stretch; }

  .vl-form-grid--v-baseline--s {
    align-items: stretch; }

  .vl-form-grid--align-start--s {
    justify-content: flex-start; }

  .vl-form-grid--align-end--s {
    justify-content: flex-end; }

  .vl-form-grid--align-center--s {
    justify-content: center; }

  .vl-form-grid--align-space-between--s {
    justify-content: space-between; }

  .vl-form-grid--align-space-around--s {
    justify-content: space-around; }

  .vl-form-col--fit--s {
    flex: 1 0; }

  .vl-form-col--flex--s {
    display: flex; }

  .vl-form-col--1-12--s {
    flex-basis: 8.33333%;
    max-width: 8.33333%;
    min-width: 8.33333%; }

  .vl-form-col--1-6--s, .vl-form-col--2-12--s {
    flex-basis: 16.66667%;
    max-width: 16.66667%;
    min-width: 16.66667%; }

  .vl-form-col--1-4--s, .vl-form-col--3-12--s {
    flex-basis: 25%;
    max-width: 25%;
    min-width: 25%; }

  .vl-form-col--1-3--s, .vl-form-col--2-6--s, .vl-form-col--4-12--s {
    flex-basis: 33.33333%;
    max-width: 33.33333%;
    min-width: 33.33333%; }

  .vl-form-col--5-12--s {
    flex-basis: 41.66667%;
    max-width: 41.66667%;
    min-width: 41.66667%; }

  .vl-form-col--1-2--s, .vl-form-col--2-4--s, .vl-form-col--3-6--s, .vl-form-col--6-12--s {
    flex-basis: 50%;
    max-width: 50%;
    min-width: 50%; }

  .vl-form-col--7-12--s {
    flex-basis: 58.33333%;
    max-width: 58.33333%;
    min-width: 58.33333%; }

  .vl-form-col--2-3--s, .vl-form-col--4-6--s, .vl-form-col--8-12--s {
    flex-basis: 66.66667%;
    max-width: 66.66667%;
    min-width: 66.66667%; }

  .vl-form-col--3-4--s, .vl-form-col--9-12--s {
    flex-basis: 75%;
    max-width: 75%;
    min-width: 75%; }

  .vl-form-col--5-6--s, .vl-form-col--10-12--s {
    flex-basis: 83.33333%;
    max-width: 83.33333%;
    min-width: 83.33333%; }

  .vl-form-col--11-12--s {
    flex-basis: 91.66667%;
    max-width: 91.66667%;
    min-width: 91.66667%; }

  .vl-form-col--1-1--s, .vl-form-col--2-2--s, .vl-form-col--3-3--s, .vl-form-col--4-4--s, .vl-form-col--6-6--s, .vl-form-col--12-12--s {
    flex-basis: 100%;
    max-width: 100%;
    min-width: 100%; }

  .vl-form-grid--is-stacked {
    margin-top: -1.5rem; }

  .vl-form-grid--is-stacked > * {
    margin-top: 1.5rem; }

  .vl-form-push--reset--s {
    margin-left: 0; }

  .vl-form-push--1-12--s {
    margin-left: 8.33333%; }

  .vl-form-push--1-6--s, .vl-form-push--2-12--s {
    margin-left: 16.66667%; }

  .vl-form-push--1-4--s, .vl-form-push--3-12--s {
    margin-left: 25%; }

  .vl-form-push--1-3--s, .vl-form-push--2-6--s, .vl-form-push--4-12--s {
    margin-left: 33.33333%; }

  .vl-form-push--5-12--s {
    margin-left: 41.66667%; }

  .vl-form-push--1-2--s, .vl-form-push--2-4--s, .vl-form-push--3-6--s, .vl-form-push--6-12--s {
    margin-left: 50%; }

  .vl-form-push--7-12--s {
    margin-left: 58.33333%; }

  .vl-form-push--2-3--s, .vl-form-push--4-6--s, .vl-form-push--8-12--s {
    margin-left: 66.66667%; }

  .vl-form-push--3-4--s, .vl-form-push--9-12--s {
    margin-left: 75%; }

  .vl-form-push--5-6--s, .vl-form-push--10-12--s {
    margin-left: 83.33333%; }

  .vl-form-push--11-12--s {
    margin-left: 91.66667%; }

  .vl-form-col--omega--s {
    margin-left: auto; } }
@media screen and (min-width: 1280.1px) {
  .vl-form-grid--wide {
    margin-left: calc(-4.16667% - 3rem);
    margin-right: -4.16667%; } }
.vl-page {
  width: 100%;
  background-color: #fff; }

.vl-main-content {
  outline: none;
  position: relative; }

.vl-region {
  margin: 0 auto;
  padding: 3rem 0 6rem; }
  @media screen and (max-width: 767px) {
    .vl-region {
      padding: 3rem 0; } }
  .vl-region.vl-region--no-space {
    padding: 0; }
  .vl-region.vl-region--no-space-bottom {
    padding-bottom: 0; }
  .vl-region.vl-region--no-space-top {
    padding-top: 0; }

.vl-region:not(.vl-region--alt) + .vl-region:not(.vl-region--alt) {
  padding-top: 0; }

.vl-region--alt {
  background-color: #e8ebee; }

.vl-region:not(.vl-region--alt) + .vl-region--alt,
.vl-region--alt + .vl-region:not(.vl-region--alt) {
  padding-top: 6rem; }
  @media screen and (max-width: 767px) {
    .vl-region:not(.vl-region--alt) + .vl-region--alt,
    .vl-region--alt + .vl-region:not(.vl-region--alt) {
      padding-top: 3rem; } }

.vl-region:first-child {
  padding-top: 6rem; }
  @media screen and (max-width: 767px) {
    .vl-region:first-child {
      padding-top: 2rem; } }

.vl-region--small {
  padding: 1.5rem 0; }
  @media screen and (max-width: 767px) {
    .vl-region--small {
      padding: 2rem 0; } }

.vl-region--medium {
  padding: 3rem 0; }
  @media screen and (max-width: 767px) {
    .vl-region--medium {
      padding: 2rem 0; } }

.vl-region--bordered + .vl-region--bordered {
  border-top: 1px solid #e8ebee; }
  .vl-region--bordered + .vl-region--bordered.vl-region--alt {
    border-top-color: #fff; }

.vl-layout {
  position: relative;
  margin: 0 auto;
  min-width: 1024px;
  max-width: 1280px;
  padding: 0 3rem; }
  @media screen and (max-width: 1023px) {
    .vl-layout {
      width: auto;
      min-width: 768px;
      max-width: 1280px; } }
  @media screen and (max-width: 767px) {
    .vl-layout {
      width: auto;
      min-width: 0;
      padding: 0 1.5rem; } }

/*# sourceMappingURL=style.css.map */

            </style>
            <div id="alert" class="vl-alert" role="alert">
                <div id="content" class="vl-alert__content">
                    <p id="title" class="vl-alert__title"></p>
                    <div id="message" class="vl-alert__message">
                        <slot></slot>
                    </div>
                    <div id="actions" class="vl-alert__actions">
                        <slot name="actions"></slot>
                    </div>
                </div>
            </div>
        `);
    }

    connectedCallback() {
        this._actionsSlotElement.addEventListener('slotchange', (e) => {
            if (this._actionsSlotElement) {
                this._actionsSlotElement.assignedNodes().forEach(element => {
                    if (element instanceof HTMLButtonElement) {
                        element.classList.add("vl-button--narrow");
                    }
                });
            }
            this.__processActionsElementVisibility();
        });
        this.__processActionsElementVisibility();
    }

    static get _observedAttributes() {
        return ['icon', 'title', 'closable', 'type', 'size'];
    }

    get _classPrefix() {
        return 'vl-alert--';
    }

    get _titelElement() {
        return this._element.querySelector(".vl-alert__title");
    }

    get _iconElement() {
        return this._element.querySelector('.vl-alert__icon');
    }

    get _contentElement() {
        return this._element.querySelector('.vl-alert__content');
    }

    get _closeButtonElement() {
        return this._element.querySelector('.vl-alert__close');
    }

    get _actionsElement() {
        return this._element.querySelector('.vl-alert__actions');
    }

    get _actionsSlotElement() {
      return this._element.querySelector("slot[name='actions']");
    }

    /**
     * Schakelt de werking van de close button uit zodat de alert niet gesloten kan worden.
     * 
     * @Return {void}
     */
    disableClosable() {
        if (this._closeButtonElement) {
            this._closeButtonElement.removeEventListener('click', this.__removeAlert);
        }
    }

    _getIconTemplate(newValue) {
        return this._template(`
            <div class="vl-alert__icon">
                <span is="vl-icon" icon="${newValue}"></span>
            </div>
        `);
    };

    _getCloseButtonTemplate() {
        return this._template(`
            <button id="close" class="vl-alert__close" type="button">
                <i class="vl-vi vl-vi-cross" aria-hidden="true"></i>
                <span class="vl-u-visually-hidden">Melding sluiten</span>
            </button>
        `);
    }

    _getActionsTemplate() {
        return this._template(`
            <div class="vl-alert__actions"></div>
        `);
    }

    _iconChangedCallback(oldValue, newValue) {
        if (this._iconElement) {
            this._iconElement.remove();
        }

        if (newValue != undefined) {
            this._element.insertBefore(this._getIconTemplate(newValue), this._element.firstChild);
        }
    };

    _titleChangedCallback(oldValue, newValue) {
        this._titelElement.textContent = newValue;
    };

    _closableChangedCallback(oldValue, newValue) {
        if (this._closeButtonElement) {
            this._closeButtonElement.remove();
        }

        if (newValue != undefined) {
            const closeButtonTemplate = this._getCloseButtonTemplate();
            closeButtonTemplate.querySelector('button').addEventListener('click', this.__removeAlert);
            this._element.appendChild(closeButtonTemplate);
        }
    }

    _typeChangedCallback(oldValue, newValue) {
        if (["success", "warning", "error","cta"].indexOf(newValue) >= 0) {
            this._changeClass(this._element, oldValue, newValue);
        } else {
            this._element.classList.remove(this._classPrefix + oldValue);
        }
    }

    _sizeChangedCallback(oldValue, newValue) {
        if (["large", "small"].indexOf(newValue) >= 0) {
            this._changeClass(this._element, oldValue, newValue);
        } else {
            this._element.classList.remove(this._classPrefix + oldValue);
        }
    }

    __processActionsElementVisibility() {
        if (this._actionsSlotElement && this._actionsSlotElement.assignedElements().length == 0) {
            this._actionsElement.style.display = 'none';
        } else {
            this._actionsElement.style.display = 'block';
        }
    }

    __removeAlert() {
        this.getRootNode().host.remove();
    }
}

define('vl-alert', VlAlert);

