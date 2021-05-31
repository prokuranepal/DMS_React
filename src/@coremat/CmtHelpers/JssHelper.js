const pxToRem = (target, context = '10px') => {
  return (target / context) * '1rem';
};

const componentColors = [
  'amber',
  'brown',
  'orange',
  'purple',
  'primary',
  'red',
  'green',
  'blue',
  'grey',
  'yellow',
  'secondary',
];

const getBackgroundStyle = (backgroundColor, backgroundImage, gradientDirection) => {
  if (backgroundImage)
    return {
      backgroundImage: `url(${backgroundImage})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: `center center`,
      backgroundSize: 'cover',
    };

  if (typeof backgroundColor === 'string' || (Array.isArray(backgroundColor) && backgroundColor.length === 1)) {
    return { backgroundColor: backgroundColor.toString() };
  }

  if (Array.isArray(backgroundColor) && backgroundColor.length > 1) {
    const [firstColor] = backgroundColor[0].split(' ');
    return {
      backgroundColor: firstColor,
      backgroundImage: gradientDirection
        ? `linear-gradient(${gradientDirection}, ${backgroundColor.join(', ')})`
        : `linear-gradient(${backgroundColor.join(', ')})`,
    };
  }
  return null;
};

const getOverLayStyle = overlay => {
  if (overlay.colors) {
    if (typeof overlay.colors === 'string' || (Array.isArray(overlay.colors) && overlay.colors.length === 1)) {
      return {
        backgroundColor: overlay.colors.toString(),
        opacity: overlay.opacity,
      };
    } else if (Array.isArray(overlay.colors) && overlay.colors.length > 1) {
      const [firstColor] = overlay.colors[0].split(' ');
      return {
        backgroundColor: firstColor,
        backgroundImage: overlay.direction
          ? `linear-gradient(${overlay.direction}, ${overlay.colors.join(', ')})`
          : `linear-gradient(${overlay.colors.join(', ')})`,
        opacity: overlay.opacity,
      };
    }
  }
  return null;
};

const getSeparatorStyle = (separator, tobBorder = false) => {
  if (separator.color) {
    const borderWidth = separator.borderWidth ? separator.borderWidth : 1;
    const borderStyle = separator.borderStyle ? separator.borderStyle : 'solid';

    if (tobBorder) {
      return {
        borderTop: `${borderWidth}px ${borderStyle} ${separator.color}`,
      };
    }

    return {
      borderBottom: `${borderWidth}px ${borderStyle} ${separator.color}`,
    };
  }

  return null;
};

const hexToRgba = input => {
  input = input + '';
  input = input.replace('#', '');
  let hexRegex = /[0-9A-Fa-f]/g;
  if (!hexRegex.test(input) || (input.length !== 3 && input.length !== 6)) {
    throw new Error('input is not a valid hex color.');
  }
  if (input.length === 3) {
    let first = input[0];
    let second = input[1];
    let last = input[2];
    input = first + first + second + second + last + last;
  }
  input = input.toUpperCase(input);
  let first = input[0] + input[1];
  let second = input[2] + input[3];
  let last = input[4] + input[5];
  return parseInt(first, 16) + ', ' + parseInt(second, 16) + ', ' + parseInt(last, 16);
};

export { hexToRgba, pxToRem, componentColors, getBackgroundStyle, getOverLayStyle, getSeparatorStyle };
