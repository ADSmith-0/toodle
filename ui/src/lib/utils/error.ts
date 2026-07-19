type ErrorType = string | object;
type Ok<K extends string, T> = Record<K, T> & { err: null };
type Err<K extends string, E extends ErrorType> = Record<K, null> & { err: E };
export type Result<K extends string, T, E extends ErrorType> =
	Ok<K, T> | Err<K, E>;

export async function tryCatchAsync<E extends string, T>(
	fn: () => Promise<T>,
): Promise<Result<"ok", T, E>> {
	try {
		const result = await fn();
		return { ok: result, err: null };
	} catch (err) {
		return { ok: null, err: err as E };
	}
}
