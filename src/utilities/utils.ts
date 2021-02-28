export function debounce<Params extends any[]>(
  func: () => any,
  timeout: number
): (...args: Params) => void {
  let timer: NodeJS.Timeout;
  return (...args: Params) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func();
    }, timeout);
  };
}

// const debouncedTest = debounce(test, 2000);

// debouncedTest("message");
