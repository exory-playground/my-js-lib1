import type {EnkoreJSRuntimeContextOptions} from "@anio-software/enkore.js-runtime/v0"
import {createContext} from "@anio-software/enkore.js-runtime"

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
