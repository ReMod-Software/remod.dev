import Meta from "./components/Meta.tsx"

interface Props {
	children: Element
	meta: {
		title: string | undefined
		description: string | undefined
		image: string | undefined
		theme: string | undefined
	}
	blog: boolean
}

export default function Layout(props: Props) {
	return (
		<>
			<html lang="en">
				<head>
					<meta charSet="UTF-8" />
					<meta http-equiv="X-UA-Compatible" content="IE=edge" />
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1.0"
					/>

					<link rel="stylesheet" href="/index.css" />
					<link rel="icon" href="/assets/icon.png" />

					<Meta {...props.meta} />
				</head>
				<body class="m-0">
					<main id={props.blog ? "blog-content" : "content"}>
						{props.children}
					</main>
				</body>
			</html>
		</>
	)
}
