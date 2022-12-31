const _getDomElement = (attribute, value) => {
  return document.querySelector(`[${attribute}="${value}"]`);
};

export const mapListToDOMElements = (listOfValues, attribute) => {
  const _viewElements = {};

  for (const value of listOfValues) {
    _viewElements[value] = _getDomElement(attribute, value);
  }

  return _viewElements;
};

export const setFocusAndTitle = () => {
  let heading = document.querySelector('h1');
  heading.focus();
  document.title = heading.innerText;
};

// EVENT FUNCTIONS
export const menuCross = event => {
  const listOfBars = Array.from(document.querySelectorAll('[data-menu-bar]'));
  const bar1 = listOfBars[0];
  const bar2 = listOfBars[1];
  const bar3 = listOfBars[2];

  const crossIn = () => {
    bar1.style.transform = 'skewY(45deg)';
    bar1.style.top = '45%';
    bar3.style.transform = 'skewY(-45deg)';
    bar3.style.bottom = '45%';
  };

  const crossOut = () => {
    bar1.style.transform = 'unset';
    bar1.style.top = '0';
    bar3.style.transform = 'unset';
    bar3.style.bottom = '0';
  };
  

  if (bar2.style.left === '100px') {
    crossOut();
    setTimeout(bar2.style.left = '0', 400);
  } else {
    bar2.style.left = '100px';
    crossIn();
  };
};