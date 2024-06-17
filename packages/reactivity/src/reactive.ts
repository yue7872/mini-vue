export function reactive<T>(obj: T): T {
  const myobj = obj as unknown;

  const finalObj = new Proxy(myobj as object, {
    set(target: any, key: string, value) {
      target[key] = value;
      return true;
    },
  });
  return obj;
}
