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
					label: 'Diaries',
					autogenerate: { directory: 'diary' },
				},
				// {
				// 	label: 'Reference',
				// 	autogenerate: { directory: 'reference' },
				// },
			],
		}),
	],
});
