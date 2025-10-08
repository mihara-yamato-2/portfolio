import type { ResearchPaper } from "../types";

// English: Add your academic publications here.
// 日本語: ここにあなたの学術論文を追加してください。

export const researchPapers: ResearchPaper[] = [
  {
    id: "paper-1",
    title: "アダプタマージによるスケーラブルなドメイン増分学習",
    authors: ["三原 大和", "福田 拓真", "川本 一彦"],
    conference: "情報処理学会学会誌",
    year: 2025,
    abstract:
      "ドメイン増分学習では、異なるドメインのデータを順次学習しながら、過去のドメインデータにアクセスできない状況でモデルを構築する必要がある。本研究は、このような制約下で、破滅的忘却を防ぎつつ、推論時間を一定に保つことでスケーラブルな推論を実現する手法を提案する。提案手法は、事前訓練モデルに対して各ドメイン専用のアダプタ（軽量なネットワークモジュール）を訓練し、それらを平均化して一つに統合する。推論時には、ドメイン間の差異を減らすため、各ドメインのプロトタイプ例の平均差でアライメント調整する。画像分類タスク実験を通じて、破滅的忘却と推論のスケーラビリティが両立できることを検証する。",
    pdfUrl: "/portfolio/papers/2025_IPSJ_Mihara.pdf",
    category: "Journal",
  },
];
