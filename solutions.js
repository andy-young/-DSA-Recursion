function countSheep(n) {
	if (n === 1) return console.log(`${n} - Another sheep jump over the fence`);
    console.log(`${n} - Another sheep jump over the fence`);
	return countSheep(--n)
}

countSheep(3);
