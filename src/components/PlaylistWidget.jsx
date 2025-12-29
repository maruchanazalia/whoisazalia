import { FaSpotify, FaPlay } from 'react-icons/fa';
import './PlaylistWidget.css';

const PlaylistWidget = ({ songs = [] }) => {
  const defaultSongs = [
    { name: 'PM', artist: 'MVLDITOS HOMBRES', spotifyUrl: 'https://open.spotify.com/intl-es/track/46ePpPGWWhOb37HFqQVsHA?si=4234c4514afc42d6' },
    { name: 'Shock en mi costa', artist: 'Plastical people', spotifyUrl: 'https://open.spotify.com/intl-es/track/46ePpPGWWhOb37HFqQVsHA?si=c3a1dc8923da4365' },
    { name: 'Trouble', artist: 'Coldplay', spotifyUrl: 'https://open.spotify.com/intl-es/track/0R8P9KfGJCDULmlEoBagcO?si=46cec71bb401482b' },
  ];

  const playlist = songs.length > 0 ? songs : defaultSongs;

  return (
    <div className="neuromorphic p-4 w-full">
      <div className="flex items-center gap-2 mb-3">
        <FaSpotify className="text-2xl text-green-500" />
        <div>
          <h3 className="text-sm font-semibold text-gray-800">Mi Playlist</h3>
          <p className="text-xs text-gray-500">La música dice todo lo que no puedo decir</p>
        </div>
      </div>
      <div className="space-y-2">
        {playlist.map((song, index) => (
          <a
            key={index}
            href={song.spotifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 p-2 rounded-lg hover:bg-white/50 transition-all duration-300 group"
          >
            <div className="w-8 h-8 bg-pastel-green rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <FaPlay className="text-gray-700 text-xs ml-0.5" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium text-gray-800 truncate">{song.name}</p>
              <p className="text-xs text-gray-500 truncate">{song.artist}</p>
            </div>
          </a>
        ))}
      </div>
      <a
        href="https://open.spotify.com/user/22zueuz42qmi6awlymf3rin4i?si=859c06d8b34946c8"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 inline-flex items-center gap-2 text-xs text-green-600 hover:text-green-700 font-medium"
      >
        Ver en Spotify <FaSpotify />
      </a>
    </div>
  );
};

export default PlaylistWidget;

