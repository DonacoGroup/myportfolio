export const galleryFilter = () => {
    try {
        var Shuffle = window.Shuffle;

        class Demo {
            constructor(element) {
                if(element){
                    this.element = element;
                    this.shuffle = new Shuffle(element, {
                        itemSelector: '.picture-item',
                        sizer: element.querySelector('.my-sizer-element'),
                    });

                    // Log events.
                    this.addShuffleEventListeners();
                    this._activeFilters = [];
                    this.addFilterButtons();
                }
            }

            /**
             * Shuffle uses the CustomEvent constructor to dispatch events. You can listen
             * for them like you normally would (with jQuery for example).
             */
            addShuffleEventListeners() {
                this.shuffle.on(Shuffle.EventType.LAYOUT, (data) => {
                    console.log('layout. data:', data);
                });
                this.shuffle.on(Shuffle.EventType.REMOVED, (data) => {
                    console.log('removed. data:', data);
                });
            }

            addFilterButtons() {
                const options = document.querySelector('.filter-options');
                if (!options) {
                    return;
                }

                const filterButtons = Array.from(options.children);
                const onClick = this._handleFilterClick.bind(this);
                filterButtons.forEach((button) => {
                    button.addEventListener('click', onClick, false);
                });
            }

            _handleFilterClick(evt) {
                const btn = evt.currentTarget;
                const isActive = btn.classList.contains('active');
                const btnGroup = btn.getAttribute('data-group');

                this._removeActiveClassFromChildren(btn.parentNode);

                let filterGroup;
                if (isActive) {
                    btn.classList.remove('active');
                    filterGroup = Shuffle.ALL_ITEMS;
                } else {
                    btn.classList.add('active');
                    filterGroup = btnGroup;
                }

                this.shuffle.filter(filterGroup);
            }

            _removeActiveClassFromChildren(parent) {
                const { children } = parent;
                for (let i = children.length - 1; i >= 0; i--) {
                    children[i].classList.remove('active');
                }
            }
        }

        //document.addEventListener('DOMContentLoaded', () => {
            window.demo = new Demo(document.getElementById('grid'));
        //});
    } catch (err) {

    }
}

export const tobiiLightbox = () =>{
    try {
        const tobii = new window.Tobii()
    } catch (err) {

    }
}

export const startPreloader = () => {
    if(document.getElementById('preloader')){
        document.getElementById('preloader').style.visibility = 'visible';
        document.getElementById('preloader').style.opacity = '1';
    }
}

export const stopPreloader = () => {
    if(document.getElementById('preloader')){
        document.getElementById('preloader').style.visibility = 'hidden';
        document.getElementById('preloader').style.opacity = '0';
    }
}

export const startSpinner = () => {
    if(document.querySelector('#contact-btn .spinner-border')){
        document.querySelector('#contact-btn .spinner-border').style.visibility = 'visible';
        document.querySelector('#contact-btn .spinner-border').style.opacity = '1';
    }
}

export const stopSpinner = () => {
    if(document.querySelector('#contact-btn .spinner-border')){
        document.querySelector('#contact-btn .spinner-border').style.visibility = 'hidden';
        document.querySelector('#contact-btn .spinner-border').style.opacity = '0';
    }
}

export const fixPortfolio = () => {
    document.querySelector('#fix-portfolio').click()
}
export const loadItemFromLocalStorage = (field) => {
    try {
        const serializedItem = localStorage.getItem(field)
        if (serializedItem === null) return undefined
        return JSON.parse(serializedItem)
    } catch (e) {
        return undefined
    }
}
export const clearLocalstorage = () => {
    try {
        localStorage.clear()
    }
    catch (e) {
    }
}
export const saveItemToLocalStorage = (item, field) => {
    try {
        const serializedItem = JSON.stringify(item)
        localStorage.setItem(field, serializedItem)
    } catch (e) {
    }
}
export const loadItemFromSessionStorage = (field) => {
    try {
        const serializedItem = sessionStorage.getItem(field)
        if (serializedItem === null) return undefined
        return JSON.parse(serializedItem)
    } catch (e) {
        return undefined
    }
}
export const saveItemToSessionStorage = (item, field) => {
    try {
        const serializedItem = JSON.stringify(item)
        sessionStorage.setItem(field, serializedItem)
    } catch (e) {
    }
}

