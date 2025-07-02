export interface PrivacyPolicyApp {
	id: string;
	name: string;
	description: string;
	lastUpdated: string;
}

export const apps: PrivacyPolicyApp[] = [
	{
		id: "memoranka",
		name: "メモランカ",
		description: "ランキング形式のメモアプリ",
		lastUpdated: "2025年7月2日",
	},
];

export function getAllApps(): PrivacyPolicyApp[] {
	return apps;
}
