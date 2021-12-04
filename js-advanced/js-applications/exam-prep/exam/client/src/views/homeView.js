import { html } from '../../node_modules/lit-html/lit-html.js';

const homeView = () => html`
    <section id="welcomePage">
        <div id="welcome-message">
            <h1>Welcome to</h1>
            <h1>My Music Application!</h1>
        </div>
    
        <div class="music-img">
            <img src="./images/musicIcons.webp">
        </div>
    </section>
`;

export default function (ctx) {
    ctx.render(homeView());
}