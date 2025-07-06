import type {EnkoreJSRuntimeContextOptions} from "@anio-software/enkore.js-runtime"
import {createContext} from "@anio-software/enkore.js-runtime"

import {getEmbedAsURL} from "@anio-software/enkore.target-js-none/project"

const url1 = getEmbedAsURL("text://hello.ts")
const url2 = getEmbedAsURL("js://hello.ts");

// @ts-ignore:next-line
console.log("the URLs are: ", url1, url2);

export async function __implementation(
//>export function __implementationSync(
	options: EnkoreJSRuntimeContextOptions
): Promise<number> {
//>): number {
	const context = createContext(options, 0)

	context.log("Hello from my lib.")

	context.log.debug("Debug 1", "Debug 2")

	return 1337
}
