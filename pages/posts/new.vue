<template>
  <section>
    <h1 class="my-6 title has-text-centered">Create a post</h1>

    <b-field horizontal label="Title">
      <b-input></b-input>
    </b-field>

    <b-field horizontal label="Content">
      <b-input type="textarea"></b-input>
    </b-field>

    <b-field horizontal><!-- Label left empty for spacing -->
      <p class="control">
        <b-button label="Create" type="is-primary" />
      </p>
    </b-field>

  </section>
</template>

<script>
export default {
  name: 'CreatePost',
}
</script>
