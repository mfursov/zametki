import * as React from "react";
import * as ReactDOM from "react-dom";

export class HomePage extends React.Component<any, undefined> {

    public refs: {
        logoLabel: React.Component<any, any>
        logoSubLabel: React.Component<any, any>
    };

    render() {
        return (
            <div>
                <div className="hp-container">

                    <div className="hp-content">
                        <div className="hp-logo-block">
                            <div className="hp-logo-inner">
                                <h1 ref="logoLabel" className="glow in tlt">Zametki</h1>
                                <p ref="logoSubLabel" className="tlt hp-subtitle" data-in-effect="bounceInDown">Мои персональные заметки</p>
                            </div>
                        </div>

                        <div className="decal" />

                        <div className="fade text-center pt-5 f30px hp-menu">
                            <div><a>Вход</a></div>
                            <div><a>Регистрация</a></div>
                        </div>
                    </div>
                </div>
                <div className="hp-footer">
                    <div className="decal" />
                    <a className="f12px txt-muted">О сайте</a>
                </div>
            </div>
        );
    }

    componentDidMount() {
        const logoLabel = ReactDOM.findDOMNode(this.refs.logoLabel);
        // noinspection ReservedWordAsName
        $(logoLabel).fitText(0.5).textillate({in: {effect: 'flipInY'}});

        const logoSubLabel = ReactDOM.findDOMNode(this.refs.logoSubLabel);
        //noinspection ReservedWordAsName
        $(logoSubLabel).fitText(3.2, {maxFontSize: 18}).textillate({initialDelay: 1000, in: {delay: 3, shuffle: true}});

        const e = ReactDOM.findDOMNode(this);
        setTimeout(() => $(e).find('.fade').addClass('in'), 250);
        setTimeout(() => $(e).find('h1.glow').removeClass('in'), 2000);
    }
}