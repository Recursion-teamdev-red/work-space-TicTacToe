// モジュールのインポート
import { checkWin } from './win.js'; // 勝利判定のロジックをインポート
import { isDraw } from './draw.js'; // 引き分け判定のロジックをインポート
import { swapTurns, getCurrentPlayer, resetPlayer } from './turn.js'; // ターン管理のロジックをインポート
import { endGame } from './endgame.js'; // ゲーム終了処理のロジックをインポート

// セル要素を取得
const cells = document.querySelectorAll('[data-cell]');
let isGameOver = false; // ゲームの終了状態を管理するフラグ

/**
 * セルがクリックされたときの処理を実行します。
 * @param {Event} e - クリックイベント
 */
function handleClick(e) {
  // クリックされたセルを取得
  let cell = e.currentTarget;

  // 現在のプレイヤーのマークをセルに設定
  cell.textContent = getCurrentPlayer();

  // 勝利判定をチェック
  if (checkWin(getCurrentPlayer())) {
    // 勝利した場合の処理
    endGame(false);
  } else if (isDraw()) {
    // 引き分けの場合の処理
    endGame(true);
  } else {
    // 勝利も引き分けもない場合はターンを交代
    swapTurns();
  }
}

/**
 * ゲームをリセットします。
 */
function restartGame() {
  resetPlayer(); // プレイヤーの状態をリセット
  isGameOver = false; // ゲーム終了フラグをリセット

  // セルの内容をクリア
  cells.forEach(cell => {
    cell.textContent = "";
    cell.removeEventListener('click', handleClick);
    cell.addEventListener('click', handleClick, {once: true});
  })
  // メッセージエリアを取得
  const messageArea = document.getElementById('message');
  // メッセージエリアを非表示
  messageArea.style.display = "none";
}

// `handleClick` と `restartGame` を外部から使用できるようにエクスポート
export { handleClick, restartGame };
