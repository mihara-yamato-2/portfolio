# EmailJS 設定手順

このプロジェクトでは Contact ページで EmailJS を使用してメール送信機能を実装しています。

## 1. EmailJS アカウントの作成

1. [EmailJS](https://www.emailjs.com/)にアクセス
2. 無料アカウントを作成
3. ダッシュボードにログイン

## 2. メールサービスの設定

1. ダッシュボードで「Email Services」を選択
2. 「Add New Service」をクリック
3. Gmail, Outlook, Yahoo Mail などからサービスを選択
4. サービスの設定を完了し、Service ID をメモ

## 3. メールテンプレートの作成

1. ダッシュボードで「Email Templates」を選択
2. 「Create New Template」をクリック
3. 以下のテンプレートを設定：

```
件名: {{subject}}

差出人: {{from_name}}
メールアドレス: {{from_email}}

メッセージ:
{{message}}

---
このメールはポートフォリオサイトから送信されました。
```

4. Template ID をメモ

## 4. 環境変数の設定

プロジェクトルートの`.env`ファイルに以下を設定：

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

Public Key は EmailJS ダッシュボードの「Account」→「API Keys」で確認できます。

## 5. 動作確認

1. 開発サーバーを起動: `npm run dev`
2. Contact ページにアクセス
3. フォームに入力して送信テスト
4. 設定したメールアドレスにメールが届くことを確認

## フォールバック機能

EmailJS の設定が正しくない場合や送信に失敗した場合は、自動的に mailto リンクでメールクライアントが開かれるフォールバック機能が実装されています。

## トラブルシューティング

- 送信ボタンがクリックできない：全ての必須項目が入力されているか確認
- メールが届かない：EmailJS の設定とテンプレート変数名が一致しているか確認
- エラーが発生する：ブラウザの開発者ツールでコンソールエラーを確認
