const mockResponse = {
	data: {
		results: [
			{
				name: {
					title: "Mrs",
					first: "Cherly",
					last: "Barnett",
				},

				login: {
					uuid: "20ae2e1e-f13d-4559-a8b4-f413b876b810",
					username: "brownwolf366",
					password: "redbone",
				},

				picture: {
					large: "https://randomuser.me/api/portraits/women/69.jpg",
					medium: "https://randomuser.me/api/portraits/med/women/69.jpg",
					thumbnail: "https://randomuser.me/api/portraits/thumb/women/69.jpg",
				},
			},
			{
				name: {
					title: "Mr",
					first: "Owen",
					last: "Bergeron",
				},
				login: {
					uuid: "09858248-238a-45de-9531-7b18f95e35fa",
					username: "whiteswan356",
					password: "people",
				},

				picture: {
					large: "https://randomuser.me/api/portraits/men/69.jpg",
					medium: "https://randomuser.me/api/portraits/med/men/69.jpg",
					thumbnail: "https://randomuser.me/api/portraits/thumb/men/69.jpg",
				},
			},
			{
				name: {
					title: "Mrs",
					first: "Nicole",
					last: "Cruz",
				},
				login: {
					uuid: "9ffaed46-3b28-43a9-b3c2-bf330101bf5b",
					username: "bigdog836",
					password: "rogue",
				},

				picture: {
					large: "https://randomuser.me/api/portraits/women/25.jpg",
					medium: "https://randomuser.me/api/portraits/med/women/25.jpg",
					thumbnail: "https://randomuser.me/api/portraits/thumb/women/25.jpg",
				},
			},
			{
				name: {
					title: "Miss",
					first: "کیمیا",
					last: "صدر",
				},
				login: {
					uuid: "dda302d0-d894-42bb-a18c-ccfcb2897670",
					username: "lazywolf195",
					password: "cory",
					salt: "KaYlLEu6",
					md5: "303ae6800cdac804420fe23ce6cf0a96",
					sha1: "adac32edbfc962c60044091c97f656a64f4aa5ad",
					sha256: "b0cdac7d19c679420e41f7cd214771e09ac15d5a59b7c52b3938bd8034723528",
				},
				picture: {
					large: "https://randomuser.me/api/portraits/women/85.jpg",
					medium: "https://randomuser.me/api/portraits/med/women/85.jpg",
					thumbnail: "https://randomuser.me/api/portraits/thumb/women/85.jpg",
				},
			},
			{
				name: {
					title: "Mr",
					first: "Nahid",
					last: "Hossain",
				},
				login: {
					uuid: "90a6d2ec-12d7-4642-a88e-b5eddaea902e",
					username: "nahid9764",
					password: "wallace",
				},
				picture: {
					large: "https://randomuser.me/api/portraits/men/86.jpg",
					medium: "https://randomuser.me/api/portraits/med/men/86.jpg",
					thumbnail: "https://randomuser.me/api/portraits/thumb/men/86.jpg",
				},
			},
		],
	},
};

export default {
	get: jest.fn().mockResolvedValue(mockResponse),
};
