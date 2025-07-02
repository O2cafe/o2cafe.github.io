import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Calendar, Mail, Smartphone } from "lucide-react";

export default function MemorankaPrivacyPage() {
	return (
		<article className="space-y-8">
			<header className="space-y-4">
				<div className="space-y-2">
					<Badge
						variant="outline"
						className="rounded-none border-black dark:border-white"
					>
						モバイルアプリケーション
					</Badge>
					<h1 className="text-3xl font-bold tracking-tighter md:text-4xl">
						メモランカ プライバシーポリシー
					</h1>
					<p className="text-lg text-gray-500 dark:text-gray-400">
						ランキング形式のメモアプリ
					</p>
				</div>

				<div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400">
					<div className="flex items-center gap-2">
						<Calendar className="h-4 w-4" />
						<span>最終更新: 2025年7月2日</span>
					</div>
					<div className="flex items-center gap-2">
						<Smartphone className="h-4 w-4" />
						<span>対象: モバイルデバイス</span>
					</div>
					<div className="flex items-center gap-2">
						<Mail className="h-4 w-4" />
						<a
							href="mailto:o2cafedeveloper@gmail.com"
							className="underline hover:text-gray-900 dark:hover:text-gray-50"
						>
							o2cafedeveloper@gmail.com
						</a>
					</div>
				</div>
			</header>

			<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-none border border-blue-200 dark:border-blue-800">
				<h3 className="text-lg font-semibold mb-3 text-blue-900 dark:text-blue-100">
					重要なお知らせ
				</h3>
				<p className="text-sm text-blue-800 dark:text-blue-200">
					この文書は、スマートフォン用アプリ「メモランカ」に関するプライバシーポリシーであり、02Cafeによって作成されたものです。
					<br />
					本アプリは、現在提供されている機能・仕様のままご利用いただくことを前提としています。
					<br />
					メモランカは一切の個人情報を収集しないため、ユーザーのプライバシーは完全に保護されます。
				</p>
			</div>

			<Separator className="bg-black dark:bg-white" />

			<div className="prose prose-gray dark:prose-invert max-w-none">
				<div className="space-y-8">
					<section className="space-y-4">
						<h2 className="text-2xl font-bold tracking-tight">
							個人情報の収集について
						</h2>
						<div className="text-gray-600 dark:text-gray-400 leading-relaxed">
							メモランカは、アプリをダウンロードした時も使用中も、個人情報を一切収集しません。
							<br />
							このアプリを使うために、ユーザー登録などの手続きは不要です。
						</div>
					</section>

					<Separator />

					<section className="space-y-4">
						<h2 className="text-2xl font-bold tracking-tight">
							位置情報の取得について
						</h2>
						<div className="text-gray-600 dark:text-gray-400 leading-relaxed">
							このアプリは、あなたのスマートフォンの位置情報を取得することはありません。
						</div>
					</section>

					<Separator />

					<section className="space-y-4">
						<h2 className="text-2xl font-bold tracking-tight">
							他社との情報共有について
						</h2>
						<div className="text-gray-600 dark:text-gray-400 leading-relaxed">
							このアプリは情報を全く収集しないため、他の会社や組織と情報を共有することはありません。
						</div>
					</section>

					<Separator />

					<section className="space-y-4">
						<h2 className="text-2xl font-bold tracking-tight">
							アプリの削除について
						</h2>
						<div className="text-gray-600 dark:text-gray-400 leading-relaxed">
							このアプリによる情報収集を止めたい場合は、アプリを削除してください。
							<br />
							スマートフォンの設定画面から、通常の方法でアプリを削除できます。
						</div>
					</section>

					<Separator />

					<section className="space-y-4">
						<h2 className="text-2xl font-bold tracking-tight">
							お子様の利用について
						</h2>
						<div className="text-gray-600 dark:text-gray-400 leading-relaxed space-y-4">
							<p>
								このアプリは、13歳未満のお子様から意図的に情報を集めたり、お子様向けの宣伝を行うことはありません。
							</p>

							<p>
								O2Cafeは、お子様から個人情報を意図的に収集することはありません。
								<br />
								すべてのお子様には、このアプリを通じて個人情報を送信しないことを強くお勧めします。
								<br />
								保護者の皆様には、お子様のインターネット利用を見守り、保護者の許可なく個人情報を提供しないよう指導していただくことをお願いします。
							</p>

							<p>
								もしお子様がこのアプリを通じてO2Cafeに個人情報を提供したと思われる場合は、O2Cafeまでご連絡ください。
								<br />
								適切な対応をいたします。
								<br />
								個人情報の処理に同意するには、お住まいの国で16歳以上である必要があります（一部の国では、保護者が代わりに同意できる場合があります）。
							</p>
						</div>
					</section>

					<Separator />

					<section className="space-y-4">
						<h2 className="text-2xl font-bold tracking-tight">
							セキュリティについて
						</h2>
						<div className="text-gray-600 dark:text-gray-400 leading-relaxed">
							O2Cafeは、皆様の情報を安全に守ることを大切に考えています。
							<br />
							ただし、このアプリは情報を全く収集しないため、あなたのデータが他の人に見られる心配はありません。
						</div>
					</section>

					<Separator />

					<section className="space-y-4">
						<h2 className="text-2xl font-bold tracking-tight">
							ポリシーの変更について
						</h2>
						<div className="text-gray-600 dark:text-gray-400 leading-relaxed">
							このプライバシーポリシーは、必要に応じて更新することがあります。
							<br />
							O2Cafeは、変更があった場合、このページを更新してお知らせします。
							<br />
							時々このページをご確認いただき、変更がないかチェックすることをお勧めします。
							<br />
							アプリを引き続きご利用いただくことで、変更内容にご同意いただいたものとみなします。
						</div>
					</section>

					<Separator />

					<section className="space-y-4">
						<h2 className="text-2xl font-bold tracking-tight">
							ご利用者の同意について
						</h2>
						<div className="text-gray-600 dark:text-gray-400 leading-relaxed">
							このアプリをお使いいただくことで、現在のプライバシーポリシーと今後O2Cafeが変更するプライバシーポリシーの内容にご同意いただいたものとします。
						</div>
					</section>
				</div>
			</div>

			<div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-none border border-gray-200 dark:border-gray-800">
				<h3 className="text-lg font-semibold mb-3">お問い合わせ先</h3>
				<div className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
					<p>
						プライバシーについて分からないことがあれば、いつでもお気軽にご連絡ください。
					</p>
					<div className="font-mono bg-white dark:bg-black p-3 border rounded-none">
						<div>
							Email:{" "}
							<a
								href="mailto:o2cafedeveloper@gmail.com"
								className="underline"
							>
								o2cafedeveloper@gmail.com
							</a>
						</div>
						<div>担当: 02Cafe 開発チーム</div>
					</div>
					<p className="text-xs mt-4 border-t pt-3">
						このプライバシーポリシーは 2025年7月2日 から有効です。
					</p>
				</div>
			</div>
		</article>
	);
}
