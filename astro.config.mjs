// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({

  site: 'https://peng.pdu.pub', // 临时测试用 github.io 地址也行
  base: '/',
  	// output: 'static',
	integrations: [
		starlight({
			title: 'Peng\'s Notebook',
			description: 'Diary & Philosophical Path of MiniMeta',

			components: {
					// 推荐覆盖 Footer，这样评论会显示在正文下方，且不破坏布局
					Footer: './src/components/Comments.astro',
				},

			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/tataufo/peng.pdu.pub' }],
			sidebar: [
				{
					label: 'MiniMeta',
					// autogenerate: { directory: 'minimeta' },
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: '序言：框架的起点与方法论', slug: 'minimeta/chapter_0' },
						{ label: '第一章：时间', slug: 'minimeta/chapter_1' },
						{ label: '第二章：存在与世界', slug: 'minimeta/chapter_2' },
						{ label: '第三章：生命与智能', slug: 'minimeta/chapter_3' },
						{ label: '第四章：人与社会', slug: 'minimeta/chapter_4' },
						{ label: '框架的完整闭环', slug: 'minimeta/chapter_5' },
						{ label: '框架的哲学地位与边界', slug: 'minimeta/chapter_6' },
					],
				},
				{
					label: 'WhitePapers',
					// autogenerate: { directory: 'whitepapers' },
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Version 4', slug: 'whitepapers/whitepaperv4' },
						{ label: 'Version 3', slug: 'whitepapers/whitepaperv3' },
						{ label: 'Version 2', slug: 'whitepapers/whitepaperv2' },
						{ label: 'Version 1', slug: 'whitepapers/whitepaperv1' },
					],
				},
				{
					label: 'Drafts',
					autogenerate: { directory: 'drafts' },
					// items: [
					// 	// Each item here is one entry in the navigation menu.
					// 	{ label: 'Example Guide', slug: 'guides/example' },
					// ],
				},
				{
					label: 'Current Journal',
					autogenerate: { directory: 'journal_v4' },
				},
				{
					label: 'Journal Vol. 3',
					autogenerate: { directory: 'journal_v3' },
				},
				{
					label: 'Journal Vol. 2',
					autogenerate: { directory: 'journal_v2' },
				},
				{
					label: 'Journal Vol. 1',
					autogenerate: { directory: 'journal_v1' },
				},
				{
					label: 'Journal on Twitter',
					autogenerate: { directory: 'journal_x' },
				},
				// {
				// 	label: 'Reference',
				// 	autogenerate: { directory: 'reference' },
				// },
			],
		}),
	],
});
