// 現在のプレイヤーを示す変数。初期値は 'X'
let currentPlayer = 'X';
// 現在のターンを示す文字列を格納する要素
let statusText = document.getElementById('statusText');

/**
 * プレイヤーのターンを交代します。
 * 現在のプレイヤーが 'X' であれば 'O' に、'O' であれば 'X' に変更します。
 */
function swapTurns() {
  // 現在のプレイヤーが 'X' の場合は 'O' に、そうでなければ 'X' に変更
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  statusText.textContent = `${currentPlayer}'s Turn`;
}

/**
 * 現在のプレイヤーのマークを取得します。
 * @returns {string} - 現在のプレイヤーのマーク ('X' または 'O')
 */
function getCurrentPlayer() {
  return currentPlayer;
}

/**
 * プレイヤーのターンをリセットします。
 * 初期状態に戻し、現在のプレイヤーを 'X' に設定します。
 */
function resetPlayer() {
  currentPlayer = 'X';
}

// `swapTurns`, `getCurrentPlayer`, `resetPlayer` 関数を外部から使用できるようにエクスポート
export { swapTurns, getCurrentPlayer, resetPlayer };
