interface Embed {
	title?: string | undefined
	description?: string | undefined
	url?: string | undefined
	image?: string | undefined
}

export default function Meta(props: Embed) {
	const ROOT = "https://remod.dev"
	props.title = props.title ??
		"ReMod Software | Empowering the next-generation of tools and developers."
	props.description = props.description ??
		"ReMod Software is a company formed by hobbyists aimed at supercharging open-source technologies and help make your next big move on the web."
	props.url = props.url ?? ROOT
	props.image = props.image ?? `${ROOT}/assets/meta.png`

	return (
		<>
			<title>{props.title}</title>
			<meta
				name="description"
				content={props.description}
			/>

			<meta property="og:url" content={props.url} />
			<meta property="og:type" content="website" />
			<meta
				property="og:title"
				content={props.title}
			/>
			<meta
				property="og:description"
				content={props.description}
			/>
			<meta
				property="og:image"
				content={props.image}
			/>
			<meta name="theme-color" content="#A00500" />

			<meta name="twitter:card" content="summary_large_image" />
			<meta property="twitter:domain" content="quickstayrooms.com" />
			<meta property="twitter:url" content={props.url} />
			<meta
				name="twitter:title"
				content={props.title}
			/>
			<meta
				name="twitter:description"
				content={props.description}
			/>
			<meta
				name="twitter:image"
				content={props.image}
			/>
		</>
	)
}
