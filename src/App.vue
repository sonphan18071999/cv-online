<template>
  <v-app class="app">
    <Header />
    <div class="body__container">
      <SideBar />
      <div>
        <router-view />
      </div>
    </div>
  </v-app>
</template>

<script lang="ts" src="./app.ts" />
<style lang="scss" src="./app.scss" />
