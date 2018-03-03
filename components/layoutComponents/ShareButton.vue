<template>
  <v-bottom-sheet v-model="sheet">
    <v-btn slot="activator" depressed color="primary" class="mr-0 p-0" style="min-width: 0; width: 36px;"><v-icon>share</v-icon></v-btn>
    <v-list>
      <v-subheader>Compartir torneo</v-subheader>
        <v-list-tile
          v-for="tile in tiles"
          :key="tile.title"
          @click="sheet = false"
          v-if="tile.network === 'whatsapp' ? $device.isMobileOrTablet || false : true"
        >
         <social-sharing
            :url="url"
            :title="name"
            description="Participa en este torneo!"
            quote="Participa en este torneo!"
            hashtags="appventure"
            inline-template
            network-tag="div"
          >
          <network :network="tile.network" class="d-flex align-items-center" style="width: 100%;">
            <v-list-tile-avatar>
              <v-avatar size="32px" tile>
                <img :src="tile.img" :alt="tile.title">
              </v-avatar>
            </v-list-tile-avatar>
            <v-list-tile-title>{{ tile.title }}</v-list-tile-title>
          </network>
         </social-sharing>
        </v-list-tile>
    </v-list>
  </v-bottom-sheet>
</template>
<script>
  export default {
    props: ['name'],
    computed: { url () { return 'https://appventure-web.firebaseapp.com/tournaments/' + this.$route.params.date + '/' + this.$route.params.slug } },
    data: () => ({
      sheet: false,
      tiles: [
        {
          img: '/social/twitter.png',
          title: 'Twitter',
          network: 'twitter'
        },
        {
          img: '/social/facebook.png',
          title: 'Facebook',
          network: 'facebook'
        },
        {
          img: '/social/whatsapp.png',
          title: 'WhatsApp',
          network: 'whatsapp'
        }
      ]
    })
  }
</script>
