import lume from "lume/mod.ts"
import { Plugin } from "lume/core.ts"
import code_highlight from "lume/plugins/code_highlight.ts"
import esbuild from "lume/plugins/esbuild.ts"
import jsx_preact from "lume/plugins/jsx_preact.ts"
import mdx from "lume/plugins/mdx.ts"
import HeadingsSlug from "npm:rehype-slug"
import AutolinksHeadings from "npm:rehype-autolink-headings"
import tailwindcss from "lume/plugins/tailwindcss.ts"
import postcss from "lume/plugins/postcss.ts"

const site = lume({
    src: "./src",
    server: {
		port: 3000,
		open: true,
        page404: "/404/index.html"
    }
})

const Plugins: Plugin[] = [
	code_highlight(),
	esbuild(),
	jsx_preact(),
	mdx({
		rehypePlugins: [HeadingsSlug, AutolinksHeadings]
	}),
	tailwindcss({
		extensions: [".html", ".tsx"]
	}),
	postcss(),
]

Plugins.forEach((plugin) => site.use(plugin))

site.copy("assets")

export default site
