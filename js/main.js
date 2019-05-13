/* global $ */
$(document).ready(() => {

	const $change = $('#change');
	const $power = $('#power');
	const $stationName = $('#station-name');
	const $songName = $('#song-name');
	const $artistName = $('#artist-name');
	const $text = $('.text');
	const $albumArt = $('#album-art');
	const $radioMusic = $('#radio-music');


	const radio = {
		stations: [
			{
				name: 'Loriana\'s Station',
				songs: [{
						title: 'Crazy in Love',
						artist: 'Beyonce',
						art: 'media/crazyinlove.png',
						music: 'media/music/crazyInLove.m4a'
					}, {
						title: 'Toxic',
						artist: 'Britney Spears',
						art: 'media/toxic.png',
						music: 'media/music/toxic.m4a'
					}, {
						title: 'Nice',
						artist: 'The Carters',
						art: 'media/nice.png',
						music: 'media/music/nice.m4a'
					}, {
						title: 'Icebox',
						artist: 'Omarion',
						art: 'media/icebox.jpg',
						music: 'media/music/icebox.m4a'
					}]
			}, {
				name: 'Amelia\'s Station',
				songs: [{
						title: 'Holocene',
						artist: 'Bon Iver',
						art: 'media/holocene.jpg',
						music: 'media/music/holocene.m4a'
					}, {
						title: 'Severed',
						artist: 'The Decemberists',
						art: 'media/severed.jpg',
						music: 'media/music/severed.m4a'
					}, {
						title: 'Doing It to Death',
						artist: 'The Kills',
						art: 'media/doingittodeath.jpg',
						music: 'media/music/doingItToDeath.m4a'
					}, {
						title: 'You Brought This On Yourself',
						artist: 'Fields',
						art: 'media/youbroughtthisonyourself.jpg',
						music: 'media/music/youBrought.m4a'
					}]
			}, {
				name: 'Disney',
				songs: [{
						title: 'I\'ll Make a Man Out of You',
						artist: 'Donny Osmond & Chorus (Mulan)',
						art: 'media/mulan.jpg',
						music: 'media/music/mulan.m4a'
					}, {
						title: 'How Far I\'ll Go',
						artist: 'Auli\'i Cravalho (Moana)',
						art: 'media/moana.jpg',
						music: 'media/music/moana.m4a'
					}, {
						title: 'Be Our Guest',
						artist: 'Angela Lansbury & Jerry Orbach (Beauty and the Beast)',
						art: 'media/beautyandthebeast.jpg',
						music: 'media/music/beauty.m4a'
					}, {
						title: 'Hakuna Matata',
						artist: 'Various Artists (Lion King)',
						art: 'media/lionking.jpeg',
						music: 'media/music/hakuna.m4a'
					}]
			}],
		change: function() {
			const station = this.stations[Math.floor(Math.random() * this.stations.length)];
			const currentSong = station.songs[Math.floor(Math.random() * station.songs.length)];
			$stationName.html(station.name);
			$songName.html(currentSong.title);
			$artistName.html(currentSong.artist);
			$albumArt.attr('src', currentSong.art);
			$radioMusic.attr('src', currentSong.music).trigger('play');
		},
		stopMusic: function() {
			$('#radio-music').trigger('pause');
		}
	};

	const musicOff = () => {
		radio.stopMusic();
	};

	const shuffle = () => {
		radio.change();
	};

	$text.hide();
	$albumArt.hide();

	$change.on('click', shuffle);
	$power.on('click', () => {
		if ($stationName.html() === '' && $songName.html() === '' && $artistName.html() === '') {
			$text.show();
			$albumArt.show();
			$change.prop('disabled', false);
			shuffle();
		} else {
			$stationName.html('');
			$songName.html('');
			$artistName.html('');
			$change.prop('disabled', true);
			$text.hide();
			$albumArt.hide();
			musicOff();
		};
	});

});
