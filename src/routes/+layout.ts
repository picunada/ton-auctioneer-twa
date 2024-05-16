import { parser } from "$lib/utils/device";

export const ssr = false;

export const load = () => {
  const os = parser.getOS()

  return {
    theme: (os.name === 'Android' ? 'material' : 'ios') as 'material' | 'ios'
  }
}
