<template>
  <div>
    <v-list-tile v-for="item in items[isAuthenticated]" :key="item.title" @click="goTo(item)">
      <v-list-tile-action>
        <v-icon>{{ item.icon }}</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>{{ item.title }}</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
  </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  props: ['isAuthenticated'],
  methods: {
    ...mapActions(['logout']),
    goTo (item) {
      this.isMobile ? this.drawer = false : null
      if (item.title === 'Cerrar sesión') {
        this.logout()
      } else {
        this.$router.push(item.link)
      }
    }
  },
  data () {
    return {
      items: {
        true: [
          {
            title: 'Tu cuenta',
            icon: 'home',
            link: '/users'
          },
          {
            title: 'Mis torneos',
            icon: 'fa-trophy',
            link: '/userTournaments'
          },
          {
            title: 'Clasificación',
            icon: 'trending_up',
            link: '/users'
          },
          {
            title: 'Ayuda',
            icon: 'chat_bubble_outline',
            link: '/'
          },
          {
            title: 'Cerrar sesión',
            icon: 'close',
            link: '/login'
          }
        ],
        null: [
          {
            title: 'Iniciar sesión',
            icon: 'home',
            link: '/login'
          },
          {
            title: 'Mis torneos',
            icon: 'fa-trophy',
            link: '/'
          },
          {
            title: 'Clasificación',
            icon: 'trending_up',
            link: '/login'
          },
          {
            title: 'Ayuda',
            icon: 'chat_bubble_outline',
            link: '/'
          }
        ]
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .icon {
    font-size: 2rem!important;
  }
</style>
