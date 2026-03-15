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
					label: 'WhitePapers',
					autogenerate: { directory: 'whitepapers' },
				},
				{
					label: 'Articles',
					autogenerate: { directory: 'articles' },
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
