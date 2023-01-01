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
export const displayMenu = event => {
  const menu = document.getElementById('menu');
  const [bar1, bar2, bar3] = Array.from(document.querySelectorAll('[data-menu-bar]'));

  const crossIn = () => {
    bar1.style.transform = 'skewY(45deg)';
    bar1.style.top = '45%';
    bar1.style.backgroundColor = 'white';
    bar3.style.transform = 'skewY(-45deg)';
    bar3.style.bottom = '45%';
    bar3.style.backgroundColor = 'white';
    menu.style.top = '0';
  };

  const crossOut = () => {
    bar1.style.transform = 'unset';
    bar1.style.top = '0';
    bar1.style.backgroundColor = 'black';
    bar3.style.transform = 'unset';
    bar3.style.bottom = '0';
    bar3.style.backgroundColor = 'black';
    menu.style.top = '-220px';
  };

  if (bar2.style.left === '100px') {
    crossOut();
    setTimeout(bar2.style.left = '0', 400);
  } else {
    bar2.style.left = '100px';
    crossIn();
  };
};