// モジュールのインポート
import { getCurrentPlayer } from './turn.js'; // ターン管理のロジックから現在のプレイヤーを取得

/**
 * ゲームの終了時に結果を表示します。
 * @param {boolean} draw - ゲームが引き分けだった場合は true、そうでなければ false
 */
function endGame(draw) {
  // ゲーム結果メッセージを表示するための要素を取得
  const messageText = document.getElementById('messageText'); // 結果メッセージを表示する要素
  const messageElement = document.getElementById('message'); // メッセージ全体を包む要素

  // 引き分けの場合の処理
  if (draw) {
    messageText.textContent = 'Draw!'; // メッセージテキストを「Draw!」に設定
  } else {
    // 勝者がいる場合の処理
    messageText.textContent = `${getCurrentPlayer()} Wins!`; // 現在のプレイヤーが勝者としてメッセージを設定
  }

  // メッセージ要素を表示
  messageElement.style.display = 'block'; // メッセージを表示するためにスタイルを変更
}

// `endGame` 関数を外部から使用できるようにエクスポート
export { endGame };
