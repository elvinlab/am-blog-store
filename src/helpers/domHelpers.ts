const querySelector = <T extends HTMLElement>(selector: string): T | null => {
  return document.querySelector(selector) as T | null
}

const querySelectorAll = <T extends HTMLElement>(
  selector: string,
): NodeListOf<T> => {
  return document.querySelectorAll(selector) as NodeListOf<T>
}

export default {
  $: querySelector,
  $$: querySelectorAll,
}
