'use strict';
(function () {
    console.log(this); // undefined after use strict
})();

const $ = function(selector) {
    const self = {
        element: document.querySelector(selector),
        addClass : (color) => {
            self.element.setAttribute('class', color);
            return self;
        },
        attr: (id) => {
            self.element.setAttribute('id', `button${id}`);
            return self;
        },
        on : (event) => {
            self.element.addEventListener(event,  function(e) {
                if(e.target.getAttribute('id') !== null) {
                    let getClassName = e.target.getAttribute('class');
                    getClassName = getClassName === 'red' ? 'green' : 'red';
                    e.target.setAttribute('class', getClassName);
                }
            });
            return self;
        }
    };
    return self;
}

let button = $('div > button').attr(1).addClass('red').on('click');
let button2 = $('div > button:nth-child(3)').attr(2).addClass('green').on('click');






