import type {EnkoreJSRuntimeContext} from "@anio-software/enkore.js-runtime/v0"

export async function __implementation(
//>export function __implementationSync(
	context: EnkoreJSRuntimeContext
): Promise<number> {
//>): number {
	context.log("Hello from my lib.")

	context.log.debug("Debug 1", "Debug 2")

	return 1337
}
