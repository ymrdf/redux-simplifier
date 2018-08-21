/**
 * Prints a warning in the console if it exists.
 * Copied from redux;("_")
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
export function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(`Redux-enhancer message: \n${message}`);
  }
  /* eslint-enable no-console */
  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
  } catch (e) {} // eslint-disable-line no-empty
}
