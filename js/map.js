function initMap() {
	const ren = {lat: 53.877043, lng: 18.240212};

	const map = new google.maps.Map(document.getElementById('map'), {
		zoom: 10,
		center: ren
	});

	const marker = new google.maps.Marker({
		position: ren,
		animation: google.maps.Animation.DROP,
		map: map
	});
}