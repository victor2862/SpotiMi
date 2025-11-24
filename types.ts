export interface Song {
  id: string;
  title: string;
  artist: string;
  coverUrl: string;
  duration: string;
  lyrics: string;
}

export enum Tab {
  HOME = 'HOME',
  SEARCH = 'SEARCH',
  LIBRARY = 'LIBRARY'
}

export interface PlayerProps {
  song: Song | null;
  onClose: () => void;
  isPlaying: boolean;
  setIsPlaying: (playing: boolean) => void;
}