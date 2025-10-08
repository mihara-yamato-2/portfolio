import React from "react";

const NoiseHackPrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            NoiseHack - Focus Sounds プライバシーポリシー
          </h1>
          <p className="text-lg text-gray-600">
            最終更新日: 2025年10月8日
          </p>
        </div>

        {/* Content */}
        <div className="bg-white shadow-xl rounded-lg p-8 space-y-8">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              1. はじめに
            </h2>
            <p className="text-gray-700 leading-relaxed">
              NoiseHack - Focus Sounds（以下「本アプリ」）は、ユーザーのプライバシーを重視しています。
              本プライバシーポリシーは、本アプリがどのような情報を収集し、どのように使用するかについて説明します。
            </p>
          </section>

          {/* Information Collection */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              2. 収集する情報
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium text-gray-800 mb-2">
                  2.1 個人情報
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  本アプリは以下の個人情報を収集しません：
                </p>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-700">氏名、メールアドレス、電話番号</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-700">位置情報</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-700">連絡先情報</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-700">写真やカメラへのアクセス</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-700">マイクロフォンへのアクセス（録音機能なし）</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-800 mb-2">
                  2.2 自動的に収集される情報
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  本アプリは以下の技術的情報のみを使用します：
                </p>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-700">オーディオ再生状態: 音楽の再生・一時停止状態の管理</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-700">アプリ使用状況: クラッシュレポート（匿名）</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-700">デバイス情報: iOS バージョン、デバイスモデル（匿名）</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Information Usage */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              3. 情報の使用目的
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              収集される情報は以下の目的でのみ使用されます：
            </p>
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-700">音楽再生機能の提供: 高品質な音声体験</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-700">アプリの安定性向上: クラッシュやバグの修正</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-700">ユーザー体験の改善: パフォーマンスの最適化</p>
              </div>
            </div>
          </section>

          {/* Data Sharing */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              4. 情報の共有
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              本アプリは、ユーザーの情報を第三者と共有しません：
            </p>
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-700">広告ネットワークなし</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-700">アナリティクスサービスなし</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-700">データブローカーへの販売なし</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-700">ソーシャルメディアとの連携なし</p>
              </div>
            </div>
          </section>

          {/* Data Security */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              5. データの保存
            </h2>
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-700">ローカル保存: 音楽再生設定はデバイス内にのみ保存</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-700">クラウド同期: なし</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-700">サーバー送信: なし</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-700">データの暗号化: デバイス標準のセキュリティ機能を使用</p>
              </div>
            </div>
          </section>

          {/* Audio Files */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              6. 音声ファイルについて
            </h2>
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-700">音声コンテンツ: Google Drive上でホストされた音声ファイルを再生</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-700">ストリーミング: 音声はリアルタイムでストリーミング再生</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-700">録音機能: なし</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-700">音声データの保存: 音声ファイルはデバイスに永続保存されません</p>
              </div>
            </div>
          </section>

          {/* Children's Privacy */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              7. 子どものプライバシー
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              本アプリは全年齢対象（4+）ですが：
            </p>
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-700">13歳未満の子どもから意図的に個人情報を収集しません</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-700">年齢確認機能はありません</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-700">保護者の監督下での使用を推奨します</p>
              </div>
            </div>
          </section>

          {/* Security */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              8. セキュリティ
            </h2>
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-700">データ暗号化: iOS標準のセキュリティ機能を使用</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-700">ネットワーク通信: HTTPS接続による音声ファイルの取得のみ</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-700">脆弱性対応: 定期的なセキュリティアップデート</p>
              </div>
            </div>
          </section>

          {/* User Rights */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              9. ユーザーの権利
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              本アプリでは以下が保証されます：
            </p>
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-700">データアクセス権: 個人データを収集していないため該当なし</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-700">データ削除権: アプリをアンインストールすることで全データが削除</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-700">データポータビリティ: 個人データを収集していないため該当なし</p>
              </div>
            </div>
          </section>

          {/* Cookies and Tracking */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              10. Cookie とトラッキング
            </h2>
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-700">Cookie: 使用しません</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-700">トラッキング: 実装していません</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-700">広告ID: 収集しません</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-700">行動追跡: 行いません</p>
              </div>
            </div>
          </section>

          {/* Third Party Services */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              11. 第三者サービス
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              本アプリが使用する第三者サービス：
            </p>
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-700">Google Drive: 音声ファイルのホスティング（直接アクセスのみ）</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-700">Apple App Store: アプリ配布プラットフォーム</p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed mt-4">
              これらのサービスには独自のプライバシーポリシーが適用されます。
            </p>
          </section>

          {/* International Data Transfer */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              12. 国際的なデータ転送
            </h2>
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-700">データの国外転送: 個人データを収集していないため該当なし</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-700">GDPR 準拠: EU圏内ユーザーのプライバシー権利を尊重</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-700">CCPA 準拠: カリフォルニア州消費者プライバシー法に準拠</p>
              </div>
            </div>
          </section>

          {/* Changes to Policy */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              13. プライバシーポリシーの変更
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              本プライバシーポリシーの重要な変更がある場合：
            </p>
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-700">アプリアップデートを通じて通知</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-700">App Store の説明文に記載</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-700">30日前の事前通知</p>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              14. お問い合わせ先
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              プライバシーに関するご質問やご懸念がございましたら、以下までご連絡ください：
            </p>
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="space-y-2">
                <p className="text-gray-700">
                  <strong>開発者:</strong> 三原 大和 (Yamato Mihara)
                </p>
                <p className="text-gray-700">
                  <strong>Email:</strong> mihayama1005@gmail.com
                </p>
                <p className="text-gray-700">
                  <strong>対応言語:</strong> 日本語、英語
                </p>
                <p className="text-gray-700">
                  <strong>回答期間:</strong> 10営業日以内を目安とする
                </p>
              </div>
            </div>
          </section>

          {/* Legal Basis */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              15. 法的根拠（GDPR対応）
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              本アプリがEU圏内で提供される場合の法的根拠：
            </p>
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-700">正当な利益: アプリの基本機能提供</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-700">契約の履行: サービス提供契約</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-700">法的義務の遵守: 適用法の遵守</p>
              </div>
            </div>
          </section>

          {/* Note */}
          <section>
            <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm text-yellow-800">
                <strong>注意:</strong> このプライバシーポリシーは、NoiseHack - Focus Soundsアプリの現在の機能に基づいて作成されています。
                アプリの機能が変更された場合は、それに応じてプライバシーポリシーも更新する必要があります。
              </p>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="text-center mt-12">
          <a
            href="/#/projects"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            ← プロジェクト一覧に戻る
          </a>
        </div>
      </div>
    </div>
  );
};

export default NoiseHackPrivacyPolicy;