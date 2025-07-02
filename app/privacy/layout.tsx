import type React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PrivacyLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="min-h-screen bg-white dark:bg-black">
			<header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-black/95 dark:supports-[backdrop-filter]:bg-black/60">
				<div className="container flex h-16 items-center justify-between py-4">
					<div className="flex items-center gap-4">
						<Link href="/">
							<Button variant="ghost" size="sm" className="gap-2">
								<ArrowLeft className="h-4 w-4" />
								ホームに戻る
							</Button>
						</Link>
						<div className="h-6 w-px bg-gray-300 dark:bg-gray-700" />
						<h1 className="text-lg font-semibold">
							プライバシーポリシー
						</h1>
					</div>
					<Link
						href="/privacy"
						className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
					>
						アプリ一覧
					</Link>
				</div>
			</header>
			<main className="container mx-auto px-4 py-8 max-w-4xl">
				{children}
			</main>
			<footer className="border-t py-8">
				<div className="container mx-auto px-4 max-w-4xl">
					<div className="text-center text-sm text-gray-500 dark:text-gray-400">
						<p>© 2025 02Cafe. すべての権利を保有します。</p>
						<p className="mt-2">
							このプライバシーポリシーに関するご質問は{" "}
							<a
								href="mailto:o2cafedeveloper@gmail.com"
								className="underline hover:text-gray-900 dark:hover:text-gray-50"
							>
								o2cafedeveloper@gmail.com
							</a>{" "}
							までお問い合わせください。
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
}
