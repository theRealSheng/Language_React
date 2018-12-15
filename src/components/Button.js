import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {
  // Use for single variable in context
  // static contextType = LanguageContext;

  // render() {
  //   const text = this.context === 'english'? 'Submit': 'Enviar';
  //   return <button className="ui button primary">{text}</button>
  // }

  // Use for multiple variable in context
  renderSubmit = (value) => {
    return value === 'english' ? 'Submit' : 'Enviar';
  }

  renderButton = (color) => {
    return (
          <button className={`ui button ${color}`}>
            <LanguageContext.Consumer>
              {(value) => this.renderSubmit(value)}
            </LanguageContext.Consumer>
          </button>
    );
  }

  render() {
    return (
      <ColorContext.Consumer>
        {(color) => this.renderButton(color)}
      </ColorContext.Consumer>
    );
  }
}

export default Button;