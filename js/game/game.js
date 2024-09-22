// モジュールのインポート
import { checkWin } from './win.js'; // 勝利判定のロジックをインポート
import { isDraw } from './draw.js'; // 引き分け判定のロジックをインポート
import { swapTurns, getCurrentPlayer, resetPlayer } from './turn.js'; // ターン管理のロジックをインポート
import { endGame } from './endgame.js'; // ゲーム終了処理のロジックをインポート
import { cpuMove } from './cpu.js';

// セル要素を取得
const cells = document.querySelectorAll('[data-cell]');
let isGameOver = false; // ゲームの終了状態を管理するフラグ

/**
 * ゲームの勝利・引き分けの判定を行い、必要に応じてターンを交代します。
 */
function checkGameStatus() {
  // 勝利判定をチェック
  if (checkWin(getCurrentPlayer())) {
    isGameOver = true;
    endGame(false); // 勝利した場合の処理
  } else if (isDraw()) {
    isGameOver = true;
    endGame(true); // 引き分けの場合の処理
  } else {
    swapTurns(); // ターンを交代

    // CPUのターンだった場合
    if (getCurrentPlayer() === 'O') {
      setTimeout(cpuMove, 500); // CPUの手を少し遅らせて実行
    }
  }
}

/**
 * セルがクリックされたときの処理を実行します。
 * @param {Event} e - クリックイベント
 */
function handleClick(e) {
  const cell = e.target;

  // セルが既に埋まっているか、ゲームが終了している場合は処理を中断
  if (cell.textContent !== '' || isGameOver) return;

  // プレイヤーのマークをセルに設定
  cell.textContent = getCurrentPlayer();

  // ゲーム状態をチェック
  checkGameStatus();
}

/**
 * ゲームをリセットします。
 */
function restartGame() {
  resetPlayer(); // プレイヤーの状態をリセット
  isGameOver = false; // ゲーム終了フラグをリセット

  // セルの内容をクリア
  cells.forEach((cell) => {
    cell.textContent = '';
    cell.removeEventListener('click', handleClick);
    cell.addEventListener('click', handleClick, { once: true });
  });
  // メッセージエリアを取得
  const messageArea = document.getElementById('message');
  // メッセージエリアを非表示
  messageArea.style.display = 'none';
}

// `handleClick` と `restartGame` を外部から使用できるようにエクスポート
export { checkGameStatus, handleClick, restartGame };
