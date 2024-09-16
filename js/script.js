// モジュールのインポート
import { handleClick, restartGame } from './game/game.js'; // ゲームのクリック処理とリセット処理をインポート
import { initializeUI } from './ui.js'; // UIの初期化関数をインポート

// UIを初期化し、クリックイベントとリセットイベントを設定
initializeUI(handleClick, restartGame);
