export default async function getTools() {
	const res = await fetch(`http://127.0.0.1:1337/api/tools`, { cache: "no-store" });
	// The return value is *not* serialized
	// You can return Date, Map, Set, etc.

	// Recommendation: handle errors
	if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error("Failed to fetch data");
	}

	return res.json();
}