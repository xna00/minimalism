let count = 0;

const map = new WeakMap<object, number>();

export const genKey = (o: object) => {
	const t = map.get(o);
	if (t) {
		return t;
	} else {
		const key = count++;
		map.set(o, key);
		return key;
	}
};
