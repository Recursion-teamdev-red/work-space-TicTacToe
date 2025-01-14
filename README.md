# Recursion チーム開発課題: Tic Tac Toe

## 概要

「Tic Tac Toe」は、Recursionのチーム開発課題として制作されたWebアプリケーションです。このアプリは、シンプルな三目並べゲームを実装したWebアプリケーションです。プレイヤーは交互に「X」と「O」を配置し、縦・横・斜めのいずれかに自分のマークを3つ揃えることで勝利を目指します。

## デモ
https://github.com/user-attachments/assets/ecb07b19-d44d-4a5b-9192-320cad93bb31


## 機能

- プレイヤーは「X」と「O」を交互に置く
- 勝利条件を満たすとゲームが終了し、結果が表示される
- 全てのセルが埋まっても勝敗が決まらない場合は引き分け
- リセットボタンを押すことで、ゲームを再度開始可能

## 使用技術一覧

### 言語とフレームワーク

- **HTML5**
- **CSS3**
- **JavaScript (ES6)**

### その他

- **VSCode**  
  開発環境として使用。

- **Google Chrome**  
  動作確認やデバッグに使用するウェブブラウザ。

## インストール手順

1. リポジトリをクローンします。

    ```bash
    git clone [https://github.com/your-username/tic-tac-toe.git](https://github.com/Recursion-teamdev-red/work-space-TicTacToe)
    ```

2. 必要な依存関係はありませんので、`index.html`をブラウザで開くだけで動作します。

## 使用方法

1. ブラウザで`index.html`を開きます。
2. ゲームボード上の任意のセルをクリックして、「X」か「O」を置きます。
3. 勝利条件を満たしたプレイヤーが表示されるか、引き分けが判定されます。
4. リセットボタンを押して、ゲームを最初からやり直すことができます。

## ファイル構成

- `index.html`: アプリケーションのメインHTMLファイル
- `style.css`: アプリケーションのスタイルシート
- `js/`
  - `game.js`: ゲームのロジック（クリック処理、ターン管理、リセット処理）
  - `ui.js`: UIの初期化とイベントの設定
  - `win.js`: 勝利条件のチェックロジック
  - `draw.js`: 引き分け判定ロジック
  - `endgame.js`: ゲーム終了処理ロジック
  - `turn.js`: プレイヤーのターン管理ロジック

## コントリビューション

1. リポジトリをフォークし、新しいブランチを作成します。
2. 修正を加え、コミットします。
3. プルリクエストを送信してください。

## 連絡先

- [uiuxadeadev](https://github.com/uiuxadeadev)
- [mkanehara](https://github.com/mkanehara)
