<template>
  <div>
    <v-list-tile v-for="item in items[typeUser]" :key="item.title" @click="goTo(item)">
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
import { mapActions, mapGetters } from 'vuex'

export default {
  props: ['isAuthenticated'],
  computed: {
    ...mapGetters({typeUser: 'getUserType'})
  },
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
        Venture: [
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
            link: '/login'
          },
          {
            title: 'Ayuda',
            icon: 'chat_bubble_outline',
            link: '/chat'
          },
          {
            title: 'Cerrar sesión',
            icon: 'close',
            link: '/login'
          }
        ],
        Administrador: [
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
            link: '/login'
          },
          {
            title: 'Ayuda',
            icon: 'chat_bubble_outline',
            link: '/activeChats'
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
            link: '/login'
          },
          {
            title: 'Clasificación',
            icon: 'trending_up',
            link: '/login'
          },
          {
            title: 'Ayuda',
            icon: 'chat_bubble_outline',
            link: '/login'
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
