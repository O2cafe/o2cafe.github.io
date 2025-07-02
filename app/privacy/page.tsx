import Link from "next/link";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield } from "lucide-react";
import { getAllApps } from "@/lib/privacy-policies";

export default function PrivacyPage() {
	const apps = getAllApps();

	return (
		<div className="space-y-8">
			<div className="text-center space-y-4">
				<div className="flex justify-center">
					<Shield className="h-16 w-16 text-gray-400" />
				</div>
				<h1 className="text-3xl font-bold tracking-tighter md:text-4xl">
					02Cafe Privacy Policy
				</h1>
				<p className="max-w-2xl mx-auto text-gray-500 dark:text-gray-400 md:text-lg">
					02Cafeが開発するアプリケーションのプライバシーポリシーをご確認いただけます。
					各アプリケーションのデータ取り扱いについて詳しく説明しています。
				</p>
			</div>

			<div className="space-y-6">
				<div className="space-y-2">
					<h2 className="text-2xl font-bold tracking-tight">
						All Policies
					</h2>
					<p className="text-gray-500 dark:text-gray-400">
						以下のアプリケーションのプライバシーポリシーをご確認いただけます。
					</p>
				</div>

				<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
					{apps.map((app) => (
						<Card
							key={app.id}
							className="rounded-none border-black dark:border-white h-full flex flex-col"
						>
							<CardHeader>
								<CardTitle className="text-lg">
									{app.name}
								</CardTitle>
								<CardDescription className="text-sm">
									{app.description}
								</CardDescription>
							</CardHeader>
							<CardContent className="flex-1 flex flex-col justify-between">
								<div className="space-y-2 mb-4">
									<p className="text-xs text-gray-500 dark:text-gray-400">
										最終更新日: {app.lastUpdated}
									</p>
								</div>
								<Link href={`/privacy/${app.id}`}>
									<Button className="w-full rounded-none bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
										プライバシーポリシーを見る
										<ArrowRight className="ml-2 h-4 w-4" />
									</Button>
								</Link>
							</CardContent>
						</Card>
					))}
				</div>
			</div>

			<div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-none border border-gray-200 dark:border-gray-800">
				<h3 className="text-lg font-semibold mb-3">基本方針</h3>
				<div className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
					<p>
						02Cafeは、ユーザーの皆様のプライバシーを尊重し、個人情報を適切に保護することをお約束いたします。
					</p>
					<p>
						各アプリケーションで収集される情報の種類、利用目的、第三者提供の有無などについて、
						透明性を持って説明いたします。
					</p>
					<p>
						プライバシーポリシーに関するご質問やご意見がございましたら、
						お気軽に{" "}
						<a
							href="mailto:o2cafedeveloper@gmail.com"
							className="underline"
						>
							o2cafedeveloper@gmail.com
						</a>{" "}
						までお問い合わせください。
					</p>
				</div>
			</div>
		</div>
	);
}
