/* eslint-disable*/
offers = [];
const init = () => {
    document.querySelectorAll('#overview-tab-nav a').forEach((item) => {
        item.addEventListener('click', ($ev) => {
            $ev.preventDefault();
            $($ev.target).tab('show');
        });
    });
    const _collEls = document.querySelectorAll('[data-toggle=accordion]');
    for (let i = 0; i < _collEls.length; i++) {
        _collEls[i].addEventListener('click', function($ev) {
            const _dt = $ev.target.getAttribute('data-target');
            const _c = document.querySelectorAll('.accordion .collapse');
            for(let j = 0; j < _c.length; j++) {
                _c[j].classList.remove('show');
            }
            document.querySelector(`#collaps-content-${_dt}`).classList.add('show');
        });
    }
    _collEls[0].parentElement.parentElement.nextElementSibling.classList.add('show'); 
};

const initSearch = () => {
    $('#locSearchTermInput').selectize({
        persist: true,
        loadThrottle: 200,
        preload: true,
        valueField: 'place_id',
        labelField: 'description',
        options: [],
        copyClassesToDropdown: false,
        scrollDuration: 1,
        load: function(query, callback) {
            if(query === undefined || query === '' || query.trim() !== '') {
                query = "88239 Wangen"
            }
            document.querySelector('#locReadyIcon').style.display = "none";
            document.querySelector('#locLoadingIcon').style.display = "inline-block";
            fetch(`/api/locAutoComplete/${query}`)
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    document.querySelector('#locLoadingIcon').style.display = "none";
                    document.querySelector('#locReadyIcon').style.display = "inline-block";
                    return callback(data);
                }).catch((err) => {
                    document.querySelector('#locLoadingIcon').style.display = "none";
                    document.querySelector('#locReadyIcon').style.display = "inline-block";
                    console.log(err);
                    return callback();
                });
        },
        onInitialize: () => {
            document.querySelector('#locSearchTermInput + .custom-select').classList.remove('custom-select','mb-2','mr-sm-2');
        },
        onChange: (val) => {
            fetch(`/api/getInDistanceById/${val}/${document.querySelector('#locSearchRadiusInput').value}`)
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                }).catch((err) => {
                    console.log(err);
                });
        }
    });
    $('#categoryFilterSelect').selectize({
        onInitialize: () => {
            document.querySelector('#categoryFilterSelect + .custom-select').classList.remove('custom-select','mb-2','mr-sm-2');
        }
    });
    $('#resultsPerPageSelect').selectize({
        onInitialize: () => {
            document.querySelector('#resultsPerPageSelect + .custom-select').classList.remove('custom-select','mb-2','mr-sm-2');
        }
    });
};

const loadOffer = async () => {
    return await fetch('/api/offer').then((res) => res.json())
        .then(data => {
            offers = data;
            return data;
        }).catch(err => {
            console.log(err);
        });
};

const renderOffer = () => {};

(async () => {
    init();
    loadOffer();
    initSearch();
})();
