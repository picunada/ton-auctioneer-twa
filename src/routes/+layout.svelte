<script lang="ts">
  import '../app.css'
  import { App } from 'konsta/svelte'
  import WebApp from '@twa-dev/sdk'
  import { onMount } from 'svelte'
  import { page } from '$app/stores'
  import { onNavigate } from '$app/navigation'

  export let data

  $: (() => {
    if ($page.route.id !== '/') {
      WebApp.BackButton.onClick(() => {
        history.back()
      })
      WebApp.BackButton.show()
    } else {
      WebApp.BackButton.hide()
    }
  })()

  onMount(() => {
    WebApp.colorScheme === 'dark' ? window.document.documentElement.classList.add('dark') : window.document.documentElement.classList.add('light')
    WebApp.expand()
    WebApp.setHeaderColor('bg_color')

    console.log(WebApp.initDataUnsafe)
  })

  onNavigate((navigation) => {
    // @ts-expect-error
    if (!document.startViewTransition) return

    return new Promise((resolve) => {
      // @ts-expect-error
      document.startViewTransition(async () => {
        resolve()
        await navigation.complete
      })
    })
  })
</script>

<App theme={data.theme}>
  <slot />

  <!-- <pre class="absolute bg-[var(--tg-theme-bg-color)] z-10">
    {JSON.stringify(WebApp.initDataUnsafe, null, 2)}
  </pre> -->
</App>
