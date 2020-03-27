/* eslint-disable*/
var offers = [];
var offersResult = [];
var locationResult = [];
var markers = [];
var map;

const init = () => {
    document.querySelectorAll('#overview-tab-nav a').forEach((item) => {
        item.addEventListener('click', ($ev) => {
            $ev.preventDefault();
            $($ev.target).tab('show');
        });
    });
    initAccordion();
};

const initAccordion = () => {
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
}

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
                    document.querySelector('#locLoadingIcon').style.display = "none";
                    document.querySelector('#locReadyIcon').style.display = "inline-block";
                    return callback(data);
                }).catch((err) => {
                    document.querySelector('#locLoadingIcon').style.display = "none";
                    document.querySelector('#locReadyIcon').style.display = "inline-block";
                    console.log('autocomplete error:');
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
                    locationResult = data;
                }).catch((err) => {
                    console.log(err);
                });
        },
        onItemAdd: (val, $item) => {
            // console.log(val);
            // console.log($item);
            searchOffers('address', val);
        }
    });
    $('#categoryFilterSelect').selectize({
        onInitialize: () => {
            document.querySelector('#categoryFilterSelect + .custom-select').classList.remove('custom-select','mb-2','mr-sm-2');
        },
        onItemAdd: (val, $item) => {
            // console.log(val);
            // console.log($item);
            searchOffers('cat', val);
        }
    });
    $('#resultsPerPageSelect').selectize({
        onInitialize: () => {
            document.querySelector('#resultsPerPageSelect + .custom-select').classList.remove('custom-select','mb-2','mr-sm-2');
        },
        onItemAdd: (val, $item) => {
            // console.log(val);
            // console.log($item);
            searchOffers('itemsPerPage', val);
        }
    });
};

const loadOffers = async () => {
    return await fetch('/api/offer').then((res) => res.json())
        .then(data => {
            offers = data;
            offersResult = data;
            if(map !== undefined) addMarkers();
            return data;
        }).catch(err => {
            console.log(err);
        });
};

const renderOffers = (offers) => {
    let html = '';
    for(let i = 0; i < offers.length; i++) {
        html += `
            <div class="card">
                <div class="card-header" id="${offers[i].id}-heading">
                    <h6 class="mb-0">
                        <button class="btn btn-link collapsed" type="button" data-toggle="accordion" data-target="${i}" data-expanded="false" data-controls="${offers[i].id}">
                            ${offers[i].title}
                        </button>
                        <span class="badge badge-secondary">${offers[i].category.title}</span>
                    </h6>
                </div>
                <div class="collapse" data-parent="#offer-accordion" id="collaps-content-${i}" data-id="${offers[i].id}" aria-labelledby="${offers[i].id}-heading">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-4">
                                <p>Von: ${offers[i].provider.name}</p>
                            </div>
                            <div class="col-md-4">
                                <p>E-Mail: ${offers[i].provider.mail === "" ? `Keine E-Mail Adresse angegeben` : `<a href="tel:${offers[i].provider.mail}">${offers[i].provider.mail}</a>`}</p>
                            </p>
                            </div>
                            <div class="col-md-4">
                                <p>Telefon: ${offers[i].provider.phone === "" ? `Keine Telefonnummer angegeben` : `<a href="tel:${offers[i].provider.phone}">${offers[i].provider.phone}</a>`}</p>
                            </div>
                        </div>
                        <p class="card-text">
                            ${offers[i].description}
                        </p>
                    </div>
                </div>
            </div>
        `;
    }
    document.querySelector('#offer-accordion').innerHTML = html;
    initAccordion();
};

const searchOffers = (key, value) => {
    document.querySelector('#offer-accordion').innerHTML = '<div id="offers-loading"><i class="fas fa-3x fa-spinner fa-spin"></i></br><h6>Angebote werden geladen...</h6></div>';
    const cat = document.querySelector('#categoryFilterSelect').value;
    const radius = document.querySelector('#locSearchRadiusInput').value;
    const searchTerm = document.querySelector('#searchTermInput').value;
    const address = document.querySelector('#locSearchTermInput').value;
    const itemsPerPage = document.querySelector('#resultsPerPageSelect').value;
    const obj = {cat, radius, searchTerm, address, itemsPerPage};
    if(key && value) obj[key] = value;
    console.log(obj);
    var url = `/api/offer/find`;
    if (obj.cat) url += `&cat=${obj.cat}`;
    if (obj.searchTerm) url += `&searchTerm=${obj.searchTerm}`;
    if (obj.address) url += `&address=${obj.address}`;
    if (obj.radius) url += `&radius=${obj.radius}`;
    url = url.replace('find&','find?');
    fetch(url).then(res => res.json())
        .then(data => {
            renderOffers(data);
        });
};

const addMarkers = () => {
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
    }
    markers = [];
    for (var i = 0; i < offers.length; i++) {
        var latLng = {lat: offers[i].location.lat, lng: offers[i].location.long};
        markers.push(new google.maps.Circle({
            strokeColor: '#FF0000',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#FF0000',
            fillOpacity: 0.35,
            center: latLng,
            radius: offers[i].location.radius,
            editable: false,
            map: map,
        }));
    }
}

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 47.6883395, lng: 9.8316466 },
        zoom: 14
    });
    addMarkers();
}

(async () => {
    init();
    loadOffers();
    initSearch();
})();
