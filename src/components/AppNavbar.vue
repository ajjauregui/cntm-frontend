<template>
  <div>
    <v-app-bar color="secondary" prominent>
        <v-app-bar-nav-icon
          variant="text"
          @click.stop="drawer = !drawer"
        ></v-app-bar-nav-icon>

      <v-avatar
      color="info"
      size="x-large"
      >
        <v-btn @click="router('/')">CNTM</v-btn>
      </v-avatar>
        <v-toolbar-title>CNTM The best Courses</v-toolbar-title>
      </v-app-bar>

      <v-navigation-drawer v-model="drawer" bottom temporary>
        
        <div class="text-center">
          <v-menu
            open-on-hover
          >

            <template v-slot:activator="{ props }">
              <v-btn
                color="warning"
                @click="router('/')"
                class="ml-10 mb-10 mt-10"
              >
                Home
              </v-btn>
              <v-btn
                color="warning"
                v-bind="props"
                class="ml-10 mb-10 mt-10"
              >
                Users
              </v-btn>
            </template>

            <v-list>
                <v-list-item
                  v-for="(item, index) in items"
                  :key="index"
                >
                  <v-btn
                    color="warning"
                    @click="router(item.to)"
                  >
                  {{ item.title }}
                  </v-btn>
                </v-list-item>

            </v-list>
          </v-menu>
        </div>

      </v-navigation-drawer>
  </div>
</template>
<script>
  export default {
    name: 'AppBar',
    data: () => ({
      drawer: false,
    group: null,
      items: [
        {title: 'User List',
        to: '/user-list' },
        {title: 'New User',
        to: '/new-user' },
        {title: 'Update User',
        to: '/update-user' },
        {title: 'Delete User',
        to: '/delete-user' }
      ],
    }),
    watch: {
    group() {
      this.drawer = false;
    }
    },
    methods: {
      router(to){
        this.$router.push(to)

      }
    }
  }
</script>
