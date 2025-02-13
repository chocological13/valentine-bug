export interface Bug {
  id: number;
  x: number;
  y: number;
  speed: number;
}

export interface Heart {
  id: number;
  x: number;
  y: number;
}

export interface GameState {
  stage: number;
  score: number;
  isDebugging: boolean;
  isMuted: boolean;
}