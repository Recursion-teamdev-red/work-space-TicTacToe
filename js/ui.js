/**
 * UI要素の初期化を行い、クリックイベントを設定します。
 * @param {Function} handleClick - セルがクリックされたときに呼ばれる関数
 * @param {Function} restartGame - リセットボタンがクリックされたときに呼ばれる関数
 */
function initializeUI(handleClick, restartGame) {
    // セル要素をすべて取得
    const cells = document.querySelectorAll('[data-cell]');
    // リセットボタン要素を取得
    const restartButton = document.getElementById('restartButton');

    // 各セルにクリックイベントリスナーを追加
    cells.forEach(cell => {
        cell.addEventListener('click', handleClick);
    });

    // リセットボタンにクリックイベントリスナーを追加
    restartButton.addEventListener('click', restartGame);
}

// `initializeUI` 関数を外部から使用できるようにエクスポート
export { initializeUI };
