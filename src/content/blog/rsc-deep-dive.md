---
title: "React Server Components (RSC) を理解する"
date: "2024-03-10"
excerpt: "これからのReact開発において重要なRSCの概念と、それがもたらすメリット・デメリットについて解説します。"
tags: ["React", "RSC", "Frontend"]
---

# React Server Componentsとは？

React Server Components (RSC) は、サーバー上でレンダリングされるReactコンポーネントのことです。従来のSSR（Server-Side Rendering）とは異なり、コンポーネント単位でサーバー/クライアントの責務を分離できるのが特徴です。

## メリット

1.  **バンドルサイズの削減**: サーバーコンポーネントのコードはクライアントに送信されないため、JSバンドルが軽量化されます。
2.  **バックエンドへの直接アクセス**: DBやファイルシステムへ直接アクセスできるため、API層を介さずにデータを取得できます。

## 実際に使ってみて

Next.jsのApp Routerではデフォルトで全てのコンポーネントがServer Componentになります。最初は `useState` や `useEffect` が使えないことに戸惑いましたが、慣れるとデータの流れがシンプルになることに気づきました。

## 注意点

「インタラクティブなUI」には引き続きClient Componentが必要です。`"use client"` ディレクティブを適切に使い分けることが、モダンなReact開発の鍵となります。
