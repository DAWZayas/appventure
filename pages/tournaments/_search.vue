<template>
  <tournaments-pagination :arrayTournaments="tournaments"></tournaments-pagination>
</template>
<script>
  import { mapGetters } from 'vuex'
  import { getArray } from '~/utils/utils'
  import speakingurl from 'speakingurl'

  export default {
    computed: {
      ...mapGetters({ tm: 'getTournaments' }),
      tournaments () {
        var tournaments = {}

        for (var t in this.tm) {
          var lok = this.tm[t]['location']
          var info = this.tm[t]['description'] + ' ' +
                     this.tm[t]['name'] + ' ' +
                     this.tm[t]['category'] + ' ' +
                     this.tm[t]['subCategory'] + ' ' +
                     lok['administrative_area_level_1'] + ' ' +
                     lok['country'] + ' ' + lok['locality'] + ' ' +
                     lok['name'] + ' ' +
                     lok['route']

          speakingurl(info).search(this.$route.query.q) > -1 ? tournaments[t] = this.tm[t] : null
        }

        return getArray(tournaments).reverse()
      }
    }
  }
</script>
