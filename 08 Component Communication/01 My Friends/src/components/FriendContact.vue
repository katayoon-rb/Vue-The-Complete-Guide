<template>
  <li>
    <h2>{{ name }} {{ isFav ? '(Fav)' : '' }}</h2>
    <button @click="toggleFav">Toggle Favorite</button>
    <button @click="toggleDetails">Show Details</button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong> {{ phone }}
      </li>
      <li>
        <strong>Email:</strong> {{ email }}
      </li>
    </ul>
    <button @click="deleteFriend">Delete</button>
  </li>
</template>

<script>
export default {
  props: {
    id: { type: String, required: true },
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    isFav: {
      type: Boolean,
      required: false,
      default: false
    }
  },

  emits: [ 'toggleFav', 'delete' ],

  data() {
    return { detailsAreVisible: false, }
  },

  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible
    },
    toggleFav() {
      this.$emit('toggleFav', this.id)
    },
    deleteFriend() {
      this.$emit('delete', this.id)
    }
  }
}
</script>