import React from 'react';

const validationComponet = (props) => {
    let textValidationResult = 'Text too short';
    let textValidationResultColor = 'red';

    if (props.textLegnth > 4) {
      textValidationResult = 'Text long enough';
      textValidationResultColor = 'green';
    }

    const style = {
      color: textValidationResultColor
    };

    return (
      <div>
        <p style={style}>{textValidationResult}</p>
      </div>
    );
}

export default validationComponet;
