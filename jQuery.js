'use strict';
(function () {
    console.log(this); // undefined after use strict
})();

const $ = function(selector) {
    const self = {
        element: document.querySelector(selector),
        addClass : () => {
            self.element.setAttribute('class', 'red');
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

let button = $('div > button').attr(1).addClass().on('click');
let button2 = $('div > button:nth-child(3)').attr(2).addClass().on('click');






