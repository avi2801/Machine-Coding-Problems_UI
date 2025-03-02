export const data = [
	{
		id: "1",
		name: "src",
		isFolder: true,
		isChildren: [
			{
				id: "6",
				name: "components",
				isFolder: true,
				isChildren: [
					{ id: "7", name: "Header.js", isFolder: false },
					{ id: "8", name: "Footer.js", isFolder: false },
				],
			},
			{
				id: "9",
				name: "utils",
				isFolder: true,
				isChildren: [{ id: "10", name: "helpers.js", isFolder: false }],
			},
			{ id: "11", name: "index.js", isFolder: false },
		],
	},
	{
		id: "2",
		name: "public",
		isFolder: true,
		isChildren: [
			{ id: "12", name: "index.html", isFolder: false },
			{ id: "13", name: "favicon.ico", isFolder: false },
		],
	},
	{
		id: "3",
		name: "data",
		isFolder: true,
		isChildren: [{ id: "14", name: "data.json", isFolder: false }],
	},
	{ id: "4", name: "readme.md", isFolder: false },
	{ id: "5", name: "package.json", isFolder: false },
];
