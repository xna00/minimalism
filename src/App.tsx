import { useState } from "react";
import { Button } from "../";

import.meta.glob;

function App() {
	const [count, setCount] = useState(0);
	return (
		<div>
			<Button onClick={() => setCount(count + 1)}>{count}</Button>
		</div>
	);
}

export default App;
