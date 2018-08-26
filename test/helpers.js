export function findByTestName(wrapper, name) {
  return wrapper.find(`[data-test-name="${name}"]`);
}
