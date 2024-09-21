/**
 * ゲームが引き分けかどうかをチェックします。
 * @returns {boolean} - ゲームが引き分けの場合は true、それ以外の場合は false
 */
function isDraw() {
  // すべてのセルが埋まっているかどうかを確認
  const cells = document.querySelectorAll('[data-cell]');
  let cellsFilled = true;
  cells.forEach(cell => {
    if(cell.textContent == "") cellsFilled = false;
  });
  return cellsFilled;
}

// `isDraw` 関数を外部から使用できるようにエクスポート
export { isDraw };
