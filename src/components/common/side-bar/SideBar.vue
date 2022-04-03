<template>
  <div class="side__bar">
    <v-navigation-drawer permanent expand class="side__bar-card">
      <v-list nav dense>
        <v-list-item>
          <AboutMe />
        </v-list-item>
        <v-list-item>
          <Contact />
        </v-list-item>
        <v-list-item>
          <Skills />
        </v-list-item>
        <v-list-item>
          <Education />
        </v-list-item>
        <v-list-item>
          <Experience />
        </v-list-item>
        <v-list-item>
          <Languages />
        </v-list-item>
        <v-list-item>
          <Specialization />
        </v-list-item>
        <v-list-item>
          <Custom />
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script lang="ts" src="./side-bar.ts" />
<style lang="scss" src="./side-bar.scss" />
