import { getCurrentPlayer, swapTurns } from './turn.js';
import { checkGameStatus } from './game.js';

/**
 * CPUの手を決定し、ランダムな空きセルにマークをつける
 */
function cpuMove() {
  const cells = document.querySelectorAll('[data-cell]');
  const emptyCells = [...cells].filter((cell) => cell.textContent === '');

  if (emptyCells.length === 0) return; // 空きセルがない場合は終了

  // ランダムな空きセルを選択してマークをつける
  const randomIndex = Math.floor(Math.random() * emptyCells.length);
  const randomCell = emptyCells[randomIndex];
  randomCell.textContent = getCurrentPlayer();

  // ゲーム状態をチェック
  checkGameStatus();
}

export { cpuMove };
