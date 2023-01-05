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

export const displayScrollBtn = event => {
  const scrollBtn = document.getElementById('goTop');
  let top1 = document.documentElement.scrollTop;
  let top2 = document.scrollTop;

  if (top1 > 100 || top2 > 100) {
    scrollBtn.style.display = 'flex';
  } else {
    scrollBtn.style.display = 'none';
  };
};

export const displayOfferDetails = event => {
  const deviceWidth = window.innerWidth;
  let offerBoxInfo = document.getElementById(event.target.dataset.offerBox);
  let offerBox = event.path[1];
  let btn = event.target;

  if (deviceWidth < 768) {
    // For devices with smaller screen than a tablets.
    if (offerBoxInfo.style.height !== '300px') {
      offerBoxInfo.style.height = '300px';
    } else {
      offerBoxInfo.style.height = '44px';
    };
    // For laptops with smaller screen than a desktop monitor.
  } else if (deviceWidth < 992) {
    if (offerBoxInfo.style.height !== '400px') {
      offerBoxInfo.style.height = '400px';
      offerBox.style.height = '480px';
    } else {
      offerBoxInfo.style.height = '44px';
      offerBox.style.height = '235px';
    };

    if (btn.style.marginBottom === '30px') {
      btn.style.marginBottom = '0px';
    } else {
      btn.style.marginBottom = '30px';
    };
    // For every device with a bigger screen than laptops.
  } else {
    if (offerBoxInfo.style.height !== '400px') {
      offerBoxInfo.style.height = '400px';
      offerBox.style.height = '515px';
    } else {
      offerBoxInfo.style.height = '55px';
      offerBox.style.height = '305px';
    };

    if (btn.style.marginBottom === '0px') {
      btn.style.marginBottom = '30px';
    } else {
      btn.style.marginBottom = '0px';
    };  
  }
};