<script>
  import { Page, Navbar, Block, Button, List, ListItem, BlockTitle } from 'konsta/svelte'
  import { TonConnectUI } from '@tonconnect/ui'
  import { onMount } from 'svelte'

  onMount(() => {
    const tonConnectUI = new TonConnectUI({
      manifestUrl: 'https://mule-native-shortly.ngrok-free.app/tonconnect-manifest.json',
      buttonRootId: 'ton-connect',
    })

    tonConnectUI.uiOptions = {
      actionsConfiguration: {
        returnStrategy: 'https://t.me/ton_auctioneer_bot/auction',
      },
      // twaReturnUrl: 'https://t.me/ton_auctioneer_bot/auction',
    }
  })
</script>

<Page>
  <Navbar title="TonAuctioneer" />

  <Block inset strong>
    <button id="ton-connect"></button>
  </Block>
  <BlockTitle>Navigation</BlockTitle>
  <List strong inset>
    <ListItem href="/about" title="About" />
    <ListItem href="/form" title="Form" />
  </List>
</Page>
