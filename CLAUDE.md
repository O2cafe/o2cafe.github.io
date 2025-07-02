# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## プロジェクト概要

02Cafe（Web Application Development Clan）のポートフォリオサイト。Next.js 15.2.4 + App Router + shadcn/ui + Tailwind CSSで構築されたGitHub Pages用静的サイト。

## 開発コマンド

```bash
# 開発サーバー起動
npm run dev

# ESLintチェック
npm run lint

# プロダクションビルド（静的サイト生成）
npm run build

# GitHub Pagesデプロイ
npm run deploy
```

## GitHub Pagesデプロイ

**現在の設定**: `gh-pages`ブランチから公開
- `npm run deploy` でビルド済みファイルを`gh-pages`ブランチにプッシュ

**Alternative**: GitHub Actionsを使用してmainブランチへのプッシュで自動デプロイ可能

## アーキテクチャ

### Next.js設定
- `output: "export"` - 静的サイト生成モード
- `images.unoptimized: true` - 静的エクスポート用
- ビルド時ESLint・TypeScriptエラー無視設定

### 主要依存関係
- **UI**: shadcn/ui, Radix UI, Lucide React
- **アニメーション**: Framer Motion
- **スタイリング**: Tailwind CSS
- **フォーム**: React Hook Form + Zod

### コンポーネントパターン
- Client Componentは"use client"指定
- Framer Motionによるアニメーション多用
- パスエイリアス `@/*` でプロジェクトルート参照