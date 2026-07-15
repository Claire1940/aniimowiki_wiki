import {
	BookOpen,
	PawPrint,
	Gamepad2,
	Calendar,
	MonitorSmartphone,
	Download,
	Coins,
	type LucideIcon,
} from 'lucide-react'

export interface NavigationItem {
	key: string // 用于翻译键，如 'guide' -> t('nav.guide')
	path: string // URL 路径，如 '/guide'
	icon: LucideIcon // Lucide 图标组件
	isContentType: boolean // 是否对应 content/ 目录
}

// ANIIMO 内容分类（与 content/{locale}/ 目录一一对应，community 分类已剔除）
// 顺序：核心玩法内容优先，其次上线/平台/测试信息，最后商业化
export const NAVIGATION_CONFIG: NavigationItem[] = [
	{ key: 'guide', path: '/guide', icon: BookOpen, isContentType: true },
	{ key: 'creatures', path: '/creatures', icon: PawPrint, isContentType: true },
	{ key: 'features', path: '/features', icon: Gamepad2, isContentType: true },
	{ key: 'release', path: '/release', icon: Calendar, isContentType: true },
	{ key: 'platforms', path: '/platforms', icon: MonitorSmartphone, isContentType: true },
	{ key: 'beta', path: '/beta', icon: Download, isContentType: true },
	{ key: 'monetization', path: '/monetization', icon: Coins, isContentType: true },
]

// 从配置派生内容类型列表（用于路由和内容加载）
export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map(
	(item) => item.path.slice(1),
) // 移除开头的 '/' -> ['guide', 'creatures', 'features', 'release', 'platforms', 'beta', 'monetization']

export type ContentType = (typeof CONTENT_TYPES)[number]

// 辅助函数：验证内容类型
export function isValidContentType(type: string): type is ContentType {
	return CONTENT_TYPES.includes(type as ContentType)
}
